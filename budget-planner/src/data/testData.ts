import { Account } from "./account"
import { Vendor } from "./vendor"
import { ExternalTransaction } from "./transactions"

export const testAccount = new Account("[CREDIT] Cosctco Citi Visa *8042")
export const testData: ExternalTransaction[] = [
    new ExternalTransaction(new Date(2023,8,20), 34.14, new Vendor("Meijer"), testAccount),
    new ExternalTransaction(new Date(2023,8,23), 102.54, new Vendor("Costco"), testAccount, [
        { price: 4.99, bucket: "Groceries", desciption: { name: "Strawberries", description: ""} },
        { price: 11.99, bucket: "For Matt", desciption: { name: "Fig Chocolate", description: ""} },
        { price: 8.69, bucket: "Groceries", desciption: { name: "Blueberry Acai Chocolates", description: ""} },
        { price: 15.99, bucket: "Groceries", desciption: { name: "Sharp Cheddar Cheese", description: ""} }
    ])
]