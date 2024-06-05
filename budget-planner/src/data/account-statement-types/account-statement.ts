import { NumericDictionary } from "lodash";
import { Account } from "../account";
import { ExternalTransaction, InternalTransaction } from "../transactions";

export interface VishalsAccountStatement {
    account: Account

    startDate: Date
    endDate: Date

    internalTransactions?: Array<InternalTransaction>
    externalTransactions: Array<ExternalTransaction>
}

export class AccountStatement implements VishalsAccountStatement {
    public account: Account
    
    public startDate: Date
    public endDate: Date
    
    public endingBalance: number
    public internalTransactions?: Array<InternalTransaction>
    public externalTransactions: Array<ExternalTransaction>

    constructor(account: Account, startDate: Date, endDate: Date, endingBalance: number, internalTransactions: Array<InternalTransaction>, externalTransactions: Array<ExternalTransaction>){
        this.account = account
        this.startDate = startDate
        this.endDate = endDate
        this.endingBalance = endingBalance
        this.internalTransactions = internalTransactions
        this.externalTransactions = externalTransactions
    }
}

export class BankStatement extends AccountStatement {
    
    public beginningBalance: number
    public deductionCount: number
    public additionCount: number

    constructor(account: Account, startDate: Date, endDate: Date, endingBalance: number, internalTransactions: Array<InternalTransaction>, externalTransactions: Array<ExternalTransaction>, beginningBalance: number, deductionCount: number, additionCount: number){
        super(account, startDate, endDate, endingBalance, internalTransactions, externalTransactions);
        this.beginningBalance = beginningBalance
        this.deductionCount = deductionCount
        this.additionCount = additionCount
    }

    getRemainderBalance(): number {
        return (this.endingBalance - this.beginningBalance) - (this.externalTransactions.reduce((sum, curr) => sum + curr.amount, 0))
    }
}

export class CreditCardStatement extends AccountStatement {

    public previousBalance: number
    public feesCharged: number
    public interestCharged: number

    public rewardsBalanceInitial: number
    public rewardsEarned: number

    //public payments? = this.internalTransactions?.forEach();

    constructor(payments: Array<[number, Date]>, account: Account, startDate: Date, endDate: Date, endingBalance: number, internalTransactions: Array<InternalTransaction>, externalTransactions: Array<ExternalTransaction>, previousBalance: number, feesCharged: number, interestCharged: number, rewardsBalanceInitial: number, rewardsEarned: number){
        super(account, startDate, endDate, endingBalance, internalTransactions, externalTransactions)
        this.previousBalance = previousBalance
        this.feesCharged = feesCharged
        this.interestCharged = interestCharged
        this.rewardsBalanceInitial = rewardsBalanceInitial
        this.rewardsEarned = rewardsEarned
        //this.payments = payments
        //TODO: make payments in constructor
    }

    getRemainderBalance(): number {
        return (this.endingBalance - this.previousBalance) - (this.externalTransactions.reduce((sum, curr) => sum + curr.amount, 0)) - this.interestCharged
    }
}