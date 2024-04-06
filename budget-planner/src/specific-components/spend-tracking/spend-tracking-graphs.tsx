'use client'
import React from "react";

import { InnerSpendTrackingComponentProps } from ".";
import { BasicHistoryOf, HistoryOf, TimelineOf, TimelineSortByTime } from "@/data/history";
import { BucketName } from "@/data/enums";

import { BucketBalance, earlierDateFirstSort, laterDateFirstSort, processTransaction } from "@/data/testData";
import { cloneDeep } from "lodash";
import { JsSort } from "@/ts-utils/sort-utils";
import { WantsSpendTrackingGraph } from "./spend-tracking-graphs/wants-spend-tracking-graph";
import { FlexColumn } from "./spend-tracking-graphs/flex-column";

const testBucket: string|undefined = "For Varsha"

export const SpendTrackingGraphs: React.FC<InnerSpendTrackingComponentProps> = (props) => {
    
    // * Create graph props
    let sortedTransactions = props.transactions.sort((a, b) => earlierDateFirstSort(a.time, b.time));
    // console.log("Sorted Transactions (Earliest to latest)", sortedTransactions)
    // * Temporary hard-coded times
    // let startTime = new Date(2023, 8, 15)
    // let endTime = new Date(2023, 8, 25)
    const startTime = sortedTransactions[0].time;
    const endTime = sortedTransactions[sortedTransactions.length-1].time;
    // console.log("Graphing from ", startTime, endTime)

    sortedTransactions = sortedTransactions.slice(
        sortedTransactions.findIndex(x => ! JsSort.ResultEquals(laterDateFirstSort(x.time, startTime), JsSort.ResultType.RightArgFirst)),
        sortedTransactions.findLastIndex(x => ! JsSort.ResultEquals(laterDateFirstSort(x.time, endTime), JsSort.ResultType.LeftArgFirst))
    );
    // console.log("Filtered Transactions (in range)", sortedTransactions, startTime, endTime)

    let bucketBalanceTimeline = props.bucketBalanceHistory.getValues(startTime, endTime).sort(TimelineSortByTime(earlierDateFirstSort));
    const startingBalances: Record<BucketName, number> = props.bucketBalanceHistory.getValue(startTime, false) || {}
    // console.log("BucketBalances", cloneDeep(props.bucketBalanceHistory))
    // console.log("Bucket Balance Changes for testBucket", props.bucketBalanceHistory.changes.filter(x => x.prevValuesOfChangedElements[testBucket] != undefined))
    // console.log("Starting Balances", startingBalances, "full timeline", bucketBalanceTimeline)

    let purchaseAmounts: HistoryOf<BucketBalance, Date> = new BasicHistoryOf(laterDateFirstSort, {}, startTime, 0);
    sortedTransactions.forEach(transaction => {
        // console.log("Purchase Amounts", cloneDeep(purchaseAmounts.currentValue), "before Transaction", cloneDeep(transaction), transaction.hasRemainder() ? "remainder" : undefined, transaction.getRemainderPurchase())
        let newPurchaseAmounts = processTransaction(transaction, cloneDeep(purchaseAmounts.currentValue))
        // console.log("After transaction", cloneDeep(newPurchaseAmounts))
        let changes = purchaseAmounts.setValue(newPurchaseAmounts, transaction.time)
        // if(changes != undefined && changes[testBucket] != undefined) console.warn("Test bucket changed from", changes[testBucket])
        // console.log("Purchase Amount previous values", changes, "new value", cloneDeep(purchaseAmounts))
    })
    purchaseAmounts.reportNoChange(endTime);
    // console.log("Purchase Amounts Timeline", purchaseAmounts.getValues(startTime, endTime))
    
    let bucketBudgets: HistoryOf<Record<BucketName, number>, Date> = new BasicHistoryOf(laterDateFirstSort, {}, startTime)
    // if(testBucket) console.log("Test bucket is:", testBucket)
    bucketBalanceTimeline.forEach(({start, end, value}) => {
        let bucketToPurchaseAmount = purchaseAmounts.getValue(start, true) || {}
        let bucketToZeroedBudget = Object.fromEntries(Object.entries(value).map(([bucket, bucketBudgetValue]) => 
            [bucket, ((bucketBudgetValue || 0) - (startingBalances[bucket] || 0))]
        ));

        Object.entries(bucketToPurchaseAmount).forEach(([bucket, amount]) => {
            bucketToZeroedBudget[bucket] -= (amount || 0)
        })

        bucketBudgets.setValue(bucketToZeroedBudget, start, end)
    })

    // console.log("Bucket Budgets Timeline", bucketBudgets.getValues(startTime, endTime))

    // Filter which buckets are wants
    let needsBuckets: string[] = props.budgetConfigHistory.currentValue.needs.bucketNames;
    let wantsBuckets: string[] = Object.keys(props.bucketBalanceHistory.currentValue).filter( x => ! needsBuckets.includes(x) );

    // TODO: Something like this: https://stackoverflow.com/questions/57528694/chart-js-multiple-charts-with-one-common-legend
    return (
        <div>
            <h1>Spend Tracking Graph</h1>

            <div style={{display: 'flex'}}>
                <FlexColumn key='Wants' title="Wants Buckets">
                    {/* <div>
                        <WantsSpendTrackingGraph
                            bucket="" 
                            bucketBalanceTimeline={[]} bucketBudgetTimeline={[]} bucketSpendingTimeline={[]} 
                            startingBalances={{}} startTime={startTime} endTime={endTime}
                            options={{
                                plugins:{legend:{display:true}}, 
                                aspectRatio:0,
                                scales:{x:{display:false}, y:{display:false}}
                            }}
                        />
                    </div> */}
                    <div style={{display: 'grid', gridTemplateColumns: '32% 32% 32%', columnGap:'2%' }}>
                        {wantsBuckets.map(bucketName => (
                            <div key={bucketName}>
                                <h3 style={{textAlign:"center"}}>{bucketName}</h3>
                                <WantsSpendTrackingGraph 
                                    bucket={bucketName}
                                    // bucketBalanceTimeline={bucketBalanceTimeline}
                                    bucketSpendingTimeline={purchaseAmounts.getValues(startTime, endTime).sort(TimelineSortByTime(earlierDateFirstSort))}
                                    bucketBudgetTimeline={bucketBudgets.getValues(startTime, endTime).sort(TimelineSortByTime(earlierDateFirstSort))}
                                    startingBalances={props.bucketBalanceHistory.getValue(startTime) || {}}
                                    startTime={startTime} endTime={endTime}
                                />
                            </div>
                        ))}
                    </div>
                </FlexColumn>
                <FlexColumn key='Needs' title="Needs Buckets"></FlexColumn>
            </div>
            

        </div>
    )
}