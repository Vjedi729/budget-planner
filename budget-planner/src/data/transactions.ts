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