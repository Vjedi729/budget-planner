import { Account } from "./account"
import { Vendor } from "./vendor"
import { ExternalTransaction, Recurrence } from "./transactions"
import { BucketName } from "./enums"
import { Purchase } from "./purchase"
import { RecurringTransaction } from "./transactions"
import { BudgetConfig } from "./budgetConfig"
import { BasicHistoryOf, HistoryOf } from "./history"

import { cloneDeep } from "lodash"
import { JsSort } from "@/ts-utils/sort-utils"

export const testAccount = new Account("[CREDIT] Cosctco Citi Visa *8042")
export const testTransactionData: ExternalTransaction[] = [
    new ExternalTransaction(new Date(2023,8,20), 34.14, new Vendor("Meijer"), testAccount),
    new ExternalTransaction(new Date(2023,8,23), 102.54, new Vendor("Costco"), testAccount, [
        { price: 4.99, bucket: "Groceries", description: { name: "Strawberries", description: ""} },
        { price: 11.99, bucket: "For Matt", description: { name: "Fig Chocolate", description: ""} },
        { price: 8.69, bucket: "Groceries", description: { name: "Blueberry Acai Chocolates", description: ""} },
        { price: 15.99, bucket: "Groceries", description: { name: "Sharp Cheddar Cheese", description: ""} }
    ])
]

export const testRecurringData: RecurringTransaction[] = [
    new RecurringTransaction(12, new Date(2023,1,1), 40, "Cats", testAccount, new Vendor("Chewy"), "Cat Food"),
    new RecurringTransaction(4, new Date(2022,2,1), 120, "Unknown", testAccount, new Vendor("Pointe"), "Pest Control")
]

export const testBudgetData: BudgetConfig<"Vishal"|"Meridith"|"Both", "Vishal"|"Meridith"> = {
    people: ["Vishal", "Meridith"],
    incomes: [{dollars: 2144, everyXDays: 14}],
    needs: {
        bucketNames: [
            "Home Improvement",
            "Shelter", 
            "Groceries", 
            "Utilities", 
            "Car", 
            "Health",
            "Clothing",
            "Needs Debts"
        ]
    },
    wants: {
        wantsMoneySplit: {
            "Vishal": 30,
            "Meridith": 30,
            "Both": 40
        },
        bucketFilling: {
            "Meridith": { "allocations": {
                "Cats": 150, // What is happening here?
                "Fish": 20,
                "Garden": 20,
                "Sewing": 30,
            }},
            "Vishal": { "allocations": {
                "Garden": 10,
                "Fish": 10,
            }},
            "Both": { "allocations": {
                "Housewares": 30,
                "Garden": 10,
                "Sewing": 10,
            }}
        }
    }
}

export const laterDateFirstSort: JsSort.FunctionType<Date> = (a:Date, b:Date) => b.getTime() -a.getTime();
export const testInitialDate = new Date(2020, 1, 1)
export const testInitialBucketBalaces = {}

let _testBudgetHistory = new BasicHistoryOf(laterDateFirstSort, testBudgetData, testInitialDate);
_testBudgetHistory.reportNoChange(new Date(Date.now()));
export var testBudgetHistory = _testBudgetHistory;

export function fillWantsBuckets(
    bucketBalances: Record<BucketName, number>, budget: BudgetConfig, wantsDollarsToAdd: number
) : Record<BucketName, number> {

    // Add money to wants buckets
    let totalWeight = Object.values(budget.wants.wantsMoneySplit).reduce((a, b) => (a||0)+(b||0))
    if(totalWeight != undefined) {
        Object.entries(budget.wants.wantsMoneySplit).forEach(([toBucket, weight]) => {
            if(weight == undefined || totalWeight == undefined) return;
            bucketBalances[toBucket] = (bucketBalances[toBucket] || 0) + (wantsDollarsToAdd * weight / totalWeight)
        })
    }

    // Move money between buckets
    Object.entries(budget.wants.bucketFilling).forEach(([toBucket, data]) => {
        Object.entries(data.allocations).forEach(([fromBucket, amount])=> {
            if (amount) {

                bucketBalances[toBucket] = (bucketBalances[toBucket] || 0) + amount;
                bucketBalances[fromBucket] = (bucketBalances[fromBucket || 0]) - amount;
            }
        })
    })

    return bucketBalances;
}

// TODO: Needs memoization
export function getBucketBalances<Budgets extends string, TimeType = Date>(
    laterTimeFirstSort: JsSort.FunctionType<TimeType>,
    initialBucketBalances: Record<BucketName, number>, initialTime: TimeType,
    budgetConfig: HistoryOf<BudgetConfig<Budgets>, TimeType>, budgetRefillRecurrence: Recurrence<TimeType>,
    transactionData: ExternalTransaction<TimeType>[],
    endTime: TimeType, inclusive: boolean = false
): HistoryOf<Record<BucketName, number>, TimeType> {
    let balancesHistory = new BasicHistoryOf(laterTimeFirstSort, initialBucketBalances, initialTime);

    // TODO: Add money based on amount not spent on needs in the previous time period
        // Change initial to 0
        // Update value at end of after processing transactions but before build fill dates
        // Requires re-ordering functions to process bucket fills and transactions in date order (switching between as needed)
    let amountToAddToWants = 500;

    // Move money between buckets based on data
    let bucketFillDates = budgetRefillRecurrence.listTimes(initialTime, endTime).sort((a, b) => -laterTimeFirstSort(a, b));
    bucketFillDates.forEach(currentTime => {
        let budget = budgetConfig.getValue(currentTime);
        if(budget == undefined) return;

        balancesHistory.setValue(fillWantsBuckets(cloneDeep(balancesHistory.currentValue), budget, amountToAddToWants), currentTime);
    })

    // Remove money based on purchases
    transactionData.filter((transaction) => {
            let sortResult = laterTimeFirstSort(transaction.time, endTime)
            JsSort.ResultEquals(sortResult, JsSort.ResultType.LeftArgFirst) || (inclusive && JsSort.ResultEquals(sortResult, JsSort.ResultType.KeepOriginalOrder))
    }).forEach((transaction) => {
        let purchasePriceSum = 0;
        let balances = cloneDeep(balancesHistory.currentValue);
        
        transaction.purchases.forEach((purchase: Purchase) => {
            balances[purchase.bucket] = (balances[purchase.bucket] || 0) - purchase.price;
            purchasePriceSum += purchase.price
        })
        balances[BucketName.NONE] -= (transaction.amount - purchasePriceSum);

        balancesHistory.setValue(balances, transaction.time)
    }) 

    return balancesHistory
}

