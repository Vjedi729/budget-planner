import { NumericDictionary } from "lodash";
import { Account } from "../account";
import { ExternalTransaction, InternalTransaction } from "../transactions";

export interface VishalsAccountStatement {
    account: Account

    startDate: Date
    endDate: Date

    internalTransactionSimple?: Array<[amount: number, isPayment: boolean, accountName: string]>
    externalTransactionsSimple: Array<[time: Date, amount: number, vendorName: string, accountName: string]>
}

export class AccountStatement implements VishalsAccountStatement {
    public account: Account
    
    public startDate: Date
    public endDate: Date
    
    public endingBalance: number
    public internalTransactionSimple?: Array<[amount: number, isPayment: boolean, accountName: string]>
    public externalTransactionsSimple: Array<[time: Date, amount: number, vendorName: string, accountName: string]>

    constructor(account: Account, startDate: Date, endDate: Date, endingBalance: number, internalTransactionSimple: Array<[amount: number, isPayment: boolean, accountName: string]>, externalTransactionsSimple: Array<[time: Date, amount: number, vendorName: string, accountName: string]>){
        this.account = account
        this.startDate = startDate
        this.endDate = endDate
        this.endingBalance = endingBalance
        this.internalTransactionSimple = internalTransactionSimple
        this.externalTransactionsSimple = externalTransactionsSimple
    }
}

export class BankStatement extends AccountStatement {
    
    public beginningBalance: number
    public deductionCount: number
    public additionCount: number

    constructor(account: Account, startDate: Date, endDate: Date, endingBalance: number, internalTransactionSimple: Array<[amount: number, isPayment: boolean, accountName: string]>, externalTransactionsSimple: Array<[time: Date, amount: number, vendorName: string, accountName: string]>, beginningBalance: number, deductionCount: number, additionCount: number){
        super(account, startDate, endDate, endingBalance, internalTransactionSimple, externalTransactionsSimple);
        this.beginningBalance = beginningBalance
        this.deductionCount = deductionCount
        this.additionCount = additionCount
    }

    // getRemainderBalance(): number {
    //     return (this.endingBalance - this.beginningBalance) - (this.externalTransactionsSimple.reduce((sum, curr) => sum + curr.amount, 0))
    // }
}

export class CreditCardStatement extends AccountStatement {

    public previousBalance: number
    public feesCharged: number
    public interestCharged: number

    public rewardsBalanceInitial: number
    public rewardsEarned: number

    //public payments? = this.internalTransactions?.forEach();

    constructor(payments: Array<[number, Date]>, account: Account, startDate: Date, endDate: Date, endingBalance: number, internalTransactionsSimple: Array<[amount: number, isPayment: boolean, accountName: string]>, externalTransactionsSimple: Array<[time: Date, amount: number, vendorName: string, accountName: string]>, previousBalance: number, feesCharged: number, interestCharged: number, rewardsBalanceInitial: number, rewardsEarned: number){
        super(account, startDate, endDate, endingBalance, internalTransactionsSimple, externalTransactionsSimple)
        this.previousBalance = previousBalance
        this.feesCharged = feesCharged
        this.interestCharged = interestCharged
        this.rewardsBalanceInitial = rewardsBalanceInitial
        this.rewardsEarned = rewardsEarned
        //this.payments = payments
        //TODO: make payments in constructor
    }

    // getRemainderBalance(): number {
    //     return (this.endingBalance - this.previousBalance) - (this.externalTransactionsSimple.reduce((sum, curr) => sum + curr.amount, 0)) - this.interestCharged
    // }
}