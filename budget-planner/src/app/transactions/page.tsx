'use client'
import React  from "react"
import DataTable, { TableColumn, ExpanderComponentProps } from "react-data-table-component"
import { ExternalTransaction } from "@/data/transactions"
import { Purchase } from "@/data/purchase"

import { testData } from "@/data/testData"

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
        selector: row => Array.from(new Set(row.purchases.map(p => p.bucket))).join(", ") || "No Bucket"
    },
    {
        name: "Account",
        selector: row => row.account.name
    }
]

const purchaseColumns: TableColumn<Purchase>[] = [
    {
        name: "Amount",
        selector: row => row.price
    },
    {
        name: "Description",
        selector: row => row.desciption.name
    },
    {
        name: "Bucket",
        selector: row => row.bucket
    }
]

export const PurchaseDataTable: React.FC<ExpanderComponentProps<ExternalTransaction>> = (props) => <DataTable columns={purchaseColumns} data={props.data.purchases}/>

export class Transactions extends React.Component {

    render() {
        return <DataTable columns={cols} data={testData} expandableRows expandableRowsComponent={PurchaseDataTable} expandableRowDisabled={row => (row.purchases.length == 0)}/>
    }
}

export default Transactions