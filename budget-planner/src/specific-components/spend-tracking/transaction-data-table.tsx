'use client'
import React from "react"
import DataTable, { TableColumn, ExpanderComponentProps } from "react-data-table-component"
import { ExternalTransaction } from "@/data/transactions"
import { Purchase } from "@/data/purchase"

import { BucketName } from "@/data/enums"
import { CumulativeTableColumn, SimpleColumn } from "@/standard-components/react-data-table-component-utils"
import { dollarFormat } from "@/utilities/displayUtils"
import { InnerSpendTrackingComponentProps } from "."

interface ExternalTransactionRow<Date> {
    transaction: ExternalTransaction<Date>
    bucketBalance: Record<string, number>
}

const cols: TableColumn<ExternalTransactionRow<Date>>[] = [
    {
        name: "Date",
        selector: row => row.transaction.time.toUTCString()
    },
    new SimpleColumn(
        {
            name: "Amount",
        },
        {
            selector: row => row.transaction.amount,
            format: dollarFormat,
        }
    ),
    {
        name: "Location",
        selector: row => row.transaction.vendor.name
    },
    {
        name: "Bucket(s)",
        selector: row => Array.from(new Set(row.transaction.purchases.map(p => p.bucket))).join(", ") || BucketName.NONE
    },
    {
        name: "Account",
        selector: row => row.transaction.account.name
    }
]

const purchaseColumns: ((initialBucketBalance: Record<BucketName, number>) => TableColumn<Purchase>[]) = (initialBucketBalances) => [
    {

    },
    new SimpleColumn(
        {
            name: "Amount",
            sortable: true
        },
        {
            selector: row => row.price,
            format: dollarFormat,
        }
    ),
    {
        name: "Description",
        selector: row => row.desciption.name
    },
    {
        name: "Bucket",
        selector: row => row.bucket,
        sortable: true
    },
    new CumulativeTableColumn(
        { name: "Bucket Balance" },
        {
            accumulatingSelector: (accumVal, row) => {
                accumVal[row.bucket] = (accumVal[row.bucket] || 0) - row.price; 
                return {accum: accumVal, val: accumVal[row.bucket]};
            }, 
            accumulatorStart: initialBucketBalances,
            format: dollarFormat
        }
    )
]

export const PurchaseDataTable: React.FC<ExpanderComponentProps<ExternalTransactionRow<Date>>> = (props) => {
    const [, updateState] = React.useState({});
    const forceUpdate = React.useCallback(() => updateState({}), []);

    let {transaction, bucketBalance} = props.data;
    console.log(bucketBalance)

    let rows = (transaction.hasRemainder() ? [transaction.getRemainderPurchase()] : []).concat(transaction.purchases)
    let cols = purchaseColumns(bucketBalance)

    return (
        <div style={{paddingBlock:"1vh", paddingInlineStart:"48px", backgroundColor:"lightgray"}}>
            <DataTable columns={cols} data={rows} onSort={(col, order, sortedRows) => {
                cols.forEach(col => { 
                    if (col instanceof CumulativeTableColumn) col.precalculate(sortedRows);
                });
                forceUpdate();
            }}/>
        </div>
    )
}

export const TransactionDataTable: React.FunctionComponent<InnerSpendTrackingComponentProps> = (props) => {
    let rows: ExternalTransactionRow<Date>[] = props.transactions.map(
        transaction => { return {
            transaction: transaction, 
            bucketBalance: props.bucketBalanceHistory.getValue(transaction.time) || {}
        }}
    )
    return <DataTable columns={cols} data={rows} expandableRows expandableRowsComponent={PurchaseDataTable} expandableRowDisabled={row => (row.transaction.purchases.length == 0)}/>
}