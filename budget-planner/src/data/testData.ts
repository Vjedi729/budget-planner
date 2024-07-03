import { Account } from "./account"
import { Vendor } from "./vendor"
import { ExternalTransaction, Recurrence } from "./transactions"
import { BucketName } from "./enums"
import { Purchase } from "./purchase"
import { RecurringTransaction, EveryMonthOnTheNth } from "./transactions"
import { BudgetConfig, OLD_BudgetConfig, FromOldConfig } from "./budgetConfig"
import { BasicHistoryOf, HistoryOf } from "./history"
import { BucketBalance, BucketFillAlgorithm } from "./bucket-fill-algorithm/interface"

import { cloneDeep, includes } from "lodash"
import { JsSort } from "@/ts-utils/sort-utils"
import { filterRecord, getOrDefault } from "@/ts-utils/record-utils"
import { dollarFormat } from "@/utilities/displayUtils"
import { isDefined } from "@/ts-utils/undefined-utils"

export const testAccount = new Account("[CREDIT] Costco Citi Visa *8042")
export const testTransactionData: ExternalTransaction[] = [
    new ExternalTransaction(new Date(2023,8,20), 34.14, new Vendor("Meijer"), testAccount),
    new ExternalTransaction(new Date(2023,8,23), 102.54, new Vendor("Costco"), testAccount, [
        new Purchase(4.99, "Groceries", "Strawberries", ""),
        new Purchase(11.99, "For Matt", "Fig Chocolate", ""),
        new Purchase(8.69, "Groceries", "Blueberry Acai Chocolates", ""),
        new Purchase(15.99, "Groceries", "Sharp Cheddar Cheese", "")
    ])
]

export const testRecurringData: RecurringTransaction[] = [
    new RecurringTransaction(12, new Date(2023,1,1), 40, "Cats", testAccount, new Vendor("Chewy"), "Cat Food"),
    new RecurringTransaction(4, new Date(2022,2,1), 120, "Unknown", testAccount, new Vendor("Pointe"), "Pest Control")
]

export const incomeBucket: BucketName = "Income"
export function testIncomePerPayPeriod(date: Date): number { return -1300 };
export function testIncomeTransactions(startTime: Date, endTime: Date): ExternalTransaction[] {
    const job = new Vendor("My Job")
    return (new EveryMonthOnTheNth(5).listTimes(startTime, endTime)).concat(new EveryMonthOnTheNth(20).listTimes(startTime, endTime)).map(
        (date) => new ExternalTransaction(
            date, testIncomePerPayPeriod(date), job, testAccount, [new Purchase(testIncomePerPayPeriod(date), incomeBucket, "Take Home Pay")]
        )
    )
}

export const testBudgetData: OLD_BudgetConfig<"Vishal Fun Money"|"Meridith Fun Money"|"Both Fun Money", "Vishal"|"Meridith"> = {
    people: ["Vishal", "Meridith"],
    incomes: { bucketNames: [incomeBucket]},
    needs: {
        bucketNames: [
            "Home Improvement",
            "Housing", 
            "Groceries", 
            "Utilities", 
            "Car", 
            "Health",
            "Clothes",
            "Needs Debts"
        ]
    },
    wants: {
        wantsMoneySplit: {
            "Vishal Fun Money": 30,
            "Meridith Fun Money": 30,
            "Both Fun Money": 40
        },
        bucketFilling: {
            "Meridith Fun Money": { "allocations": {
                "Cats": 150, // What is happening here?
                "Fish": 20,
                "Garden": 20,
                "Sewing": 30,
            }},
            "Vishal Fun Money": { "allocations": {
                "Garden": 10,
                "Fish": 10,
            }},
            "Both Fun Money": { "allocations": {
                "Housewares": 30,
                "Garden": 10,
                "Sewing": 10,
                "Dining": 100,
            }}
        }
    }
}
export const testBudgetRefillRecurrence = new EveryMonthOnTheNth(2)

export const laterDateFirstSort: JsSort.FunctionType<Date> = (a:Date, b:Date) => b.getTime() - a.getTime();
export const earlierDateFirstSort: JsSort.FunctionType<Date> = (a, b) => -laterDateFirstSort(a, b);
export const testInitialDate = new Date(2020, 1, 1)
export const testInitialBucketBalances = {}

let _testBudgetHistory = new BasicHistoryOf(laterDateFirstSort, FromOldConfig(testBudgetData), testInitialDate);
_testBudgetHistory.reportNoChange(new Date(Date.now()));
export var testBudgetConfigHistory = _testBudgetHistory;

export function GetGroupBalance(bucketBalance: BucketBalance, buckets: BucketName[]) {
    return Object.values(filterRecord(bucketBalance, buckets, 0)).reduce((p,c)=>p+c,0)
}

export function fillWantsBuckets(
    bucketBalances: BucketBalance, budget: OLD_BudgetConfig, wantsDollarsToAdd: number
) : BucketBalance {

    // console.log("Before Filling", cloneDeep(bucketBalances))

    // Add money to wants buckets
    let totalWeight = Object.values(budget.wants.wantsMoneySplit).reduce((a, b) => (a||0)+(b||0))
    if(totalWeight != undefined) {
        Object.entries(budget.wants.wantsMoneySplit).forEach(([toBucket, weight]) => {
            if(weight == undefined || totalWeight == undefined) return;
            bucketBalances[toBucket] = (bucketBalances[toBucket] || 0) + (wantsDollarsToAdd * weight / totalWeight)
            // console.log("Bucket Fill", toBucket, weight, totalWeight, cloneDeep(bucketBalances))
        })
    }

    // Move money between buckets
    Object.entries(budget.wants.bucketFilling).forEach(([fromBucket, data]) => {
        Object.entries(data.allocations).forEach(([toBucket, amount])=> {
            if (amount != undefined) {
                bucketBalances[toBucket] = (bucketBalances[toBucket] || 0) + amount;
                bucketBalances[fromBucket] = (bucketBalances[fromBucket] || 0) - amount;
            }
            // console.log("Bucket Transfer", fromBucket, toBucket, amount, cloneDeep(bucketBalances))
        })
    })

    return bucketBalances;
}

export function HELPER_quickDistributeMoneyToBuckets(
    budget: OLD_BudgetConfig,
    initialBalances: BucketBalance,
    logContext: any // * Used for logging
) : BucketBalance {
    let currentBalances = cloneDeep(initialBalances);
    budget.incomes.bucketNames.forEach(undistributedIncomeBucket => {
        let undistributedMoney = currentBalances ? (currentBalances[undistributedIncomeBucket] || 0) : 0;

        // # Move money from Income to Needs buckets
        budget.needs.bucketNames.forEach((needBucketName) => {

            if(undistributedMoney < -currentBalances[needBucketName]) {
                console.warn(
                    "Insufficient income to cover needs at", logContext, 
                    needBucketName, "bucket needs", -currentBalances[needBucketName], "from", undistributedMoney
                ); 
                
                currentBalances[needBucketName] += undistributedMoney;
                undistributedMoney = 0;
            } else {
                // console.log("Filling needs bucket", needBucketName, currentBalances[needBucketName], undistributedIncomeBucket, undistributedMoney)
                undistributedMoney += currentBalances[needBucketName];
                currentBalances[needBucketName] = 0;
            }
            // console.log("Filled needs bucket", needBucketName, currentBalances[needBucketName], undistributedIncomeBucket, undistributedMoney)            
        })

        // * Move remaining money to wants buckets
        let amountToAddToWants = undistributedMoney; // * Our expected amount is about $570 
        if(logContext !== undefined) console.log(`Adding ${dollarFormat(amountToAddToWants)} to wants buckets on `, logContext)

        let newVal = fillWantsBuckets(currentBalances, budget, amountToAddToWants)
        // console.log(cloneDeep(currentTime), cloneDeep(newVal))

        // * Remove money from undistributed income, since it has been distributed.
        newVal[undistributedIncomeBucket] = 0;

        currentBalances = newVal;
    })

    return currentBalances;
}

export function processTransaction<TimeType>(
    transaction: ExternalTransaction<TimeType>,
    balances: BucketBalance
) {
    let purchasePriceSum = 0;

    transaction.purchases.forEach((purchase: Purchase) => {
        balances[purchase.bucket] = (balances[purchase.bucket] || 0) - purchase.price;
        purchasePriceSum += purchase.price
    })
    balances[BucketName.NONE] = (balances[BucketName.NONE] || 0) - (transaction.amount - purchasePriceSum);

    return balances;
}
    
// ! Expects config "moneyDistributions" recurrences to all be the same as `budgetRefillRecurrence`
export function OLD_getBucketBalancesDetailed<Budgets extends string, TimeType>(
    utilities: {
        laterTimeFirstSort: JsSort.FunctionType<TimeType>,
    },
    boundaryConditions: {
        initialBucketBalances: BucketBalance, initialTime: TimeType,
        endTime: TimeType, inclusive: boolean | undefined
    },
    budgetConfig: HistoryOf<BudgetConfig<Budgets, TimeType>, TimeType>, 
    budgetRefillRecurrence: Recurrence<TimeType>,
    transactionData: ExternalTransaction<TimeType>[],
) {
    // * Set Param Defaults
    boundaryConditions.inclusive = boundaryConditions.inclusive == undefined ? false : boundaryConditions.inclusive;  

    // * Create Initial Data
    let balancesHistory = new BasicHistoryOf(utilities.laterTimeFirstSort, boundaryConditions.initialBucketBalances, boundaryConditions.initialTime, 0);
    // let wantsFillAmounts: {time: TimeType, amount: number}[] = []
    // console.log("Initial Balances", cloneDeep(balancesHistory.currentValue))

    let bucketFillDates = budgetRefillRecurrence.listTimes(boundaryConditions.initialTime, boundaryConditions.endTime).sort((a, b) => -utilities.laterTimeFirstSort(a, b));
    // console.log("Bucket Fill Dates", bucketFillDates);

    let transactionsInRange = transactionData.filter((transaction) => {
        let sortResult = utilities.laterTimeFirstSort(boundaryConditions.endTime, transaction.time)
        return JsSort.ResultEquals(sortResult, JsSort.ResultType.LeftArgFirst) || (boundaryConditions.inclusive && JsSort.ResultEquals(sortResult, JsSort.ResultType.KeepOriginalOrder))
    }).sort((a, b) => -utilities.laterTimeFirstSort(a.time, b.time)) // * Sorting happens later

    // console.log("Transactions given", cloneDeep(transactionData))
    // console.log("Transactions before", endTime, cloneDeep(transactionsInRange))
    transactionsInRange.forEach((transaction, i) => {
        // * Fill buckets as many times as appropriate before the time of this transaction
        const currentTime = bucketFillDates[0];
        while(currentTime && JsSort.IsRightArgFirst(utilities.laterTimeFirstSort, bucketFillDates[0], transaction.time))
        {
            // * Add money based on amount not spent on needs in the previous time period
            // console.log("Filling buckets at time", currentTime.toString(), "before transaction", i, cloneDeep(balancesHistory.currentValue));
            {
                // * Get current state
                let budget = budgetConfig.getValue(currentTime);
                if(budget == undefined) {
                    console.error("No budget config found at time", currentTime, "in", budgetConfig)   
                    return;
                }
                let balances = cloneDeep(balancesHistory.getValue(currentTime));
                if(balances == undefined) {
                    console.error("No balance found at time", currentTime, "in", balances)
                    return;
                }
                
                // * Record new balances
                // TODO: Properly run distributions
                budget.moneyDistributions.forEach(dist => {
                    balances = dist.bucketFillAlgorithm.fillBuckets(balances as BucketBalance<number>)
                });
            }
            // wantsFillAmounts.push({time: currentTime, amount: amountToAddToWants})

            bucketFillDates.shift();
        }

        // * Process this transaction
        let newBalances = processTransaction<TimeType>(transaction, cloneDeep(balancesHistory.currentValue));
        // console.log("Processed transaction", i, transaction);
        // console.log(cloneDeep(transaction.time), cloneDeep(newBalances))
        balancesHistory.setValue(newBalances, transaction.time)
    })

    return {
        bucketBalanceHistory: balancesHistory,
        // wantsFillAmounts: wantsFillAmounts,
    }

}

type Task<MoneyType = number> = ((inBalances: BucketBalance<MoneyType>) => BucketBalance<MoneyType>)
type TaskList<TimeType> = Array<[TimeType, Task]>

// TODO: Needs memoization
export function getBucketBalancesDetailed<Budgets extends string, TimeType = Date>(
    utilities: {
        laterTimeFirstSort: JsSort.FunctionType<TimeType>,
    },
    boundaryConditions: {
        initialBucketBalances: BucketBalance, initialTime: TimeType,
        endTime: TimeType, inclusive: boolean | undefined
    },
    budgetConfig: HistoryOf<BudgetConfig<Budgets, TimeType>, TimeType>, 
    budgetRefillRecurrence: Recurrence<TimeType>,
    transactionData: ExternalTransaction<TimeType>[],
) {
    // * Set Param Defaults
    boundaryConditions.inclusive = boundaryConditions.inclusive == undefined ? false : boundaryConditions.inclusive;  

    // * Create Initial Data
    let balancesHistory = new BasicHistoryOf(utilities.laterTimeFirstSort, boundaryConditions.initialBucketBalances, boundaryConditions.initialTime, 0);
    // console.log("Initial Balances", cloneDeep(balancesHistory.currentValue))

    // * Create Tasks
    let transactionsInRange = transactionData.filter((transaction) => {
        let sortResult = utilities.laterTimeFirstSort(boundaryConditions.endTime, transaction.time)
        return JsSort.ResultEquals(sortResult, JsSort.ResultType.LeftArgFirst) || (boundaryConditions.inclusive && JsSort.ResultEquals(sortResult, JsSort.ResultType.KeepOriginalOrder))
    })//.sort((a, b) => -utilities.laterTimeFirstSort(a.time, b.time)) // * Sorting happens later

    const transactionTasks: TaskList<TimeType> = transactionsInRange.map(
        t => [t.time, (inBal: BucketBalance<number>) => processTransaction<TimeType>(t, inBal)]
    )

    const refillTasks: TaskList<TimeType> = budgetConfig.getValues(boundaryConditions.initialTime, boundaryConditions.endTime).flatMap(
        (budgetEntry) => budgetEntry.value.moneyDistributions.flatMap(
            (distribution) => distribution.recurrence.listTimes(budgetEntry.start, budgetEntry.end).map(
                (time) => [time, (inBal: BucketBalance<number>) => distribution.bucketFillAlgorithm.fillBuckets(inBal)] as [TimeType, Task]
            )
        ) 
    )

    // console.log("Refill tasks", refillTasks)    

    const tasks = transactionTasks.concat(refillTasks).sort((a, b) => -utilities.laterTimeFirstSort(a[0], b[0]))

    // console.log("Get Bucket Balances Tasks", tasks)

    // * Execute tasks in order
    let logArray: Array<{time: TimeType, old: BucketBalance, new: BucketBalance, diff: BucketBalance}> = []
    tasks.forEach(
        ([time, task]) => {
            const oldVal = cloneDeep(balancesHistory.currentValue)
            const newVal = task(cloneDeep(oldVal));
            logArray.push({
                time: time, old: oldVal, new: newVal, 
                diff: Object.fromEntries(Object.entries(newVal).map(
                    ([name, newBal]) => [name, newBal-getOrDefault(oldVal, name, 0)]
                ))
            })

            return balancesHistory.setValue(/*task(cloneDeep(balancesHistory.currentValue))*/newVal, time)
        }
    )

    console.log("Tasks", logArray)

    return {
        bucketBalanceHistory: balancesHistory,
        // wantsFillAmounts: wantsFillAmounts,
    }
}

export function getBucketBalances<Budgets extends string, TimeType = Date>(
    ...x: Parameters<typeof getBucketBalancesDetailed<Budgets, TimeType>>
) {
    return getBucketBalancesDetailed(...x).bucketBalanceHistory;
}
