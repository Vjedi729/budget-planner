import { BucketName } from "./enums";

export class SpendingBucket {
    name: BucketName

    constructor(name: BucketName) {
        this.name = name;
    }
}