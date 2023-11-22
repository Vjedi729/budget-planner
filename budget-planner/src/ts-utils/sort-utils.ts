
export namespace JsSort {

    export enum ResultType { LeftArgFirst = -1, RightArgFirst = 1, KeepOriginalOrder = 0}
    export type FunctionType<ValueType> = (a: ValueType, b: ValueType)=>number|ResultType
    
    export function ResultEquals(a: ResultType | number, b: ResultType | number): boolean { return a == b || a*b>0}
    
}