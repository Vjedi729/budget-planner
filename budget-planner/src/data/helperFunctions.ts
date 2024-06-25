import { ExternalTransaction, InternalTransaction } from "./transactions";
import { Account } from "./account"
import { Purchase } from "./purchase"
import { AccountStatement } from "./account-statement-types";
import { Vendor } from "./vendor";
import * as vendorData from "./constants/vendorConstants";
import * as acctData from "./constants/accountConstants"
import { parse } from "path";

const visa8042 = new Account("Vishal's Visa 8042")
const visa0078 = new Account("Meridith's old Citi Visa 0078")

const costco = new Vendor("Costco")

export function makeDate(year: number, month: number, day: number): Date {
    return new Date(year, month-1, day, 1)
}

export function makeTime(year: number, month: number, day: number, hour: number, minute?: number): Date {
    //return new Date(year, month-1, day, hour, minute)
    return makeDate(year, month, day)
}

export function p(...x: ConstructorParameters<typeof Purchase>) { return new Purchase(...x) }

export function t<T>(...x: ConstructorParameters<typeof ExternalTransaction<T>>) { return new ExternalTransaction(...x) }

export function internal(timeSent: Date, accountSent: Account, //Account money was sent from and when it was sent
    timeReceived: Date, accountReceived: Account, //Account that received money and when it arrived
    amount: number): InternalTransaction {
        return {timeSent: timeSent, accountSent: accountSent,
            timeReceived: timeReceived, accountReceived: accountReceived,
            amount: amount}
}

export function statement(statementAccount: Account, //Account the statement is from
    startStatementDate: Date, endStatementDate: Date,  //Dates the statement starts and ends on 
    statementTransactions: Array<ExternalTransaction | InternalTransaction>): AccountStatement {
    return {account: statementAccount, 
        startDate: startStatementDate, endDate: endStatementDate, 
        transactions: statementTransactions}
}

// export function JSONToTransaction(jsonTransaction: string): ExternalTransaction {
//     const parsedTransaction = JSON.parse(jsonTransaction)
//     return t(new Date(parsedTransaction.time), 
//     parsedTransaction.amount, 
//     vendorData.vendorLookup[parsedTransaction.vendor.name], 
//     acctData.acctLookup[parsedTransaction.account._name], 
//     parsedTransaction.purchases.map(purchase => new Purchase(purchase.price, purchase.reason, purchase.description.name)))
// }
//TODO: Write code to parse json purchases and put them in the JSONToTransaction function.

