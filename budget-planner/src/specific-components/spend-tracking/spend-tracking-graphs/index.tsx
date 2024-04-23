'use client'
import React, { useState } from "react";

import { InnerSpendTrackingComponentProps } from "..";
import { DateMonthOffset, SpendTrackingGraphColumns } from "./graph-columns";

const dateValue = (date: Date) => date.toLocaleDateString('en-CA');
const dateOnChange = (setDate:(date:Date)=>void) => ((target: React.ChangeEvent<HTMLInputElement>) => {
    if(target.currentTarget.valueAsDate) setDate(target.currentTarget.valueAsDate)
})

function lockedOnChange<T, IntervalType>(
    getValue: (t: React.ChangeEvent<HTMLInputElement>) => T | null,
    prevValue: T,
    setThis: (a:T)=>void,
    lockedDistanceValue: T, 
    setLockedDistanceValue: (b:T)=>void,
    getInterval: (a:T, b:T) => IntervalType,
    addInterval: (a:T, interval: IntervalType) => T,
    isLocked: boolean = true
) {
    return (target: React.ChangeEvent<HTMLInputElement> ) => {
        let value = getValue(target);
        if(value) {
            setThis(value);
            if(isLocked) {
                console.log("New A", value);
                let diff = getInterval(prevValue, lockedDistanceValue);
                console.log("Diff", diff)
                let newLockedVal = addInterval(value, diff);
                console.log("New B", newLockedVal)
                setLockedDistanceValue(newLockedVal)
            }
        }
    }
}

function LockedDateOnChange(prevValue: Date, setThis: (a:Date)=>void, lockedDistanceValue: Date, setLockedDistanceValue: (b:Date)=>void, isLocked: boolean = true) {
    return lockedOnChange(
        t => t.currentTarget.valueAsDate,
        prevValue,
        setThis, lockedDistanceValue, setLockedDistanceValue,
        (a, b) => b.getTime() - a.getTime(),
        (a, interval) => {let x = new Date(a); x.setMilliseconds(x.getMilliseconds() + interval); return x;},
        isLocked
    )
}

export const SpendTrackingGraphs: React.FC<InnerSpendTrackingComponentProps> = (props) => {
    
    // * Allow user-selected boundaries
    let [endTime, setEndTime] = useState(new Date(Date.now()));
    let [startTime, setStartTime] = useState(DateMonthOffset(1)(endTime));
    let [lockedTimeInterval, setLockedTimeInterval] = useState(false);

    return (
        <div>
            <h1 style={{textAlign: 'center', marginTop: '1em'}}>Spend Tracking Graph</h1>

            <form>
                <span>Filter by: </span>
                <input type="date" value={dateValue(startTime)} onChange={LockedDateOnChange(startTime, setStartTime, endTime, setEndTime, lockedTimeInterval)}/>
                <span> - </span> 
                <input type="date" value={dateValue(endTime)} onChange={LockedDateOnChange(endTime, setEndTime, startTime, setStartTime, lockedTimeInterval)}/>
                <span> Lock Time Length? </span>
                <input type="checkbox" checked={lockedTimeInterval} onChange={t => setLockedTimeInterval(t.currentTarget.checked)}/>
            </form>

            <SpendTrackingGraphColumns props={props} startTime={startTime} endTime={endTime}/>
        </div>
    )
}