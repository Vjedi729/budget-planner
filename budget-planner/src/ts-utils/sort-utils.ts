
export namespace JsSort {

    export enum ResultType { LeftArgFirst = -1, RightArgFirst = 1, KeepOriginalOrder = 0}
    export type FunctionType<ValueType> = (a: ValueType, b: ValueType)=>number|ResultType
    
    export function ResultEquals(a: ResultType | number, b: ResultType | number): boolean { return a == b || a*b>0}
    
    export function IsResult<ValueType>(sortFunc: FunctionType<ValueType>, a: ValueType, b: ValueType, result: ResultType): boolean {
        return ResultEquals(sortFunc(a, b), result);
    }
    
    export function IsLeftArgFirst<ValueType>(sortFunc: FunctionType<ValueType>, a: ValueType, b: ValueType): boolean {
        return IsResult(sortFunc, a, b, ResultType.LeftArgFirst)
    }

    export function IsRightArgFirst<ValueType>(sortFunc: FunctionType<ValueType>, a: ValueType, b: ValueType): boolean {
        return IsResult(sortFunc, a, b, ResultType.RightArgFirst)
    }

    export function IsKeepOriginalOrder<ValueType>(sortFunc: FunctionType<ValueType>, a: ValueType, b: ValueType): boolean {
        return IsResult(sortFunc, a, b, ResultType.KeepOriginalOrder)
    }

    export function IsBetween<ValueType>(sortFunc: FunctionType<ValueType>, x: ValueType, first: ValueType, last: ValueType, inclusive: boolean = false): boolean {
        [first, last] = [first, last].sort(sortFunc);
        
        return inclusive ? (
            !IsRightArgFirst(sortFunc, first, x) && !IsRightArgFirst(sortFunc, x, last)
        ) : (
            IsLeftArgFirst(sortFunc, first, x) && IsLeftArgFirst(sortFunc, x, last)
        ); 
    }

    // TODO: Create this?
    // export class Sorter {
        
    // }
}