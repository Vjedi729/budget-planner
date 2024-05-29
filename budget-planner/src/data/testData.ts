import { Account } from "./account"
import { Vendor } from "./vendor"
import { ExternalTransaction, Recurrence } from "./transactions"
import { BucketName } from "./enums"
import { Purchase } from "./purchase"
import { RecurringTransaction, EveryMonthOnTheNth } from "./transactions"
import { BudgetConfig } from "./budgetConfig"
import { BasicHistoryOf, HistoryOf } from "./history"

import { cloneDeep, includes } from "lodash"
import { JsSort } from "@/ts-utils/sort-utils"
import { filterRecord } from "@/ts-utils/record-utils"

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

export const testBudgetData: BudgetConfig<"Vishal Fun Money"|"Meridith Fun Money"|"Both Fun Money", "Vishal"|"Meridith"> = {
    people: ["Vishal", "Meridith"],
    incomes: [{dollars: 2144, everyXDays: 14}],
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
                "Cats": 110, // What is happening here?
                "Fish": 10,
                "Garden": 15,
                "Sewing": 5,
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

let _testBudgetHistory = new BasicHistoryOf(laterDateFirstSort, testBudgetData, testInitialDate);
_testBudgetHistory.reportNoChange(new Date(Date.now()));
export var testBudgetHistory = _testBudgetHistory;

export type BucketBalance = Record<BucketName, number>

export function GetGroupBalance(bucketBalance: BucketBalance, buckets: BucketName[]) {
    return Object.values(filterRecord(bucketBalance, buckets, 0)).reduce((p,c)=>p+c,0)
}

export function fillWantsBuckets(
    bucketBalances: BucketBalance, budget: BudgetConfig, wantsDollarsToAdd: number
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

function HELPER_quickFillWantsBucket<TimeType>(
    budgetHistory: HistoryOf<BudgetConfig, TimeType>,
    balancesHistory: HistoryOf<BucketBalance, TimeType>,
    amountToAddToWants: number,
    currentTime: TimeType
) {
    let budget = budgetHistory.getValue(currentTime);
    if(budget == undefined) {
        console.error("No budget config found at time", currentTime, "in", budgetHistory)   
        return;
    }

    let newVal = fillWantsBuckets(cloneDeep(balancesHistory.currentValue), budget, amountToAddToWants)
    // console.log(cloneDeep(currentTime), cloneDeep(newVal))

    balancesHistory.setValue(newVal, currentTime);
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
    
// TODO: Needs memoization
export function getBucketBalancesDetailed<Budgets extends string, TimeType = Date>(
    laterTimeFirstSort: JsSort.FunctionType<TimeType>,
    initialBucketBalances: BucketBalance, initialTime: TimeType,
    budgetConfig: HistoryOf<BudgetConfig<Budgets>, TimeType>, budgetRefillRecurrence: Recurrence<TimeType>,
    transactionData: ExternalTransaction<TimeType>[],
    endTime: TimeType, inclusive: boolean = false
) {
    let balancesHistory = new BasicHistoryOf(laterTimeFirstSort, initialBucketBalances, initialTime, 0);
    // let wantsFillAmounts: {time: TimeType, amount: number}[] = []
    // console.log("Initial Balances", cloneDeep(balancesHistory.currentValue))

    // TODO: Add money based on amount not spent on needs in the previous time period
        // * Change initial to 0
        // * Update value at end of after processing transactions but before build fill dates
        // * Requires re-ordering functions to process bucket fills and transactions in date order (switching between as needed)
    let amountToAddToWants = 500;

    // * Move money between buckets based on budget config
    let bucketFillDates = budgetRefillRecurrence.listTimes(initialTime, endTime).sort((a, b) => -laterTimeFirstSort(a, b));
    // console.log("Bucket Fill Dates", bucketFillDates);

    // * Remove money based on purchases
    let transactionsInRange = transactionData.filter((transaction) => {
        let sortResult = laterTimeFirstSort(endTime, transaction.time)
        return JsSort.ResultEquals(sortResult, JsSort.ResultType.LeftArgFirst) || (inclusive && JsSort.ResultEquals(sortResult, JsSort.ResultType.KeepOriginalOrder))
    }).sort((a, b) => -laterTimeFirstSort(a.time, b.time))

    // console.log("Transactions given", cloneDeep(transactionData))
    // console.log("Transactions before", endTime, cloneDeep(transactionsInRange))
    
    transactionsInRange.forEach((transaction, i) => {
        // * Fill buckets as many times as appropriate before the time of this transaction
        while(bucketFillDates[0] && JsSort.IsRightArgFirst(laterTimeFirstSort, bucketFillDates[0], transaction.time))
        {
            // console.log("Filling buckets at time", bucketFillDates[0].toString(), "before transaction", i, cloneDeep(balancesHistory.currentValue));
            HELPER_quickFillWantsBucket(budgetConfig, balancesHistory, amountToAddToWants, bucketFillDates[0])
            // wantsFillAmounts.push({time: bucketFillDates[0], amount: amountToAddToWants})
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

export function getBucketBalances<Budgets extends string, TimeType = Date>(
    laterTimeFirstSort: JsSort.FunctionType<TimeType>,
    initialBucketBalances: BucketBalance, initialTime: TimeType,
    budgetConfig: HistoryOf<BudgetConfig<Budgets>, TimeType>, budgetRefillRecurrence: Recurrence<TimeType>,
    transactionData: ExternalTransaction<TimeType>[],
    endTime: TimeType, inclusive: boolean = false
): HistoryOf<BucketBalance, TimeType> {
    return getBucketBalancesDetailed(
        laterTimeFirstSort, initialBucketBalances, initialTime,
        budgetConfig, budgetRefillRecurrence, transactionData, endTime, inclusive
    ).bucketBalanceHistory;
}
