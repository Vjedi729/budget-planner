import { BucketBalance, GetGroupBalance } from "@/data/testData";
import { HistoryOf, TimelineOf } from "@/data/history";
import { BucketName } from "@/data/enums";
import { PartialDeep } from "type-fest";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    TimeSeriesScale,
    ChartDataset,
    ChartOptions,
    TooltipItem,
} from 'chart.js';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    TimeSeriesScale
);
import 'chartjs-adapter-moment';
import { Line as LineChart } from "react-chartjs-2";
import { ExternalTransaction } from "@/data/transactions";

export interface WantsSpendingProps<TimeType = Date> {
    // bucketBalanceHistory: HistoryOf<BucketBalance, TimeType>
    startingBalances: BucketBalance
    // bucketBalanceTimeline: TimelineOf<BucketBalance, TimeType> // For Testing
    bucketBudgetTimeline: TimelineOf<BucketBalance, TimeType>
    bucketSpendingHistory: HistoryOf<BucketBalance, TimeType, ExternalTransaction>
    bucketSpendingTimeline: TimelineOf<BucketBalance, TimeType, ExternalTransaction[]>
    buckets: BucketName[],
    startTime: TimeType,
    endTime: TimeType,
    options?: ChartOptions<"line">
}

type ColorArray = [number, number, number] | [number, number, number, number | undefined]

export type TimelinePoint<TimeType, Meta> = { x: TimeType; y: number; meta: Meta|undefined}
export function plotDataFromTimeline<TimeType, Meta>(
    name: string, buckets: BucketName[], timeline: TimelineOf<BucketBalance, TimeType, Meta>, 
    color: ColorArray, valueOverrides: PartialDeep<ChartDataset<"line", TimelinePoint<TimeType, Meta>[]>> = {}, 
    func: (value:number) => number = x=>x
): ChartDataset<"line", TimelinePoint<TimeType, Meta>[]> {
    color[3] = color[3] || 1;

    const lastEntry = timeline[timeline.length-1];
    // console.log("Last entry for", buckets, lastEntry)
    const points: TimelinePoint<TimeType, Meta>[] = timeline.map(
        entry => ({x: entry.start, y: func(GetGroupBalance(entry.value, buckets)), meta: entry.metadata})
    ).filter(
        (p, i, a) => i==0 || i==a.length-1 || p.y != (a[i-1].y)
    ).concat(
        lastEntry == undefined ? [] : [{x: lastEntry.end, y: func(GetGroupBalance(lastEntry.value, buckets)), meta: lastEntry.metadata}]
    )

    return Object.assign(valueOverrides, {
        label: name,
        // TODO: Filter before creating points and add point at last time.
        data: timeline.map(entry => ({x: entry.start, y: func(GetGroupBalance(entry.value, buckets)), meta: entry.metadata})).filter((p, i, a) => i==0 || i==a.length-1 || p.y != (a[i-1].y)),
        stepped: "before",
        borderColor: `rgb(${color.join(', ')})`,
        backgroundColor:  `rgb(${color.slice(0,3).join(', ')}, ${0.35*color[3]})`,
    }) as ChartDataset<"line", TimelinePoint<TimeType, Meta>[]> // TODO: Don't specify this
}

export function purchaseTooltipText(items: TooltipItem<"line">[], buckets: BucketName[]): string[] {
    const transactions = items.map(x => (x.raw as TimelinePoint<Date, ExternalTransaction[]>).meta).flat(1)
    // console.log("WantsSpendTrackingGraph::purchaseTooltipText()", transactions)
    const summaries = transactions.filter(t => t!=undefined).map(t => t ? t.summarize(p => buckets.includes(p.bucket)) : "");
    // console.log("WantsSpendTrackingGraph::purchaseTooltipText()", summaries);
    return summaries;
}

export const WantsSpendTrackingGraph: React.FC<WantsSpendingProps> = (props) => {
    const defaultOptions = {
        plugins: {
            // title: {display: true, text: props.bucket}, 
            legend: {display: false},
            tooltip: {
                callbacks: {
                    title: (items: TooltipItem<"line">[]) => {
                        // console.log("TooltipItems", items); 
                        const point = items[0].raw as TimelinePoint<Date, ExternalTransaction[]>;
                        return point.x.toDateString();
                    },
                    // label: (item: TooltipItem<"line">) => {
                    //     console.log("TooltipItem", item); 
                    //     return "Label";
                    // },
                    footer: (items: TooltipItem<"line">[]) => purchaseTooltipText(items, props.buckets).join('\n')
                }
            }
        },
        aspectRatio: 1,
        responsive:true, 
        scales: {x: {type: "time", time: {unit: "day"}}}
    }

    // const shouldLog = props.buckets[0] == "Garden";
    // const spendingTimeline = props.bucketSpendingTimeline.filter((t,i,a) => { 
    //     const isInBuckets = t.metadata != undefined && props.buckets.some(b => t.metadata?.some(transaction=>transaction.buckets.has(b)));
    //     if(shouldLog) console.log("Filtering Transaction", i, t.metadata, t.metadata?.map(transaction=> transaction.summarize(()=>false)), isInBuckets)
    //     return i==0 || i==a.length-1 || isInBuckets;
    // });
    // if(shouldLog) console.log(props.buckets, props.bucketSpendingTimeline.map(e=>e.metadata), spendingTimeline.map(e=>e.metadata))

    return <LineChart 
        data={{
            datasets: [
                plotDataFromTimeline(
                    "Spending", props.buckets, props.bucketSpendingTimeline, 
                    [230, 250, 10], 
                    {fill: false}, x=>-x
                ),
                plotDataFromTimeline(
                    "Maintain Balance Budget", props.buckets, props.bucketBudgetTimeline, [60, 190, 60], 
                    {fill: {value: -Infinity}}
                ),
                plotDataFromTimeline(
                    "Actual Budget", props.buckets, 
                    props.bucketBudgetTimeline, [220, 60, 60], 
                    {fill: {value:Infinity}}, x=>x+GetGroupBalance(props.startingBalances, props.buckets)
                ), 
            ]
        }}

        options={Object.assign(defaultOptions, props.options || {})}
    />
}