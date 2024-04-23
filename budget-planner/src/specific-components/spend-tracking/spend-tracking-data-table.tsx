'use client'
import React, { useState } from "react"
import DataTable, { TableColumn } from "react-data-table-component"

import { BucketName } from "@/data/enums"
import { SimpleColumn } from "@/standard-components/react-data-table-component-utils"
import { dollarFormat } from "@/utilities/displayUtils"
import { InnerSpendTrackingComponentProps } from "."
import _ from "lodash"
import { DateMonthBeforeOffsetFunctionFactory as DateMonthsAgoOffset, DateYearBeforeOffsetFunctionFactory as DateYearsAgoOffset } from "@/utilities/dateUtils"

type TimeType = Date;
type RowType = BucketName;
const baseCols: TableColumn<RowType>[] = [
    {
        name: "Bucket Name",
        selector: (row) => _.startCase(row)
    }
]

export const SpendTrackingDataTable: React.FunctionComponent<InnerSpendTrackingComponentProps<TimeType>> = (props) => {
    const bucketBalanceHistory = props.bucketBalanceHistory
    var buckets: BucketName[] = Object.keys(bucketBalanceHistory.currentValue)
    const [times, setTimes] = useState<TimeType[]>([
        bucketBalanceHistory.currentTime,
        DateMonthsAgoOffset(1)(bucketBalanceHistory.currentTime, false),
        DateMonthsAgoOffset(6)(bucketBalanceHistory.currentTime, false),
        DateYearsAgoOffset(1)(bucketBalanceHistory.currentTime, false),
        DateYearsAgoOffset(2)(bucketBalanceHistory.currentTime, false)
    ])

    const cols: (typeof baseCols)  = baseCols.concat(times.map(time => new SimpleColumn<RowType, number>(
        {
            name: `${time.getFullYear()}-${_.padStart(`${time.getMonth()+1}`, 2, "0")}-${time.getDate()}\n(x days ago)`,
        },
        {
            selector: (bucketName) => {let bal = bucketBalanceHistory.getValue(time); console.log(time, bal); return (bal!=undefined ? bal[bucketName] : 0) || 0;},
            format: (n, row) => { console.log(row, n); return dollarFormat(n); },
        }
    )))

    return <DataTable 
        columns={cols} data={buckets} 
        fixedHeader={true} fixedHeaderScrollHeight="100%"
    />
}