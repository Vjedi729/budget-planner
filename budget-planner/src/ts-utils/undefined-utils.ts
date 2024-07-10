export const isDefined = (x: any) => x!==undefined

 // ! Sad that Array.filter doesn't type detect correctly
export function filterDefined<T>(a: Array<T|undefined>): Array<T> {
    return a.filter(isDefined) as Array<T>
}