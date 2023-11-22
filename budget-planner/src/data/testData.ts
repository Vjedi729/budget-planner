import { Account } from "./account"
import { Vendor } from "./vendor"
import { ExternalTransaction } from "./transactions"
import { BucketName } from "./enums"
import { Purchase } from "./purchase"
import { BudgetConfig } from "./budgetConfig"
import { HistoryOf } from "./history"

import { cloneDeep } from "lodash"

export const testAccount = new Account("[CREDIT] Cosctco Citi Visa *8042")
export const testTransactionData: ExternalTransaction[] = [
    new ExternalTransaction(new Date(2023,8,20), 34.14, new Vendor("Meijer"), testAccount),
    new ExternalTransaction(new Date(2023,8,23), 102.54, new Vendor("Costco"), testAccount, [
        { price: 4.99, bucket: "Groceries", desciption: { name: "Strawberries", description: ""} },
        { price: 11.99, bucket: "For Matt", desciption: { name: "Fig Chocolate", description: ""} },
        { price: 8.69, bucket: "Groceries", desciption: { name: "Blueberry Acai Chocolates", description: ""} },
        { price: 15.99, bucket: "Groceries", desciption: { name: "Sharp Cheddar Cheese", description: ""} }
    ])
]

export const testBudgetData: BudgetConfig<"Vishal"|"Meridith"|"Both", "Vishal"|"Meridith"> = {
    people: ["Vishal", "Meridith"],
    incomes: [{dollars: 2144, everyXdays: 14}],
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

// TODO: Needs memoization
export function OLD_getBucketBalances(time: Date, inclusive: boolean = false) {
    let balances: {[key: BucketName]: number} = {
        "Groceries": 100,
        "For Matt": 0,
        [BucketName.NONE]: 0
    };

    // TODO: Add money based on bucket initial date and refill information

    // Remove money based on purchases
    testTransactionData.filter((
        transaction: ExternalTransaction) => transaction.time < time || (inclusive && transaction.time.getTime() == time.getTime())
    ).forEach((transaction: ExternalTransaction) => {
        let purchasePriceSum = 0;
        transaction.purchases.forEach((purchase: Purchase) => {
            balances[purchase.bucket] = (balances[purchase.bucket] || 0) - purchase.price;
            purchasePriceSum += purchase.price
        })
        balances[BucketName.NONE] -= (transaction.amount - purchasePriceSum);
    }) 

    return balances;
}

export function getBucketBalances<Budgets extends string, TimeType = Date>(
    initialBucketBalances: Record<BucketName, number>, initialTime: TimeType,
    budgetConfig: HistoryOf<BudgetConfig, TimeType>, // budgetSkipBy: TimeType, // Removed because this data should be in Budget Config
    transactionData: ExternalTransaction[],
    time: TimeType, inclusive: boolean = false
) {
    let balances = cloneDeep(initialBucketBalances);

    // TODO: Add money based on bucket initial date and refill information -> Maybe after transactions?

    // Move money between buckets based on data
    {
        // TODO: replace timinig with recurrances?
        let currentTime = initialTime;
        while(currentTime < time || (currentTime == time && inclusive))
        {
            let budget = budgetConfig.getValue(currentTime);
            if(budget == undefined) continue;
            Object.entries(budget.wants.bucketFilling).forEach(([toBucket, data]) => {
                Object.entries(data.allocations).forEach(([fromBucket, amount])=> {
                    if (amount) {

                        balances[toBucket] = (balances[toBucket] || 0) + amount;
                        balances[fromBucket] = (balances[fromBucket || 0]) - amount;
                    }
                })
            })

            // Only works if TimeType is Date
            currentTime = (currentTime as Date).setMonth((currentTime as Date).getMonth()) as TimeType;
        }
    }

    // Remove money based on purchases
    transactionData.filter((
        transaction: ExternalTransaction) => transaction.time < time || (inclusive && transaction.time == time)
    ).forEach((transaction: ExternalTransaction) => {
        let purchasePriceSum = 0;
        transaction.purchases.forEach((purchase: Purchase) => {
            balances[purchase.bucket] = (balances[purchase.bucket] || 0) - purchase.price;
            purchasePriceSum += purchase.price
        })
        balances[BucketName.NONE] -= (transaction.amount - purchasePriceSum);
    }) 

    return balances
}