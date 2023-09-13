export class Vendor {
    transactionId?: string
    name: string

    constructor(name: string, transactionId?: string) {
        this.name = name;
        this.transactionId = transactionId;
    }
}