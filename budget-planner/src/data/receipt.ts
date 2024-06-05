import { Integer } from "type-fest";
import { Account } from "./account"
import { t } from "./helper-functions";
import { Purchase } from "./purchase"
import { ExternalTransaction } from "./transactions";
import { Vendor } from "./vendor"


export class Receipt {
    public time: Date;
    public amount: number;
    //public tax: ;
    public vendor: Vendor;
    public account: Account;
    public purchases: Purchase[];
    public itemCount?: number;
    
    constructor(time: Date, amount: number, vendor: Vendor, account: Account, purchases: Purchase[] = [], itemCount: number){
        this.time = time;
        this.amount = amount;
        this.vendor = vendor;
        this.account = account;
        this.purchases = purchases;
        this.itemCount = itemCount;
    }

    unaccountedItems() {
        if (this.itemCount != undefined){
        var remainingItems = this.itemCount - this.purchases.length;
            if(remainingItems > 0) {
            console.log(remainingItems.toString() + "items unaccounted for")
            }
        }
    }

    transactionFromReceipt(): ExternalTransaction {
        return t(this.time, this.amount, this.vendor, this.account, this.purchases)
    }
    
}

export class StoreReceipt extends Receipt {
    storeIDNumber: number
    cashierName: string

    constructor(time: Date, amount: number, vendor: Vendor, account: Account, purchases: Purchase[] = [], itemCount: number, cashierName: string, storeIDNumber: number){
        super(time, amount, vendor, account, purchases, itemCount);
        this.storeIDNumber = storeIDNumber
        this.cashierName = cashierName
    }
}

export class MeijerReceipt extends StoreReceipt {
    savingsTotal: number

    constructor(time: Date, amount: number, vendor: Vendor, account: Account, purchases: Purchase[] = [], itemCount: number, cashierName: string, storeIDNumber: number, savingsTotal: number){
        super(time, amount, vendor, account, purchases, itemCount, cashierName, storeIDNumber);
        this.savingsTotal = savingsTotal
    }
}