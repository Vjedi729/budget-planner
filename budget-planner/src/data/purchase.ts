import { dollarFormat } from "@/utilities/displayUtils"
import { BucketName } from "./enums"
import { SpendingBucket } from "./spendingBucket"
export interface TextDescription {
    name: string
    description: string
}

export interface PurchaseConfig {
    price: number
    reason: BucketName
    description: TextDescription
}

export interface Purchase extends PurchaseConfig {}
export class Purchase {
    constructor(price: number, reason: BucketName | string, name: string, description: string = "") {
        this.price = price;
        this.reason = reason;
        this.description = {
            name: name, description: description
        }
    }

    public get bucket() { return SpendingBucket.BucketPseudonyms[this.reason] || this.reason }
    
    getBucketDesc() { return (this.reason != this.bucket) ? `${this.bucket} (${this.reason})` : this.reason}

    summarize() { return `${this.description.name} for ${dollarFormat(this.price)}`}

    static fromConfig(p: PurchaseConfig) {
        return new Purchase(p.price, p.reason, p.description.name, p.description.description);
    }
}