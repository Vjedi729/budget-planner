function negateIf(num: number, condition: boolean) : number {
    return (condition?1:-1)*num
}

export enum DateTimeComponent { Year, Month, Day, Hour, Minute, Second, Millisecond }

export function DateDaysBeforeOffsetFunctionFactory(dayOffset: number) {
    return (oldDate: Date, invert: boolean = false) => new Date(
        oldDate.getFullYear(),
        oldDate.getMonth(),
        oldDate.getDate() + negateIf(dayOffset, invert),
        oldDate.getHours(), oldDate.getMinutes(), oldDate.getSeconds(), oldDate.getMilliseconds()
    );
}

export function DateMonthBeforeOffsetFunctionFactory(monthOffset: number) {
    return (oldDate: Date, invert: boolean = false) => new Date(
        oldDate.getFullYear(),
        oldDate.getMonth() + negateIf(monthOffset, invert),
        oldDate.getDate(),
        oldDate.getHours(), oldDate.getMinutes(), oldDate.getSeconds(), oldDate.getMilliseconds()
    );
}

export function DateYearBeforeOffsetFunctionFactory(yearOffset: number) {
    return (oldDate: Date, invert: boolean = false) => new Date(
        oldDate.getFullYear() + negateIf(yearOffset, invert),
        oldDate.getMonth(),
        oldDate.getDate(),
        oldDate.getHours(), oldDate.getMinutes(), oldDate.getSeconds(), oldDate.getMilliseconds()
    );
}