import { Account } from "./account"
import { Vendor } from "./vendor"
import { ExternalTransaction } from "./transactions"
import { BucketName } from "./enums"
import { Purchase } from "./purchase"
import { RecurringTransaction } from "./transactions"

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

// TODO: Needs memoization
export function getBucketBalances(time: Date, inclusive: boolean = false) {
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

export const testRecurringData: RecurringTransaction[] = [
    new RecurringTransaction(12, new Date(2023,1,1), 40, "Cats", testAccount, new Vendor("Chewy"), "Cat Food"),
    new RecurringTransaction(4, new Date(2022,2,1), 120, "Unknown", testAccount, new Vendor("Pointe"), "Pest Control")
]