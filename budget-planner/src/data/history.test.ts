import { BasicHistoryOf, ChangeHistoryOf, ChangeOf, HistoryOf } from "./history";
import "@testing-library/jest-dom"

class TestObject {
    a: number
    b: { c: number, d: number }

    constructor(a: number, c: number, d: number){
        this.a = a;
        this.b = {c, d};
    }
}

const initialObj = new TestObject(1, 2, 3)
const testChanges: Array<[ChangeOf<TestObject>, TestObject]> = [
    [ {a:4}, new TestObject(4, 2, 3) ],
    [ {b:{c:5, d:6}}, new TestObject(4, 5, 6)],
    [ {b:{d:7}}, new TestObject(4, 5, 7)]
]
const laterTimeFirstSort = (a:number, b:number)=> b-a

test("Test of BasicHistoryOf", () => {
    const startTime: number = -1; // DO NOT CHANGE
    let hist: HistoryOf<TestObject, number> = new BasicHistoryOf<TestObject, number>(laterTimeFirstSort, initialObj, startTime);

    // test("Setting values", () => {
        testChanges.forEach(([change, result], i) => {
            hist.setValue(change, i)
            
            expect(hist.currentValue).toEqual(result)
        })

        // console.log(JSON.stringify(hist, undefined, 2))
    // })

    // test("Getting \"initial\" value", () => {
        // console.log("Initial", hist.getValue(-1))
         expect(hist.getValue(startTime)).toEqual(initialObj)
    // })

    // test("Getting values from past", () => {
        testChanges.forEach(([change, result], i) => {
            // console.log(i, hist.getValue(i))
            // console.log(i+0.5, hist.getValue(i+0.5))
            expect(hist.getValue(i)).toEqual(result)
        })
    // })

    let actualValues = hist.getValues(startTime, testChanges.length)
    let expectedValues = testChanges.map(([change, result], i) => { return {start:i, end: Math.min(i+1, testChanges.length-1), value: result}; })
    
    expect(actualValues).toContainEqual({start: startTime, end: 0, value: initialObj})
    expectedValues.forEach(value => {
        expect(actualValues).toContainEqual(value)
    })

    // TODO: add tests for time cut-off if getValues() times are between changes
    // TODO: add test that getValues() return does not contain multiple entries with the same "start" or "end" time
    // ? Add tests for adding values in the middle of the time period? -> Haven't decided if this "should" work.

    // No value given for `getValue` before and after end time
    expect(hist.getValue(startTime-1)).toBeUndefined();
    expect(hist.getValue(testChanges.length+1)).toBeUndefined();
    
    // `getValue` and `getValues` work correctly with `reportNoChange`
    hist.reportNoChange(testChanges.length+1)
    expect(hist.getValue(testChanges.length+1)).toEqual(testChanges[testChanges.length-1][1]);
    let valuesAfterReportNoChange = hist.getValues(-Infinity, Infinity)
    let latestEndTime = valuesAfterReportNoChange.map(x => x.end).reduce<number>((prevTime, currTime) => Math.max(prevTime, currTime), -Infinity)
    expect(latestEndTime).toEqual(testChanges.length+1);
})