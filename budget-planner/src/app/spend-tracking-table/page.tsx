'use client'

import React from "react"
import { TestDataToSpendTrackingProps } from "@/specific-components/spend-tracking/test-data-to-spend-tracking-props";
import { InnerSpendTrackingComponentProps } from "@/specific-components/spend-tracking";
import { SpendTrackingDataTable } from "@/specific-components/spend-tracking/spend-tracking-data-table";

export const SpendTrackerPage: React.FC = () => {
    let innerProps: InnerSpendTrackingComponentProps = TestDataToSpendTrackingProps();

    return <SpendTrackingDataTable bucketBalanceHistory={innerProps.bucketBalanceHistory} transactions={innerProps.transactions} budgetConfigHistory={innerProps.budgetConfigHistory}/>
}

export default SpendTrackerPage;