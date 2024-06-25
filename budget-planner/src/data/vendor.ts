export class Vendor {
    transactionId?: string
    name: string

    constructor(name: string, transactionId?: string) {
        this.name = name;
        this.transactionId = transactionId;
    }

    public get vendorId(): string {return this.name; }

    static fromJson(parsedVendor: Record<string, any>): Vendor | undefined {
        const hasData = (
            typeof parsedVendor.name == "string" && 
            (typeof parsedVendor.transactionId == "string" || typeof parsedVendor.transactionId == "undefined") 
        ) 
        
        return hasData ? new Vendor(parsedVendor.name, parsedVendor.transactionId) : undefined
    }
}