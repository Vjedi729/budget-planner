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

    static fromConfig(p: PurchaseConfig) {
        return new Purchase(p.price, p.reason, p.description.name, p.description.description);
    }

    static fromJson(p: Record<string, any>) : Purchase | undefined {
        const hasData = (
            typeof p.price == 'number' &&
            typeof p.reason == 'string' &&
            typeof p.description == 'object' && typeof p.description.name == 'string' && typeof p.description.description == 'string'
        )

        return hasData ? Purchase.fromConfig(p as PurchaseConfig) : undefined
    }
}