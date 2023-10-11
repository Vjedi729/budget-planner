import { BucketName } from "./enums"
export interface TextDescription {
    name: string
    description: string
}

export interface Purchase {
    readonly price: number
    readonly bucket: BucketName
    readonly desciption: TextDescription
}