import { PartialDeep } from "type-fest";
import { cloneDeep } from 'lodash'
import { JsSort } from "@/ts-utils/sort-utils";

export type ChangeOf<T> = PartialDeep<T>

type ChangeArray<T, TimeType, Meta = any> = Array<{time: TimeType, prevValuesOfChangedElements: ChangeOf<T>, metadata?: Meta}>

function SetWithPartial<T extends Record<string, any>>(original: Record<string, any>, change: ChangeOf<T>, defaultInitialValue: any = undefined): ChangeOf<T> {
    let retVal: any = {};

    Object.entries(change).forEach(([changeKey, changeVal]) => {
        let origVal = original[changeKey];
        if(changeVal == origVal) return;
        if(typeof origVal == 'object') {
            retVal[changeKey] = SetWithPartial<typeof origVal>(origVal, changeVal)
        } else {
            retVal[changeKey] = (origVal != undefined) ? origVal : defaultInitialValue;
            original[changeKey] = changeVal;
        }
    })

    return retVal;
}

export interface TimelineEntry<T, TimeType, Meta=any> {start:TimeType, end: TimeType, value: T, metadata?:Meta}
export type TimelineOf<T, TimeType> = Array<TimelineEntry<T, TimeType>>
export function TimelineSortByTime<TimeType>(sortFn: JsSort.FunctionType<TimeType>): JsSort.FunctionType<TimelineEntry<any, TimeType>> {
    return (a, b) => sortFn(a.start, b.start) || sortFn(a.end, b.end)
}
export abstract class HistoryOf<T, TimeType> {

    currentValue: T
    initialTime: TimeType
    currentTime: TimeType

    laterTimeFirstSort: JsSort.FunctionType<TimeType>;

    constructor(laterTimeFirstSort: JsSort.FunctionType<TimeType>, currentValue: T, currentTime: TimeType)
    {
        this.laterTimeFirstSort = laterTimeFirstSort;

        this.initialTime = currentTime
        this.currentTime = currentTime
        this.currentValue = cloneDeep(currentValue);
    }

    abstract getValue(time: TimeType, afterTime?: boolean) : T | undefined
    abstract setValue(object: ChangeOf<T>, time: TimeType, endTime?: TimeType, meta?: any) : ChangeOf<T> | undefined // The previous values of changed data OR undefined if the value could not be set
    abstract reportNoChange(time:TimeType): void

    abstract getValues(startTime: TimeType, endTime: TimeType) : TimelineOf<T, TimeType>
    abstract getFullTimeline(): TimelineOf<T, TimeType> // The full timeline


    // * Utility Functions for Histories
    protected laterTime(a: TimeType, b: TimeType): TimeType {
        return JsSort.ResultEquals(this.laterTimeFirstSort(a, b), JsSort.ResultType.LeftArgFirst) ? a : b;
    }

    protected earlierTime(a: TimeType, b: TimeType): TimeType {
        return JsSort.ResultEquals(this.laterTimeFirstSort(a, b), JsSort.ResultType.LeftArgFirst) ? b : a;
    }

    isZeroTimeEntry(timelineEntry: TimelineEntry<T, TimeType>, keepEntriesAtTimes: TimeType[] = []): boolean {
        return (
            (! JsSort.IsKeepOriginalOrder(this.laterTimeFirstSort, timelineEntry.start, timelineEntry.end)) || 
            keepEntriesAtTimes.some(keepTime => JsSort.IsKeepOriginalOrder(this.laterTimeFirstSort, timelineEntry.start, keepTime))
        )
    }

    filterZeroTimeEntries(timeline: TimelineOf<T, TimeType>, keepEntriesAtTimes: TimeType[] = []): TimelineOf<T, TimeType> {
        return timeline.filter(x => this.isZeroTimeEntry(x, keepEntriesAtTimes))
    }
}
export class ChangeHistoryOf<T extends object, TimeType> extends HistoryOf<T, TimeType> {
    protected changes: ChangeArray<T, TimeType>
    defaultInitialValue: any;

    constructor(laterTimeFirstSort: JsSort.FunctionType<TimeType>, currentValue:T, currentTime: TimeType, defaultInitialValue: any = undefined, changes: ChangeArray<T, TimeType> = []) {
        super(laterTimeFirstSort, currentValue, currentTime);
        this.changes = cloneDeep(changes);
        this.defaultInitialValue = defaultInitialValue;

        changes.forEach((change) => this.currentTime = this.laterTime(change.time, this.currentTime))
    }

    reportNoChange(time: TimeType) {
        this.currentTime = this.laterTime(this.currentTime, time)
    }

    getValue(time: TimeType, afterTime: boolean = true): T | undefined {
        if(JsSort.ResultEquals(this.laterTimeFirstSort(this.initialTime, time), JsSort.ResultType.LeftArgFirst))
        {
            // Too early, no data is known:
            return undefined; 
        }
        if(JsSort.ResultEquals(this.laterTimeFirstSort(this.currentTime, time), JsSort.ResultType.RightArgFirst))
        {
            // Too late, can't tell the future:
            return undefined;
        }

        let retVal = cloneDeep(this.currentValue);

        // console.log("Starting from:", this.currentValue)

        this.changes.sort((a, b) => this.laterTimeFirstSort(a.time, b.time))
        let i = 0;
        while(i < this.changes.length && (afterTime ? JsSort.ResultEquals(this.laterTimeFirstSort(this.changes[i].time, time), JsSort.ResultType.LeftArgFirst) : !JsSort.ResultEquals(this.laterTimeFirstSort(this.changes[i].time, time), JsSort.ResultType.RightArgFirst))){
            SetWithPartial<T>(retVal, this.changes[i].prevValuesOfChangedElements)
            i++;
        }

        return retVal;
    }

    setValue(object: ChangeOf<T>, currentTime: TimeType, endTime?: TimeType, meta?:any): ChangeOf<T> | undefined {
        if (JsSort.ResultEquals(this.laterTimeFirstSort(currentTime, this.currentTime), JsSort.ResultType.RightArgFirst)) {
            console.warn("Failed to set value:", object, "at time", currentTime, "-> Cannot set values before or at the internal current time of", this.currentTime);
            return undefined;
        }

        let prevValOfChanges = SetWithPartial<T>(this.currentValue, object, this.defaultInitialValue);
        // console.log("Change:", currentTime, object, "Current Values:", this.currentTime, this.currentValue, "Undo Change:", prevValOfChanges);
        this.changes.push({time: currentTime, prevValuesOfChangedElements: prevValOfChanges})

        this.currentTime = currentTime;
        if(endTime != undefined) this.reportNoChange(endTime);

        return prevValOfChanges;
    }

    getValues(startTime: TimeType, endTime: TimeType) : TimelineOf<T, TimeType> { // * Includes at end time result
        let values: Array<{start:TimeType, end: TimeType, value: T}> = []

        if(JsSort.ResultEquals(this.laterTimeFirstSort(this.initialTime, endTime), JsSort.ResultType.LeftArgFirst)) {
            return values;
        }

        let currVal = cloneDeep(this.currentValue)
        let currValEndTime = this.currentTime;

        this.changes.sort((a, b) => this.laterTimeFirstSort(a.time, b.time))
        let i = 0;
        while(i < this.changes.length && !JsSort.ResultEquals(this.laterTimeFirstSort(this.changes[i].time, startTime), JsSort.ResultType.RightArgFirst)){
            let currChange = this.changes[i]
            if(
                JsSort.ResultEquals(this.laterTimeFirstSort(currChange.time, endTime), JsSort.ResultType.RightArgFirst) && 
                (
                    ! JsSort.ResultEquals(this.laterTimeFirstSort(endTime, currValEndTime), JsSort.ResultType.RightArgFirst) ||
                    JsSort.ResultEquals(this.laterTimeFirstSort(currValEndTime, this.initialTime), JsSort.ResultType.KeepOriginalOrder) ||
                    ! JsSort.ResultEquals(this.laterTimeFirstSort(currChange.time, currValEndTime), JsSort.ResultType.KeepOriginalOrder)
                )
            ) {
                values.push({start: this.changes[i].time, end: currValEndTime, value: cloneDeep(currVal)})
            }
            
            SetWithPartial<T>(currVal, this.changes[i].prevValuesOfChangedElements, this.defaultInitialValue)
            
            currValEndTime = this.changes[i].time
            i++;
        }

        values.push({start: this.laterTime(this.initialTime, startTime), end: currValEndTime, value: currVal })

        return values;
    }

    getFullTimeline(): TimelineOf<T, TimeType> {
        return this.getValues(this.initialTime, this.currentTime)
    }
}

export class TimelineHistoryOf<T extends Record<string, any>, TimeType> extends HistoryOf<T, TimeType> {
    
    protected timeline: TimelineOf<T, TimeType>
    defaultInitialValue: any;
    constructor(laterTimeFirstSort: JsSort.FunctionType<TimeType>, currentValue: T, currentTime: TimeType, defaultInitialValue: any = undefined) {
        super(laterTimeFirstSort, currentValue, currentTime)
        this.defaultInitialValue = defaultInitialValue;
        this.timeline = [{start: currentTime, end: currentTime, value: currentValue}]
    }

    getFullTimeline(): TimelineOf<T, TimeType> {
        return this.timeline;
    }

    getValue(time: TimeType, afterTime: boolean = true): T | undefined {
        // Shortcut for current value
        if(afterTime && JsSort.IsKeepOriginalOrder(this.laterTimeFirstSort, time, this.currentTime)) {
            return this.currentValue;
        }

        let entries = this.getValuesUnmodified(time, time);
        // console.log("Timeline History entries for", afterTime ? "after" : "before", time, entries, this)
        if(entries.length == 0) return undefined;
        return afterTime ? entries[entries.length-1].value : entries[0].value;
    }

    // * Start and end entries contain the full extent of their time, causing the timeline to extend beyond the specified start and end times
    // ? Change return type to separate entries containing start and end times?
    getValuesUnmodified(start: TimeType, end: TimeType): TimelineOf<T, TimeType> {
        let [endTime, startTime] = [start, end].sort(this.laterTimeFirstSort)

        return this.filterZeroTimeEntries(
            this.timeline.filter(
                x => (
                    // * Entry is between start and end
                    ( JsSort.IsLeftArgFirst(this.laterTimeFirstSort, x.end, startTime) && JsSort.IsRightArgFirst(this.laterTimeFirstSort, x.start, endTime) ) ||
                    // * Entry contains start time
                    ( JsSort.IsBetween(this.laterTimeFirstSort, startTime, x.end, x.start, true) ) ||
                    // * Entry contains end time
                    ( JsSort.IsBetween(this.laterTimeFirstSort, endTime, x.end, x.start, true) ) 
                )
            ), 
            [ startTime, this.initialTime, endTime, this.currentTime ] // Keep entries that would be the beginning or end of the timeline, even if they're zero length
        )
    }

    getValues(startTime: TimeType, endTime: TimeType): TimelineOf<T, TimeType> {
        return this.getValuesUnmodified(startTime, endTime).map(
            // Clip first and last entry
            x => { x.start = this.laterTime(x.start, startTime); x.end = this.earlierTime(x.end, endTime); return x; }
        )
    }

    reportNoChange(time: TimeType): void {
        let currentEntry = this.timeline[this.timeline.length-1]
        currentEntry.end = time;
        this.currentTime = time;
    }

    setValue(object: PartialDeep<T, {}>, time: TimeType, endTime?: TimeType | undefined, meta?:any): PartialDeep<T, {}> | undefined {
        if (JsSort.ResultEquals(this.laterTimeFirstSort(time, this.currentTime), JsSort.ResultType.RightArgFirst)) {
            console.warn("Failed to set value:", object, "at time", time, "-> Cannot set values before or at the internal current time of", this.currentTime);
            return undefined;
        }
        
        this.reportNoChange(time);

        let retVal = SetWithPartial(this.currentValue, object);
        this.currentTime = endTime || time;
        this.timeline.push({
            start: cloneDeep(time), end: cloneDeep(this.currentTime), 
            value: cloneDeep(this.currentValue), 
            metadata: cloneDeep(meta)
        });

        return retVal;
    }
}

export class BasicHistoryOf<T extends object, TimeType> extends TimelineHistoryOf<T, TimeType>{};

// Note from Vishal
/*
Budget data should be stored as a history to allow changes
Recurring transactions (of any type) should be stored as histories
Amount of money in each bucket is a history (with bucket transactions being the changes)
Amount of money in each account is a history (with internal and external transactions being changes)
*/