'use client'

import React from "react"
import { TestDataToSpendTrackingProps } from "@/specific-components/spend-tracking/test-data-to-spend-tracking-props";
import { SpendTrackingGraphs } from "@/specific-components/spend-tracking/spend-tracking-graphs"
import { InnerSpendTrackingComponentProps } from "@/specific-components/spend-tracking";

export const SpendTrackerPage: React.FC = () => {
    let innerProps: InnerSpendTrackingComponentProps = TestDataToSpendTrackingProps();

    // console.log(innerProps)
    return <SpendTrackingGraphs bucketBalanceHistory={innerProps.bucketBalanceHistory} transactions={innerProps.transactions} budgetConfigHistory={innerProps.budgetConfigHistory}/>
}

// export const ComponentFactoryContainerPage: React.FC = () => {
//     return TestDataComponentFactory(SpendTrackingGraph)({})
// }

// export const ComponentFactoryPage: React.FC = TestDataComponentFactory(SpendTrackingGraph)

export default SpendTrackerPage;