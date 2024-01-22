import { Account } from "./account"
import { Purchase } from "./purchase"
import { Vendor } from "./vendor"


export class Receipt<TimeType = Date> {
    public time: TimeType;
    public amount: number;
    //public tax: ;
    public vendor: Vendor;
    public account: Account;
    public purchases: Purchase[];
    public itemCount?: number;



    
    constructor(time: TimeType, amount: number, vendor: Vendor, account: Account, purchases: Purchase[] = [], itemCount: number){
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
    
}