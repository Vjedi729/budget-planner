import { BucketName } from "../enums"

export type Money = number
export type BucketBalance<MoneyType = Money> = Record<BucketName, MoneyType>

export interface BucketFillAlgorithm<UniqueKeyString extends string> {
    readonly uniqueKeyString: UniqueKeyString

    fillBuckets(initialBucketBalances: BucketBalance): BucketBalance // May modify inputs

    // TODO: add serialize and deserialize functions
}