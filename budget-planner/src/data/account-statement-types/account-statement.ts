import { Account } from "../account";
import { ExternalTransaction, InternalTransaction } from "../transactions";

export interface AccountStatement {
    account: Account

    startDate: Date
    endDate: Date

    transactions: Array<ExternalTransaction | InternalTransaction>
}