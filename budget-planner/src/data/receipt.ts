import { Integer } from "type-fest";
import { Account } from "./account"
import { t } from "./helper-functions";
import { Purchase } from "./purchase"
import { ExternalTransaction } from "./transactions";
import { Vendor } from "./vendor"

export class LineItem {
    cost: number
    lineName: string
    taxCode?: string
    quantity?: number
    discount?: number

    constructor(cost: number, lineName: string, taxCode?: string, quantity?: number, discount?: number){
        this.cost = cost
        this.lineName = lineName
        this.taxCode = taxCode
        this.quantity = quantity
        this.discount = discount
    }
}

//TODO: make lookup table for tax codes

export class TaxCharged {
    taxPercent?: number
    taxName: string
    taxAmount: number

    constructor(taxName: string, taxAmount: number, taxPercent?: number){
        this.taxPercent = taxPercent
        this.taxName = taxName
        this.taxAmount = taxAmount
    }
}

//TODO: make function to confirm tax category amounts are accurate

export class Receipt {
    time: Date;
    amount: number;
    tax: Array<TaxCharged>
    storeName: string;
    paymentMethod: string;
    lineItems: Array<LineItem>;
    itemCount?: number;
    address: string
    
    constructor(time: Date, amount: number, tax: Array<TaxCharged>, storeName: string, paymentMethod: string, lineItems: Array<LineItem>, address: string, itemCount?: number){
        this.time = time
        this.amount = amount
        this.tax = tax
        this.storeName = storeName
        this.paymentMethod = paymentMethod
        this.lineItems = lineItems
        this.itemCount = itemCount
        this.address = address
        
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
    storeIDNumber?: number
    cashierName: string

    constructor(time: Date, amount: number, tax: Array<TaxCharged>, storeName: string, paymentMethod: string, lineItems: Array<LineItem>, address: string, cashierName: string, itemCount?: number, storeIDNumber?: number){
        super(time, amount, tax, storeName, paymentMethod, lineItems, address, itemCount)
        this.storeIDNumber = storeIDNumber
        this.cashierName = cashierName
    }
}

export class MeijerReceipt extends StoreReceipt {
    savingsTotal: number
    storeName = "Meijer"

    constructor(time: Date, amount: number, tax: Array<TaxCharged>, storeName: string, paymentMethod: string, lineItems: Array<LineItem>, address: string, cashierName: string, storeIDNumber: number, savingsTotal: number, itemCount: number){
        super(time, amount, tax, storeName, paymentMethod, lineItems, address, cashierName, storeIDNumber, itemCount)
        this.savingsTotal = savingsTotal
    }
}