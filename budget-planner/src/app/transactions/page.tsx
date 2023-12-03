'use client'
import React from "react"

import { TransactionDataTable } from "@/specific-components/spend-tracking/transaction-data-table"
import { TestDataToSpendTrackingProps } from "@/specific-components/spend-tracking/test-data-to-spend-tracking-props"

export const TransactionsPage: React.FC = () => {
    let innerProps = TestDataToSpendTrackingProps();
    return <TransactionDataTable bucketBalanceHistory={innerProps.bucketBalanceHistory} transactions={innerProps.transactions}/>
}

export default TransactionsPage