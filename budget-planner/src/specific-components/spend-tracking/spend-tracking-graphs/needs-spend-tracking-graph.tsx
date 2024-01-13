import { BucketBalance } from "@/data/testData";
import { HistoryOf, TimelineOf } from "@/data/history";
import { BucketName } from "@/data/enums";

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
    // * Options
    ChartOptions
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
import { plotDataFromTimeline } from "./wants-spend-tracking-graph";

export interface NeedsSpendingProps<TimeType = Date> {
    startingBalances: BucketBalance
    bucketSpendingHistory: HistoryOf<BucketBalance, TimeType>
    pastSpendingOffset: (orig: TimeType, invert?: boolean) => TimeType
    pastSpendingString?: (pastI: number) => string
    pastSpendingTransparencyMultiplier?: number
    bucketSpendingPrediction?: TimelineOf<BucketBalance, TimeType>
    bucket: BucketName,
    startTime: TimeType,
    endTime: TimeType,
    chartOptions?: ChartOptions<"line">
}

export const NeedsSpendTrackingGraph: React.FC<NeedsSpendingProps> = (props) => {
    const defaultOptions = {
        plugins: {
            legend: {display: false},
        },
        aspectRatio: 1,
        responsive:true, 
        scales: {x: {type: "time", time: {unit: "day"}}}
    }

    
    let datasets = [                
        plotDataFromTimeline(
            "Actual", props.bucket, props.bucketSpendingHistory.getValues(props.startTime, props.endTime),
            [230, 250, 10], {}, x => -x
        ),
        plotDataFromTimeline(
            "Predicted", props.bucket, props.bucketSpendingPrediction || [],
            [30, 200, 220]
            )
        ]
        
    const pastSpendingString = props.pastSpendingString || ((i:number) => `${i}`)
    let pastStartTime = props.startTime;
    let pastEndTime = props.endTime;
    let pastTransparencyMultiplier = 1;
    let pastI = 0;
    while(true) {
        pastStartTime = props.pastSpendingOffset(pastStartTime)
        pastEndTime = props.pastSpendingOffset(pastEndTime)
        const pastSpendingTimeline = props.bucketSpendingHistory.getValues(pastStartTime, pastEndTime).map(x => {
            let start = x.start;
            let end = x.end;
            for(let i = 0; i <= pastI; i++) {
                start = props.pastSpendingOffset(start, true)
                end = props.pastSpendingOffset(end, true)
            }

            return {
                start: start, 
                end: end, 
                value: x.value
            }
        })
        if (pastSpendingTimeline.length == 0) break;
        let pastSpendingTimelineStartValues = props.bucketSpendingHistory.getValue(pastStartTime, false) || {};

        datasets.push(plotDataFromTimeline(
            `Historical (${pastSpendingString(pastI+1)})`, props.bucket, pastSpendingTimeline,
            [170, 30, 220, pastTransparencyMultiplier], {}, x => -(x- (pastSpendingTimelineStartValues[props.bucket] || 0))
        ))

        pastTransparencyMultiplier *= props.pastSpendingTransparencyMultiplier == undefined ? 0.6 : props.pastSpendingTransparencyMultiplier
        pastI += 1;
    }

    return <LineChart
        data={{
            datasets: datasets
        }}

        options={Object.assign(defaultOptions, props.chartOptions || {})}

    />
}