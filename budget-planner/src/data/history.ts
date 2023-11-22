import { PartialDeep } from "type-fest";
import _ from 'lodash'
import { JsSort } from "@/ts-utils/sort-utils";
// export type DeepPartial<T> = T extends object ? {
//     [P in keyof T]?: DeepPartial<T[P]>;
// } : T;

// type DeepPartial<T> = T extends any[] ? T : { [P in keyof T]?: DeepPartial<T[P]> }

export type ChangeOf<T> = PartialDeep<T>

type ChangeArray<T, TimeType> = Array<{time: TimeType, prevValuesOfChangedElements: ChangeOf<T>}>

export interface HistoryOf<T, TimeType = number> {
    currentValue: T
    changes: ChangeArray<T, TimeType>
    initialTime: TimeType
    currentTime: TimeType
}


function SetWithPartial<T extends object>(original: T, change: ChangeOf<T>): ChangeOf<T> {
    let retVal: any = {};
    
    Object.entries(original).forEach(([key, val]: [string, any]) => {
        let localChange: any = (change as Record<string, any>)[key]
        if(localChange != undefined) {
            if(typeof(localChange) == 'object'){
                retVal[key as keyof T] = SetWithPartial<typeof val>(val, localChange) as any
            } else {
                retVal[key as keyof T] = original[key as keyof T];
                original[key as keyof T] = localChange;
            }
        }
    })

    return retVal;
}

export abstract class HistoryOf<T extends object, TimeType> {

    currentValue: T
    changes: ChangeArray<T, TimeType>
    initialTime: TimeType
    currentTime: TimeType

    constructor(curentValue: T, currentTime: TimeType, changes: ChangeArray<T, TimeType> = [])
    {
        this.initialTime = currentTime
        this.currentTime = currentTime
        this.currentValue = _.cloneDeep(curentValue);
        this.changes = _.cloneDeep(changes);

    }

    abstract getValue(time: TimeType, afterTime?: boolean) : T | undefined
    abstract setValue(object: ChangeOf<T>, time: TimeType) : ChangeOf<T> // The previous values of changed data
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

        let retVal = _.cloneDeep(this.currentValue);

        // console.log("Starting from:", this.currentValue)

        this.changes.sort((a, b) => this.laterTimeFirstSort(a.time, b.time))
        let i = 0;
        while(i < this.changes.length && (afterTime ? JsSort.ResultEquals(this.laterTimeFirstSort(this.changes[i].time, time), JsSort.ResultType.LeftArgFirst) : !JsSort.ResultEquals(this.laterTimeFirstSort(this.changes[i].time, time), JsSort.ResultType.RightArgFirst))){
            //TODO: save value from this:
            SetWithPartial<T>(retVal, this.changes[i].prevValuesOfChangedElements)
            // console.log("Changing:", this.changes[i], "to get", retVal)
            i++;
        }

        return retVal;
    }

    setValue(object: ChangeOf<T>, currentTime: TimeType): ChangeOf<T> {
        if (! JsSort.ResultEquals(this.laterTimeFirstSort(currentTime, this.currentTime), JsSort.ResultType.LeftArgFirst)) {
            return {} as ChangeOf<T>; // TODO: Why does this fail the type check?
        }

        let prevValOfChanges = SetWithPartial<T>(this.currentValue, object);
        this.changes.push({time: currentTime, prevValuesOfChangedElements: prevValOfChanges})

        this.currentTime = currentTime;

        return prevValOfChanges;
    }

    getValues(startTime: TimeType, endTime: TimeType) : Array<{start:TimeType, end: TimeType, value: T}> {
        let values: Array<{start:TimeType, end: TimeType, value: T}> = []

        if(JsSort.ResultEquals(this.laterTimeFirstSort(this.initialTime, endTime), JsSort.ResultType.LeftArgFirst)) {
            return values;
        }

        let currVal = _.cloneDeep(this.currentValue)
        let currValEndTime = this.currentTime;

        this.changes.sort((a, b) => this.laterTimeFirstSort(a.time, b.time))
        let i = 0;
        while(i < this.changes.length && !JsSort.ResultEquals(this.laterTimeFirstSort(this.changes[i].time, startTime), JsSort.ResultType.RightArgFirst)){
            if(this.changes[i].time <= endTime) {
                values.push({start: this.changes[i].time, end: currValEndTime, value: _.cloneDeep(currVal)})
            }
            
            //TODO: save value from this:
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