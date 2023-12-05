import { HistoryOf } from "@/data/history";
import { ExternalTransaction } from "@/data/transactions";

export interface InnerSpendTrackingComponentProps<TimeType = Date> {
    bucketBalanceHistory: HistoryOf<Record<string, number>, TimeType>
    transactions: ExternalTransaction<TimeType>[],
}

// ! These don't work (for reasons I don't understand) - Vishal
export interface OuterSpendTrackingComponentProps<TimeType = Date> {
    innerComponent: React.FC<InnerSpendTrackingComponentProps<TimeType>>
}

export type SpendTrackingComponentFactory = (innerComponent: React.FC<InnerSpendTrackingComponentProps<Date>>) => React.FC