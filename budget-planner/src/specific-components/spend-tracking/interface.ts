import { ExternalTransaction } from "@/data/transactions";

export interface SpendTrackingProps<TimeType = Date> {
    // TODO: Add Budget Config (History)
    startTime: TimeType,
    endTime: TimeType,
    transactions: ExternalTransaction[], // TODO: Update to use generic TimeType
}