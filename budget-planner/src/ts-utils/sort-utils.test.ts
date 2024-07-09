import "@testing-library/jest-dom"
import {JsSort} from "./sort-utils"

describe("JsSort.IsBetween()", () => {
    const leastToGreatestNumberSort = (a: number, b:number) => a-b;

    interface IsBetweenArgs<T>{x: T, first: T, last: T, inclusive?: boolean}
    function Args<T>(x: T, first: T, last: T, inclusive?: boolean): IsBetweenArgs<T> {return {x: x, first: first, last: last, inclusive: inclusive};}
    const examples: [IsBetweenArgs<number>, boolean][] = [
        [Args(10, 0, 20), true],
        [Args(10, 0, 10, true), true],
        [Args(10, 10, 11, true), true],
        [Args(10, 11, 12), false]
    ]

    examples.forEach(([x, ret]) => {
        test(`Expect ${x.x} to be between ${x.first} and ${x.last} ${x.inclusive?"(inclusive)":"(exclusive)"}`, () => {
            expect(JsSort.IsBetween(leastToGreatestNumberSort, x.x, x.first, x.last, x.inclusive)).toEqual(ret)
        })
    })
})