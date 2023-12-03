import { BudgetConfig } from "@/data/budgetConfig";
import { HistoryOf } from "@/data/history";
import { ExternalTransaction } from "@/data/transactions";

export interface InnerSpendTrackingComponentProps<TimeType = Date> {
    bucketBalanceHistory: HistoryOf<Record<string, number>, TimeType>
    transactions: ExternalTransaction<TimeType>[],
}

export interface OuterSpendTrackingComponentProps<TimeType = Date> {

}

// export type SpendTrackingComponentProps<TimeType = Date> = InnerSpendTrackingComponentProps<TimeType>