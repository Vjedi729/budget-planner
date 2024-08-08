'use client'
import React from "react"

import { TransactionDataTable } from "@/specific-components/spend-tracking/transaction-data-table"
import { TestDataToSpendTrackingProps } from "@/specific-components/spend-tracking/test-data-to-spend-tracking-props"
import { ExternalTransaction } from "@/data/transactions"


export const TransactionsPage: React.FC = () => {
    let innerProps = TestDataToSpendTrackingProps();
    return( <TransactionDataTable bucketBalanceHistory={innerProps.bucketBalanceHistory} transactions={innerProps.transactions} budgetConfigHistory={innerProps.budgetConfigHistory}/>)
}

// export function downloadTransactions(inputArray: ExternalTransaction[]){
//     const jsonTransactionArray = "[\n"+inputArray.map(x => `\t${x.toJson()}`).join(',\n')+"\n]"
//     const transactionFile = new Blob([jsonTransactionArray], {type: 'text/json'})
//     const url = URL.createObjectURL(transactionFile)
//     const link = document.createElement('a')
//     link.download = "Transactions_09-01-22_06-20-24.json"
//     link.href = url
//     link.click()
// }

//downloadTransactions(sampleTransactions)

export default TransactionsPage
