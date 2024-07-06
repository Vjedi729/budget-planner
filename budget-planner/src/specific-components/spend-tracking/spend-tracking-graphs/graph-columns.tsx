'use client'
import React, { useState } from "react";

import { InnerSpendTrackingComponentProps } from "..";
import { BasicHistoryOf, HistoryOf, TimelineOf, TimelineSortByTime } from "@/data/history";
import { BucketName } from "@/data/enums";

import { earlierDateFirstSort, laterDateFirstSort, processTransaction } from "@/data/testData";
import { cloneDeep } from "lodash";
import { JsSort } from "@/ts-utils/sort-utils";
import { WantsSpendTrackingGraph } from "./wants-spend-tracking-graph";
import { FlexColumn } from "./flex-column";
import { NeedsSpendTrackingGraph } from "./needs-spend-tracking-graph";
import { ExternalTransaction } from "@/data/transactions";
import { BucketBalance } from "@/data/bucket-fill-algorithm/interface";
import { getOrDefault, diffRecords } from "@/ts-utils/record-utils";
import { orDefault } from "@/ts-utils/undefined-utils";

// const testBucket: string|undefined = "For Varsha"

export function DateDayOffset(dayOffset: number) {
    return (oldDate: Date, invert: boolean = false) => new Date(
        oldDate.getFullYear(),
        oldDate.getMonth(),
        oldDate.getDate()+(invert?1:-1)*dayOffset,
        oldDate.getHours(), oldDate.getMinutes(), oldDate.getSeconds(), oldDate.getMilliseconds()
    );
}

export function DateMonthOffset(monthOffset: number) {
    return (oldDate: Date, invert: boolean = false) => new Date(
        oldDate.getFullYear(),
        oldDate.getMonth() + (invert?1:-1)*monthOffset,
        oldDate.getDate(),
        oldDate.getHours(), oldDate.getMinutes(), oldDate.getSeconds(), oldDate.getMilliseconds()
    );
}

export const SpendTrackingGraphColumns: React.FC<{ props: InnerSpendTrackingComponentProps, startTime: Date, endTime: Date}> = ({props, startTime, endTime}) => {
    
    // * Create graph props
    let sortedTransactions = props.transactions.sort((a, b) => earlierDateFirstSort(a.time, b.time));
    // console.log("Sorted Transactions (Earliest to latest)", sortedTransactions)
    let inputEndTime = sortedTransactions[sortedTransactions.length-1].time;

    // sortedTransactions = sortedTransactions.slice(
    //     sortedTransactions.findIndex(x => ! JsSort.ResultEquals(laterDateFirstSort(x.time, startTime), JsSort.ResultType.RightArgFirst)),
    //     sortedTransactions.findLastIndex(x => ! JsSort.ResultEquals(laterDateFirstSort(x.time, endTime), JsSort.ResultType.LeftArgFirst))
    // );
    // console.log("Filtered Transactions (in range)", sortedTransactions, startTime, endTime)

    // let bucketBalanceTimeline = props.bucketBalanceHistory.getEntries(startTime, endTime).sort(TimelineSortByTime(earlierDateFirstSort));
    let bucketBalanceTimeline = props.bucketBalanceHistory.getFullTimeline().sort(TimelineSortByTime(earlierDateFirstSort));
    const startingBalances: Record<BucketName, number> = props.bucketBalanceHistory.getValue(startTime, false) || {}
    // console.log("BucketBalances", cloneDeep(props.bucketBalanceHistory))
    // console.log("Bucket Balance Changes for testBucket", props.bucketBalanceHistory.changes.filter(x => x.prevValuesOfChangedElements[testBucket] != undefined))
    // console.log("Starting Balances", startingBalances, "full timeline", bucketBalanceTimeline)

    let purchaseAmounts: HistoryOf<BucketBalance, Date, ExternalTransaction> = new BasicHistoryOf(
        laterDateFirstSort, 
        Object.fromEntries(Object.entries(startingBalances).map(([k,v]) => [k,-v])), 
        props.bucketBalanceHistory.initialTime, 0
    );
    sortedTransactions.forEach(transaction => {
        // console.log("Purchase Amounts", cloneDeep(purchaseAmounts.currentValue), "before Transaction", cloneDeep(transaction), transaction.hasRemainder() ? "remainder" : undefined, transaction.getRemainderPurchase())
        let newPurchaseAmounts = processTransaction(transaction, cloneDeep(purchaseAmounts.currentValue))
        // console.log("After transaction", cloneDeep(newPurchaseAmounts))
        let changes = purchaseAmounts.setValue(newPurchaseAmounts, transaction.time, undefined, transaction)
        // if(changes != undefined && changes[testBucket] != undefined) console.warn("Test bucket changed from", changes[testBucket])
        // console.log("Purchase Amount previous values", changes, "new value", cloneDeep(purchaseAmounts))
    })
    purchaseAmounts.reportNoChange(inputEndTime);
    // console.log("Purchase Amounts Timeline", purchaseAmounts.getEntries(startTime, endTime))
    
    let bucketBudgets: HistoryOf<Record<BucketName, number>, Date> = new BasicHistoryOf(laterDateFirstSort, {}, props.bucketBalanceHistory.initialTime)
    // if(testBucket) console.log("Test bucket is:", testBucket)
    bucketBalanceTimeline.forEach(({start, end, value}) => {
        let bucketToPurchaseAmount = purchaseAmounts.getEntry(start, true)
        if(bucketToPurchaseAmount == undefined) return;

        let bucketToZeroedBudget = diffRecords(value, startingBalances, (a,b) => orDefault(a,0)-orDefault(b,0))
        
        Object.entries(bucketToPurchaseAmount.value).forEach(([bucket, amount]) => {
            bucketToZeroedBudget[bucket] -= (amount || 0)
        })

        bucketBudgets.setValue(bucketToZeroedBudget, start, end)
    })
    bucketBudgets.reportNoChange(inputEndTime);

    // console.log("Bucket Budgets Timeline", bucketBudgets.getEntries(startTime, endTime))

    // * Filter which buckets are wants
    let needsBuckets: string[] = props.budgetConfigHistory.currentValue.needs.bucketNames;
    let wantsBuckets: string[] = Object.keys(props.bucketBalanceHistory.currentValue).filter( x => !needsBuckets.includes(x) && x!=BucketName.UNDEFINED && !props.budgetConfigHistory.currentValue.incomes.bucketNames.includes(x) );

    // console.log("Wants Buckets", wantsBuckets)
    const wantsBucketSpendingTimeline = purchaseAmounts.getEntries(startTime, endTime).sort(TimelineSortByTime(earlierDateFirstSort));
    const wantsBucketBudgetTimeline = bucketBudgets.getEntries(startTime, endTime).sort(TimelineSortByTime(earlierDateFirstSort));

    // TODO: Something like this: https://stackoverflow.com/questions/57528694/chart-js-multiple-charts-with-one-common-legend
    return (
        <div style={{display: 'flex'}}>
            <FlexColumn key='Wants' title="Wants Buckets" grow={3}>
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
                <WantsSpendTrackingGraph
                    buckets={wantsBuckets}
                    bucketSpendingHistory={purchaseAmounts}
                    bucketSpendingTimeline={wantsBucketSpendingTimeline}
                    bucketBudgetTimeline={wantsBucketBudgetTimeline}
                    startingBalances={startingBalances}
                    startTime={startTime} endTime={endTime}
                    options={{aspectRatio:3}}
                />
                <div style={{display: 'grid', gridTemplateColumns: '32% 32% 32%', columnGap:'2%' }}>
                    {wantsBuckets.map(bucketName => { return (
                        <div key={bucketName}>
                            <h3 style={{textAlign:"center"}}>{bucketName}</h3>
                            <WantsSpendTrackingGraph 
                                buckets={[bucketName]}
                                // bucketBalanceTimeline={bucketBalanceTimeline}
                                bucketSpendingHistory={purchaseAmounts}
                                bucketSpendingTimeline={wantsBucketSpendingTimeline}
                                bucketBudgetTimeline={wantsBucketBudgetTimeline}
                                startingBalances={startingBalances}
                                startTime={startTime} endTime={endTime}
                            />
                        </div>
                    )})}
                </div>
            </FlexColumn>
            <FlexColumn key='Needs' title="Needs Buckets" grow={2}>
                <NeedsSpendTrackingGraph
                    buckets={needsBuckets}
                    bucketSpendingHistory={purchaseAmounts}
                    startingBalances={startingBalances}
                    // pastSpendingOffset={DateDayOffset(-7)}
                    // pastSpendingString={(i: number) => `${i} week${i==1?'':'s'} ago`}
                    pastSpendingOffset={DateMonthOffset(1)}
                    pastSpendingString={(i: number) => `${i} month${i==1?'':'s'} ago`}
                    pastSpendingTransparencyMultiplier={0.6}
                    startTime={startTime} endTime={endTime}
                    chartOptions={{aspectRatio:2}}
                />
                <div style={{display: 'grid', gridTemplateColumns: '48% 48%', columnGap:'2%' }}>
                    {needsBuckets.map(bucketName => (
                        <div key={bucketName}>
                            <h3 style={{textAlign:"center"}}>{bucketName}</h3>
                            <NeedsSpendTrackingGraph
                                buckets={[bucketName]}
                                bucketSpendingHistory={purchaseAmounts}
                                startingBalances={startingBalances}
                                // pastSpendingOffset={DateDayOffset(-7)}
                                // pastSpendingString={(i: number) => `${i} week${i==1?'':'s'} ago`}
                                pastSpendingOffset={DateMonthOffset(-1)}
                                pastSpendingString={(i: number) => `${i} month${i==1?'':'s'} ago`}
                                pastSpendingTransparencyMultiplier={0.6}
                                startTime={startTime} endTime={endTime}
                            />
                        </div>
                    ))}
                </div>
            </FlexColumn>
        </div>
    )
}