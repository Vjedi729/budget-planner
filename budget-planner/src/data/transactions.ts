// TODO: Transaction super-class?

import { Account } from "./account"
import { BucketName } from "./enums"
import { Purchase, PurchaseConfig } from "./purchase"
import { Vendor } from "./vendor"
import { Schedule } from "./rschedule"
import { dollarFormat } from "@/utilities/displayUtils"

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

    public get buckets(): Set<BucketName> { return new Set(this.purchases.map(p => p.bucket)) }

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

    summarize(purchaseFilter: (p: Purchase)=>boolean = ()=>true): string {
        const [action, direction]  = this.amount < 0 ? ["Received", "from"] : ["Spent", "at"]
        const filteredPurchases = this.purchases.filter(purchaseFilter);
        return `${action} ${dollarFormat(Math.abs(this.amount))} at ${this.vendor.name}${filteredPurchases.length > 0 ? ` ${direction}` : ""}${filteredPurchases.map(p => `\n- ${p.summarize()}`).join('')}`
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