import { BucketBalance } from "@/data/testData";
import { TimelineOf } from "@/data/history";
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

export interface WantsSpendingProps<TimeType = Date> {
    // bucketBalanceHistory: HistoryOf<BucketBalance, TimeType>
    startingBalances: BucketBalance
    // bucketBalanceTimeline: TimelineOf<BucketBalance, TimeType> // For Testing
    bucketBudgetTimeline: TimelineOf<BucketBalance, TimeType>
    bucketSpendingTimeline: TimelineOf<BucketBalance, TimeType>
    bucket: BucketName,
    startTime: TimeType,
    endTime: TimeType,
    options?: ChartOptions<"line">
}

type ColorArray = [number, number, number] | [number, number, number, number | undefined]

export function plotDataFromTimeline<TimeType>(
    name: string, bucket: BucketName, timeline: TimelineOf<BucketBalance, TimeType>, 
    color: ColorArray, valueOverrides: PartialDeep<ChartDataset<"line", { x: TimeType; y: number; }[]>> = {}, 
    func: (value:number) => number = x=>x
): ChartDataset<"line", { x: TimeType; y: number; }[]> {
    color[3] = color[3] || 1;

    return Object.assign(valueOverrides, {
        label: name,
        data: timeline.map(entry => ({x: entry.start, y: func(entry.value[bucket] || 0)})),
        stepped: "before",
        borderColor: `rgb(${color.join(', ')})`,
        backgroundColor:  `rgb(${color.slice(0,3).join(', ')}, ${0.35*color[3]})`,
    }) as ChartDataset<"line", {x: TimeType; y: number; }[]> // TODO: Don't specify this
}

export const WantsSpendTrackingGraph: React.FC<WantsSpendingProps> = (props) => {
    const defaultOptions = {
        plugins: {
            // title: {display: true, text: props.bucket}, 
            legend: {display: false},
        },
        aspectRatio: 1,
        responsive:true, 
        scales: {x: {type: "time", time: {unit: "day"}}}
    }

    return <LineChart 
        data={{
            datasets: [
                plotDataFromTimeline(
                    "Spending", props.bucket, props.bucketSpendingTimeline, 
                    [230, 250, 10], 
                    {fill: false}, x=>-x
                ),
                plotDataFromTimeline(
                    "Maintain Balance Budget", props.bucket, props.bucketBudgetTimeline, [60, 190, 60], {fill: {value: -Infinity}}
                ),
                plotDataFromTimeline(
                    "Actual Budget", props.bucket, 
                    props.bucketBudgetTimeline, [220, 60, 60], 
                    {fill: {value:Infinity}}, x=>x+(props.startingBalances[props.bucket]||0)
                ), 
            ]
        }}

        options={Object.assign(defaultOptions, props.options || {})}
    />
}