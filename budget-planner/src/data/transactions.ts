// TODO: Transaction super-class?

import { Account } from "./account"
import { Purchase } from "./purchase"
import { Vendor } from "./vendor"

export class ExternalTransaction {
    readonly time: Date
    readonly amount: number
    readonly vendor: Vendor
    readonly account: Account
    public purchases: Purchase[]

    constructor(time: Date, amount: number, vendor: Vendor, account: Account, purchases: Purchase[] = []) {
        this.time = time;
        this.amount = amount;
        this.vendor = vendor;
        this.account = account;
        this.purchases = purchases;
    }
}

export interface InternalTransaction {
    readonly timeSent: Date
    readonly accountSent: Account

    readonly timeReceived: Date
    readonly accountReceived: Account

    readonly amount: number
}

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