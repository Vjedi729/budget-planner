import { Integer } from "type-fest";
import { Account } from "./account"
import { t } from "./helper-functions";
import { Purchase } from "./purchase"
import { ExternalTransaction } from "./transactions";
import { Vendor } from "./vendor"

export class LineItem {
    public cost: number
    public lineName: string
    public taxCode?: string

    constructor(cost: number, lineName: string, taxCode?: string){
        this.cost = cost
        this.lineName = lineName
        this.taxCode = taxCode
    }
}

//TODO: make lookup table for tax codes

export class TaxCharged {
    public taxPercent?: number
    public taxName: string
    public taxAmount: number

    constructor(taxName: string, taxAmount: number, taxPercent?: number){
        this.taxPercent = taxPercent
        this.taxName = taxName
        this.taxAmount = taxAmount
    }
}

//TODO: make function to confirm tax category amounts are accurate

export class Receipt {
    public time: Date;
    public amount: number;
    public tax: Array<TaxCharged>
    public storeName: string;
    public paymentMethod: string;
    public lineItems: Array<LineItem>;
    public itemCount?: number;
    
    constructor(time: Date, amount: number, tax: Array<TaxCharged>, storeName: string, paymentMethod: string, lineItems: Array<LineItem>, itemCount: number){
        this.time = time;
        this.amount = amount;
        this.tax = tax;
        this.storeName = storeName;
        this.paymentMethod = paymentMethod;
        this.lineItems = lineItems;
        this.itemCount = itemCount
    }

    unaccountedItems() {
        if (this.itemCount != undefined){
        var remainingItems = this.itemCount - this.lineItems.length;
            if(remainingItems > 0) {
            console.log(remainingItems.toString() + "items unaccounted for")
            }
        }
    }

    //transactionFromReceipt(itemDescription: string): ExternalTransaction {
        //construct using additional inputs
    //}
    
}

//TODO: Lookup table for vendors
//TODO: Lookup table for accounts
//TODO: Function to make transaction from receipt info, lookup tables, and additional user entered info.

export class StoreReceipt extends Receipt {
    storeIDNumber: number
    cashierName: string
    storeName = "Meijer"

    constructor(time: Date, amount: number, tax: Array<TaxCharged>, storeName: string, paymentMethod: string, lineItems: Array<LineItem>, itemCount: number, cashierName: string, storeIDNumber: number){
        super(time, amount, tax, storeName, paymentMethod, lineItems, itemCount)
        this.storeIDNumber = storeIDNumber
        this.cashierName = cashierName
    }
}

export class MeijerReceipt extends StoreReceipt {
    savingsTotal: number

    constructor(time: Date, amount: number, tax: Array<TaxCharged>, storeName: string, paymentMethod: string, lineItems: Array<LineItem>, itemCount: number, cashierName: string, storeIDNumber: number, savingsTotal: number){
        super(time, amount, tax, storeName, paymentMethod, lineItems, itemCount, cashierName, storeIDNumber)
        this.savingsTotal = savingsTotal
    }
}