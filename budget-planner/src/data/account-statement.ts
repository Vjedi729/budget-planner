import { NumericDictionary } from "lodash";
import { Account } from "./account";
import { ExternalTransaction, InternalTransaction } from "./transactions";

export class simpleStatementTransaction { //takes data given on statement for each transaction
    time: Date
    amount: number
    description: string

    constructor(time: Date, amount: number, description: string){
        this.time = time
        this.amount = amount
        this.description = description
    }

}

export interface VishalsAccountStatement { //contains all data a basic statement contains
    account: Account

    startDate: Date
    endDate: Date

    simpleTransactions: Array<simpleStatementTransaction>
}

export class AccountStatement implements VishalsAccountStatement {
    account: Account
    
    startDate: Date
    endDate: Date
    
    endingBalance: number
    simpleTransactions: Array<simpleStatementTransaction>

    constructor(account: Account, startDate: Date, endDate: Date, endingBalance: number, simpleTransactions: Array<simpleStatementTransaction>){
        this.account = account
        this.startDate = startDate
        this.endDate = endDate
        this.endingBalance = endingBalance
        this.simpleTransactions = simpleTransactions
    }
}

export class BankStatement extends AccountStatement {
    
    beginningBalance: number
    deductionCount: number
    additionCount: number

    constructor(account: Account, startDate: Date, endDate: Date, endingBalance: number, simpleTransactions: simpleStatementTransaction[], beginningBalance: number, deductionCount: number, additionCount: number){
        super(account, startDate, endDate, endingBalance, simpleTransactions);
        this.beginningBalance = beginningBalance
        this.deductionCount = deductionCount
        this.additionCount = additionCount
    }

    // getRemainderBalance(): number {
    //     return (this.endingBalance - this.beginningBalance) - (this.externalTransactionsSimple.reduce((sum, curr) => sum + curr.amount, 0))
    // }
}

export class CreditCardStatement extends AccountStatement {

    previousBalance: number
    feesCharged: number
    interestCharged: number

    rewardsBalanceInitial: number
    rewardsEarned: number
    payments: Array<{amount: number, time: Date}>

    constructor(payments: Array<{amount: number, time: Date}>, account: Account, startDate: Date, endDate: Date, endingBalance: number, simpleTransactions: simpleStatementTransaction[], previousBalance: number, feesCharged: number, interestCharged: number, rewardsBalanceInitial: number, rewardsEarned: number){
        super(account, startDate, endDate, endingBalance, simpleTransactions)
        this.previousBalance = previousBalance
        this.feesCharged = feesCharged
        this.interestCharged = interestCharged
        this.rewardsBalanceInitial = rewardsBalanceInitial
        this.rewardsEarned = rewardsEarned
        this.payments = payments
    }

    // getRemainderBalance(): number {
    //     return (this.endingBalance - this.previousBalance) - (this.externalTransactionsSimple.reduce((sum, curr) => sum + curr.amount, 0)) - this.interestCharged
    // }
}

//problems to fix:
    //Needs Testing
    //Need sample data to test with
    //Needs testing between Receipt and Transaction