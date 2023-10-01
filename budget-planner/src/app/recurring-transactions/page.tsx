'use client'
import React  from "react"
import Collapsible from 'react-collapsible'
import DataTable, { TableColumn, ExpanderComponentProps } from "react-data-table-component"
import { RecurringTransaction } from "@/data/transactions"

import { testRecurringData } from "@/data/testData"

const cols: TableColumn<RecurringTransaction>[] = [
    {
        name: "Amount",
        selector: row => row.amount,
        format: row => `$${row.amount}`
    },
    {
        name: "Vendor",
        selector: row => row.vendor.name
    },
    {
        name: "Description",
        selector: row => row.description
    },
    {
        name: "Bucket",
        selector: row => row.bucket
    },
    {
        name: "Recurrence",
        selector: row => row.recurrence
    },
    {
        name: "Cost Per Year",
        selector: row => row.recurrence*row.amount
    },
    {
        name: "Account",
        selector: row => row.accountFrom.name
    }
]

const collapseDiv = () => {
    return (
        <Collapsible trigger = "Needs"> 
             <DataTable
            columns = {cols}
            data = {testRecurringData}
            /> 
            </Collapsible>
    );
    }

// export default function recurringTable() {
//     return (
//         <DataTable
//             columns = {cols}
//             data = {testRecurringData}
//         />
//     );
// };
export default collapseDiv;

//Want to make individual expandable divs that hold subordinate expandable
//divs for each bucket (ie Needs -> Electric) that display things like "contains
//3 Charges in X buckets totalling $XX per year". And within each bucket div
//there will be a table outlining each recurring transaction in the bucket.
//Each transaction not in a bucket will appear in a table at the bottom of 
//the Needs or Discretionary Divs