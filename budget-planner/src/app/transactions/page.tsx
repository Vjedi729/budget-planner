'use client'
import React  from "react"
import DataTable, { TableColumn, ExpanderComponentProps } from "react-data-table-component"
import { ExternalTransaction } from "@/data/transactions"
import { Purchase } from "@/data/purchase"

import { getBucketBalances, testData } from "@/data/testData"
import { BucketName } from "@/data/enums"

const cols: TableColumn<ExternalTransaction>[] = [
    {
        name: "Date",
        selector: row => row.time.toUTCString()
    },
    {
        name: "Amount",
        selector: row => row.amount,
        format: row => `$${row.amount}`
    },
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

let bucketBalances: Record<BucketName, number> = {} 
const purchaseColumns: TableColumn<Purchase>[] = [
    {

    },
    {
        name: "Amount",
        selector: row => row.price,
        format: row => `$${row.price}`,
        sortable: true
    },
    {
        name: "Description",
        selector: row => row.desciption.name
    },
    {
        name: "Bucket",
        selector: row => row.bucket,
        sortable: true
    },
    {
        name: "Bucket Balance",
        selector: row => { 
            // console.log(bucketBalances);
            bucketBalances[row.bucket] = (bucketBalances[row.bucket] || 0) - row.price; 
            return `${Math.round(bucketBalances[row.bucket]*100)/100}`;
        },
    }
]

export const PurchaseDataTable: React.FC<ExpanderComponentProps<ExternalTransaction>> = (props) => {
    let rows = (props.data.hasRemainder() ? [props.data.getRemainderPurchase()] : []).concat(props.data.purchases)
    bucketBalances = getBucketBalances(props.data.time)
    return (
        <div style={{paddingBlock:"1vh", paddingInlineStart:"48px", backgroundColor:"lightgray"}}>
            <DataTable columns={purchaseColumns} data={rows} onSort={() => bucketBalances = getBucketBalances(props.data.time)}/>
        </div>
    )
}
export class Transactions extends React.Component {

    render() {
        // Make changeable from UI
        let startDate = new Date(2023, 7, 29);

        // let bucketBalances = getBucketBalances(startDate) // TODO: add memoization (possibly using "React.useMemo"?)
        let rows: ExternalTransaction[] = testData.filter(transaction => transaction.time > startDate)
        return <DataTable columns={cols} data={rows} expandableRows expandableRowsComponent={PurchaseDataTable} expandableRowDisabled={row => (row.purchases.length == 0)}/>
    }
}

export default Transactions