
export interface TextDescription {
    name: string
    description: string
}

export interface Purchase {
    readonly price: number
    readonly bucket: string
    readonly desciption: TextDescription
}