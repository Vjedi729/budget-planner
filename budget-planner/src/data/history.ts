import { PartialDeep } from "type-fest";
import { cloneDeep } from 'lodash'
import { JsSort } from "@/ts-utils/sort-utils";

export type ChangeOf<T> = PartialDeep<T>

type ChangeArray<T, TimeType> = Array<{time: TimeType, prevValuesOfChangedElements: ChangeOf<T>}>

export interface HistoryOf<T, TimeType = number> {
    currentValue: T
    changes: ChangeArray<T, TimeType>
    initialTime: TimeType
    currentTime: TimeType
}


function SetWithPartial<T extends Record<string, any>>(original: Record<string, any>, change: ChangeOf<T>): ChangeOf<T> {
    let retVal: any = {};

    Object.entries(change).forEach(([changeKey, changeVal]) => {
        let origVal = original[changeKey];
        if(typeof origVal == 'object') {
            retVal[changeKey] = SetWithPartial<typeof origVal>(origVal, changeVal)
        } else {
            retVal[changeKey] = origVal;
            original[changeKey] = changeVal;
        }
    })

    return retVal;
}

export type TimelineOf<T extends object, TimeType> = Array<{start:TimeType, end: TimeType, value: T}>

export abstract class HistoryOf<T extends object, TimeType> {

    currentValue: T
    changes: ChangeArray<T, TimeType>
    initialTime: TimeType
    currentTime: TimeType

    constructor(curentValue: T, currentTime: TimeType, changes: ChangeArray<T, TimeType> = [])
    {
        this.initialTime = currentTime
        this.currentTime = currentTime
        this.currentValue = cloneDeep(curentValue);
        this.changes = cloneDeep(changes);

    }

    abstract getValue(time: TimeType, afterTime?: boolean) : T | undefined
    abstract setValue(object: ChangeOf<T>, time: TimeType) : ChangeOf<T> | undefined // The previous values of changed data OR undefined if the value could not be set
    abstract reportNoChange(time:TimeType): void // If something happened

    abstract getValues(startTime: TimeType, endTime: TimeType) : Array<{start:TimeType, end: TimeType, value: T}>
}
export class BasicHistoryOf<T extends object, TimeType> extends HistoryOf<T, TimeType> {

    laterTimeFirstSort: JsSort.FunctionType<TimeType>;

    constructor(laterTimeFirstSort: JsSort.FunctionType<TimeType>, currentValue:T, currentTime: TimeType, changes: ChangeArray<T, TimeType> = []) {
        super(currentValue, currentTime, changes);
        this.laterTimeFirstSort = laterTimeFirstSort;

        changes.forEach((change) => this.currentTime = this.laterTime(change.time, this.currentTime))
    }

    private laterTime(a: TimeType, b: TimeType): TimeType {
        return JsSort.ResultEquals(this.laterTimeFirstSort(a, b), JsSort.ResultType.LeftArgFirst) ? a : b;
    }

    private ealierTime(a: TimeType, b: TimeType): TimeType {
        return JsSort.ResultEquals(this.laterTimeFirstSort(a, b), JsSort.ResultType.LeftArgFirst) ? b : a;
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

    setValue(object: ChangeOf<T>, currentTime: TimeType): ChangeOf<T> | undefined {
        if (JsSort.ResultEquals(this.laterTimeFirstSort(currentTime, this.currentTime), JsSort.ResultType.RightArgFirst)) {
            console.warn("Failed to set value:", object, "at time", currentTime, "-> Cannot set values before or at the internal current time of", this.currentTime);
            return undefined;
        }

        let prevValOfChanges = SetWithPartial<T>(this.currentValue, object);
        // console.log("Change:", currentTime, object, "Current Values:", this.currentTime, this.currentValue, "Undo Change:", prevValOfChanges);
        this.changes.push({time: currentTime, prevValuesOfChangedElements: prevValOfChanges})

        this.currentTime = currentTime;

        return prevValOfChanges;
    }

    getValues(startTime: TimeType, endTime: TimeType) : TimelineOf<T, TimeType> {
        let values: Array<{start:TimeType, end: TimeType, value: T}> = []

        if(JsSort.ResultEquals(this.laterTimeFirstSort(this.initialTime, endTime), JsSort.ResultType.LeftArgFirst)) {
            return values;
        }

        let currVal = cloneDeep(this.currentValue)
        let currValEndTime = this.currentTime;

        this.changes.sort((a, b) => this.laterTimeFirstSort(a.time, b.time))
        let i = 0;
        while(i < this.changes.length && !JsSort.ResultEquals(this.laterTimeFirstSort(this.changes[i].time, startTime), JsSort.ResultType.RightArgFirst)){
            if(this.changes[i].time <= endTime) {
                values.push({start: this.changes[i].time, end: currValEndTime, value: cloneDeep(currVal)})
            }
            
            SetWithPartial<T>(currVal, this.changes[i].prevValuesOfChangedElements)
            
            currValEndTime = this.changes[i].time
            i++;
        }

        values.push({start: this.laterTime(this.initialTime, startTime), end: currValEndTime, value: currVal })

        return values;
    }
}

// Note from Vishal
/*
Budget data should be stored as a history to allow changes
Recurring transactions (of any type) should be stored as histories
Amount of money in each bucket is a history (with bucket transactions being the changes)
Amount of money in each account is a history (with internal and external transactions being changes)
*/