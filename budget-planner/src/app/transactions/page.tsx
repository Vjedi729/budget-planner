'use client'
import React from "react"
import { EveryMonthOnTheNth } from "@/data/transactions"

import { getBucketBalances, laterDateFirstSort, testBudgetHistory, testStartDate, testTransactionData } from "@/data/testData"
import { TransactionDataTable } from "@/specific-components/spend-tracking/transaction-data-table"
import { JsSort } from "@/ts-utils/sort-utils"

export class Transactions extends React.Component {
    render() {
        // Make changeable from UI
        let startDate = new Date(2023, 7, 29);
        let endDate = new Date(Date.now())

        let bucketBalanceHistory = getBucketBalances(
            laterDateFirstSort, {}, testStartDate, testBudgetHistory, 
            new EveryMonthOnTheNth(2), testTransactionData, 
            endDate, false
        )

        return <TransactionDataTable 
            bucketBalanceHistory={bucketBalanceHistory} 
            transactions={testTransactionData.filter(transaction => 
                JsSort.ResultEquals(JsSort.ResultType.LeftArgFirst, laterDateFirstSort(transaction.time, startDate)) &&
                JsSort.ResultEquals(JsSort.ResultType.LeftArgFirst, laterDateFirstSort(endDate, transaction.time))
            )} 
        />

    }
}

export default Transactions