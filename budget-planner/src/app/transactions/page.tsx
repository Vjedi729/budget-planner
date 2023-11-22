'use client'
import React  from "react"
import DataTable, { TableColumn, ExpanderComponentProps } from "react-data-table-component"
import { ExternalTransaction } from "@/data/transactions"
import { Purchase } from "@/data/purchase"

import { OLD_getBucketBalances, testTransactionData } from "@/data/testData"
import { BucketName } from "@/data/enums"
import { CumulativeTableColumn, SimpleColumn } from "@/components/react-data-table-component-utils"

function dollarFormat(n: number): string { return `${n<0 ? "-" : ""}$${Math.round(Math.abs(n)*100)/100}` }

const cols: TableColumn<ExternalTransaction>[] = [
    {
        name: "Date",
        selector: row => row.time.toUTCString()
    },
    new SimpleColumn(
        {
            name: "Amount",
        },
        {
            selector: row => row.amount,
            format: dollarFormat,
        }
    ),
    {
        name: "Location",
        selector: row => row.vendor.name
    },
    {
        name: "Bucket(s)",
        selector: row => Array.from(new Set(row.purchases.map(p => p.bucket))).join(", ") || BucketName.NONE
    },
    {
        name: "Account",
        selector: row => row.account.name
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

export const PurchaseDataTable: React.FC<ExpanderComponentProps<ExternalTransaction>> = (props) => {
    const [, updateState] = React.useState({});
    const forceUpdate = React.useCallback(() => updateState({}), []);

    let rows = (props.data.hasRemainder() ? [props.data.getRemainderPurchase()] : []).concat(props.data.purchases)
    let cols = purchaseColumns(OLD_getBucketBalances(props.data.time))

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
export class Transactions extends React.Component {

    render() {
        // Make changeable from UI
        let startDate = new Date(2023, 7, 29);

        // let bucketBalances = getBucketBalances(startDate) // TODO: add memoization (possibly using "React.useMemo"?)
        let rows: ExternalTransaction[] = testTransactionData.filter(transaction => transaction.time > startDate)
        return <DataTable columns={cols} data={rows} expandableRows expandableRowsComponent={PurchaseDataTable} expandableRowDisabled={row => (row.purchases.length == 0)}/>
    }
}

export default Transactions