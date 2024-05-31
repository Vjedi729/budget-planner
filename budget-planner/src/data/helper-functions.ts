import { ExternalTransaction, InternalTransaction } from "./transactions";
import { Account } from "./account"
import { Purchase } from "./purchase"
//mport { AccountStatement } from "./account-statement-types";

export function makeDate(year: number, month: number, day: number): Date {
    return new Date(year, month-1, day, 1)
}

export function makeTime(year: number, month: number, day: number, hour: number, minute?: number): Date {
    return new Date(year, month-1, day, hour, minute)
}

export function p(...x: ConstructorParameters<typeof Purchase>) { return new Purchase(...x) }

export function t<TimeType>(...x: ConstructorParameters<typeof ExternalTransaction<TimeType>>) { return new ExternalTransaction(...x) }

export function internal(timeSent: Date, accountSent: Account, //Account money was sent from and when it was sent
    timeReceived: Date, accountReceived: Account, //Account that received money and when it arrived
    amount: number): InternalTransaction {
        return {timeSent: timeSent, accountSent: accountSent,
            timeReceived: timeReceived, accountReceived: accountReceived,
            amount: amount}
}

// export function statement(statementAccount: Account, //Account the statement is from
//     startStatementDate: Date, endStatementDate: Date,  //Dates the statement starts and ends on 
//     statementTransactions: Array<ExternalTransaction | InternalTransaction>): AccountStatement {
//     return {account: statementAccount, 
//         startDate: startStatementDate, endDate: endStatementDate, 
//         transactions: statementTransactions}
// }