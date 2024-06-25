// TODO: Transaction super-class?

import { Account } from "./account"
import { BucketName } from "./enums"
import { Purchase, PurchaseConfig } from "./purchase"
import { Vendor } from "./vendor"
import { Schedule } from "./rschedule"
import * as vendorData from "./constants/vendorConstants"
import * as acctData from "./constants/accountConstants"

export class ExternalTransaction<TimeType = Date> {
    readonly time: TimeType
    readonly amount: number
    readonly vendor: Vendor
    readonly account: Account
    public purchases: Purchase[]

    constructor(time: TimeType, amount: number, vendor: Vendor, account: Account, purchases: Purchase[] = []) {
        this.time = time;
        this.amount = amount;
        this.vendor = vendor;
        this.account = account;
        this.purchases = purchases;
    }

    remainderPrice(): number {
        return this.amount - this.purchases.reduce((sum, curr) => sum + curr.price, 0)
    }

    hasRemainder(): boolean {
        return Math.abs(this.remainderPrice()) > 0.001
    }

    getRemainderPurchase(): Purchase {
        return new Purchase(
            this.remainderPrice(), BucketName.NONE, 
            "Unaccounted", "The amount of transaction not accounted for by any purchase."
        )
    }

    static fromJson(parsedTransaction: Record<string, any>): ExternalTransaction | undefined {
        // TODO: Check that all data exists and is in correct format
        if(
            typeof parsedTransaction.time == "string" &&
            typeof parsedTransaction.amount == "number" &&
            typeof parsedTransaction.vendor == "string" &&
            typeof parsedTransaction.account == "string" &&
            Array.isArray(parsedTransaction.purchases) && parsedTransaction.purchases.every(p => typeof p == "object")
        ) {

            const purchases = parsedTransaction.purchases.map(Purchase.fromJson)
            if(purchases.every(x => typeof x == 'undefined')) return undefined;


            const account = (acctData.acctLookup[parsedTransaction.account] != undefined) ? acctData.acctLookup[parsedTransaction.account] : new Account(parsedTransaction.account)

            return new ExternalTransaction(
                new Date(parsedTransaction.time), 
                parsedTransaction.amount, 
                new Vendor(parsedTransaction.vendor), 
                account,
                purchases as Array<Purchase>
            )
        }
    }

    toJson(): string {
        const simplifiedTransaction = {"time": this.time, "amount": this.amount, "vendor": this.vendor.vendorId, "account": this.account.accountId, "purchases": this.purchases}
        return JSON.stringify(simplifiedTransaction)
    }
}

export interface InternalTransaction<TimeType = Date> {
    timeSent: TimeType
    accountSent: Account

    timeReceived: TimeType
    accountReceived: Account

    amount: number
}// TODO: Transaction super-class?

//interface for how reccurences need to work 

export abstract class Recurrence<TimeType> {
    abstract listTimes(startTime: TimeType, endTime: TimeType): Array<TimeType>;
}

export class RScheduleRecurrence extends Recurrence<Date> {
    protected recurrenceSchedule: Schedule;
    
    constructor(recurrenceSchedule: Schedule) {
        super();
        this.recurrenceSchedule = recurrenceSchedule;
    }

    listTimes(startTime: Date, endTime: Date): Array<Date> {
        var timeArray = this.recurrenceSchedule.occurrences().toArray().map(({ date }) => date).filter((item: Date) => {
            return item.getTime() >= startTime.getTime() && item.getTime() <= endTime.getTime();
        } );
        return timeArray
    }
} 

export class EveryMonthOnTheNth {
    protected dayOfTheMonth: number
    constructor(dayOfTheMonth: number) { this.dayOfTheMonth = dayOfTheMonth; }

    listTimes(startTime: Date, endTime: Date): Array<Date> {
        let currYear = startTime.getFullYear();
        let currMonth = startTime.getMonth();

        let retVal: Date[] = []
        while(currYear < endTime.getFullYear() || currMonth < endTime.getMonth())
        {
            retVal.push(new Date(currYear, currMonth, this.dayOfTheMonth));
            if(currMonth == 12) currYear++;
            currMonth = (currMonth%12) + 1;
        }

        return retVal;
    }
}

/*export class Recurring<Type> {
    readonly repeatedAction: Type;
    readonly recurrence: Recurrence;
    

    constructor(repeatedAction: Type, recurrence: Recurrence){
        this.repeatedAction = repeatedAction;
        this.recurrence = recurrence;
    }
}
*/

/*
- Cache (array?) that holds recurrences? 
  - Check cache every day and enter transactions that happen?
  - Holds next recurrence of each action and then replaces after making transaction?
  - Holds all recurrences for a year?
- remake recurrence list for every transaction in recurring page every day and check for a recurrence on that day?
- Function that returns the repeats of a certain recurring transaction between the current and X dates
  - When a repeat is entered from that set?
- Function to copy recurring transaction into history when a date passes

-Need:
  -
  -Way to automatically enter the repeated transactions
  -Way to check what repeats happen on each day
*/


export class RecurringTransaction {
    //TODO: Add support for recurring internal transfers
    readonly recurrence: number;
    readonly initialDate: Date;
    //readonly internal?: boolean;
    readonly amount: number;
    readonly bucket: string;
    readonly accountFrom: Account;
    //readonly accountTo?: Account;
    readonly vendor: Vendor;
    readonly description: string;

    constructor(recurrence: number, initialDate: Date, amount: number, bucket: string, accountFrom: Account, vendor: Vendor, description: string){
        this.recurrence = recurrence;
        this.initialDate = initialDate;
        this.amount = amount;
        this.bucket = bucket;
        this.accountFrom = accountFrom;
        this.vendor = vendor;
        this.description = description;
    }
}