import { BucketName } from "./enums"
export interface TextDescription {
    name: string
    description: string
}

export interface Purchase {
    price: number
    bucket: BucketName
    description: TextDescription
}

export class Purchase {
    constructor(price: number, bucket: BucketName, name: string, description: string = "") {
        this.price = price;
        this.bucket = bucket
        this.description = {
            name: name, description: description
        }
    }
}