import { FillToTargetBalanceFromSource, FromSourceDistributionMethods } from "."
import { cloneDeep } from "lodash";
import "@testing-library/jest-dom"
import { getOrDefault } from "@/ts-utils/record-utils";

const sourceBucket = "source";
const allTargetBuckets = ["a", "b", "c", "d", "e", "f"];

const initialBalances = {source: 400, a: -15, b:-100, c:10, d:-50, e:-500, f:-15};
const insufficientByAmount = 280; // No + from 'c', only - from other buckets

test("Equal-Dollar Balance-Targeting Bucket Filling (with insufficient funds)", () => {
    const test = new FillToTargetBalanceFromSource(
        sourceBucket, 
        Object.fromEntries(allTargetBuckets.map(name => [name, 0])),
        FromSourceDistributionMethods.EqualDollars
    )

    const result = test.fillBuckets(cloneDeep(initialBalances))

    // console.log(result)

    expect(result['c']).toEqual(initialBalances['c']) // * Should not have be touched, so "close to" is not required
    allTargetBuckets.forEach(name => {if(name == 'e' || name == 'c') return; expect(result[name]).toBeCloseTo(0)})
    expect(result['e']).toBeCloseTo(-1*insufficientByAmount)
    expect(result[sourceBucket]).toBeCloseTo(0)
})

test("Equal-Percent Balance-Targeting Bucket Filling (with insufficient funds)", () => {
    const targetBalance = 0;
    const test = new FillToTargetBalanceFromSource(
        sourceBucket, 
        Object.fromEntries(allTargetBuckets.map(name => [name, targetBalance])),
        FromSourceDistributionMethods.EqualPercentFull
    )

    const result = test.fillBuckets(cloneDeep(initialBalances))

    // console.log(result)

    expect(result['c']).toEqual(initialBalances['c'])
    expect(result[sourceBucket]).toBeCloseTo(0)
    const expectedFillFraction = (initialBalances[sourceBucket]/(insufficientByAmount+initialBalances[sourceBucket]))
    allTargetBuckets.forEach(name => {
        if (name == "c") return; 
        const amountNeeded = targetBalance-getOrDefault(initialBalances, name, 0)
        const amountAdded = getOrDefault(result, name, 0)-getOrDefault(initialBalances, name, 0)
        
        expect(amountAdded/amountNeeded).toBeCloseTo(expectedFillFraction)})
})