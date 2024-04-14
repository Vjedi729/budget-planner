import { BucketName } from "./enums";

export class SpendingBucket {
    name: BucketName

    constructor(name: BucketName) {
        this.name = name;
    }

    static BucketPseudonyms: Record<string, BucketName | undefined> = {
        "Both fun money": "Both Fun Money",
        "Vishal fun money": "Vishal Fun Money",
        "Colthing": "Clothes", // TODO: Remove this after fixing spelling
        "Clothing": "Clothes",
        "M Fun Money": "Meridith Fun Money",
    }
}