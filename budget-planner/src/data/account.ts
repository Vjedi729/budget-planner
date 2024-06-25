

export class Account {

    private _name: string;
    private _balance: number;
    // private currency: string; // TODO: Add Currency Support?
    private minBalance?: number;

    constructor(name: string, initialBalance: number = 0, minBalance?: number){
        this._name = name;
        this._balance = initialBalance;
        this.minBalance = minBalance;
    }

    public get name(): string { return this._name; }
    public get balance() : number { return this._balance; }
    public get accountId(): string {return this._name; }

    Deposit(amount: number): void { this._balance += amount; }
    TryWithdraw(wantedAmount : number): number {
        let withdrawAmount = this.minBalance ? Math.min(wantedAmount, this._balance - this.minBalance) : wantedAmount

        this._balance -= withdrawAmount;
        return withdrawAmount;
    }
    
}