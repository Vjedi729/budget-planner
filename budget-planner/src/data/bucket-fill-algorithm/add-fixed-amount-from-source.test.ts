import { AddFixedAmountFromSource, FromSourceDistributionMethods } from "."
import { uniq } from "lodash";
import "@testing-library/jest-dom"

const sourceBucket = "source"
test("Test of EqualPercent Bucket Filling", () => {
    const test = new AddFixedAmountFromSource(sourceBucket, {a:1, b:1, c: 2, d: 3}, FromSourceDistributionMethods.EqualPercentFull);
    
    const needed = 7; // _.sum(Object.values(test.targets))
    [0.1, 0.5, 1, 10].forEach(percent => {
        const out = test.fillBuckets({[sourceBucket]: percent*needed })

        // console.log("Filling buckets with targets", test.targets, "with", percent*needed, "dollars. results:", out)

        Object.entries(test.targets).forEach(([key, val]) => {
            expect(out[key]).toBeCloseTo(val*Math.min(percent, 1))
        })

        expect(out[sourceBucket]).toBeCloseTo(Math.max(0, percent-1)*needed)
    });
})

test("Test of Equal-Dollar Fixed-Amount Bucket Filling", () => {
    const test = new AddFixedAmountFromSource(
        sourceBucket, 
        {a: 10, b:10, c:15, d:20, e:20, f: 50}, 
        FromSourceDistributionMethods.EqualDollars
    );

    [30, 90, 150, 180].forEach(sourceAmount => {
        const out = test.fillBuckets({[sourceBucket]: sourceAmount});
        
        const unfilledTargetBuckets = Object.entries(test.targets).filter(
            ([targetBucketName, targetAmount]) => out[targetBucketName] != targetAmount
        );
        // console.log("Filling buckets", test.targets, "with", sourceAmount, "dollars")
        // console.log("Unfilled", unfilledTargetBuckets)
        // console.log("Out", out)
        const unfilledTargets = Object.fromEntries(unfilledTargetBuckets);

        // * Expect "Not Unfilled Buckets" to be filled to their target amount
        Object.entries(test.targets).filter(
            ([targetName, _]) => unfilledTargets[targetName] == undefined
        ).forEach(([targetName, targetAmount]) => {
            expect(out[targetName]).toBeCloseTo(targetAmount)
        })

        if(unfilledTargetBuckets.length == 0) return;

        // * Expect all unfilled buckets to have the same amount filled
        expect(uniq(unfilledTargetBuckets.map(x=>out[x[0]]))).toHaveLength(1);

        let maxDollarAmount: number = out[unfilledTargetBuckets[0][0]];
        Object.entries(test.targets).forEach(([targetBucket, targetAmount]) => {
            if(unfilledTargets[targetBucket] != undefined) expect(out[targetBucket]).toBeCloseTo(maxDollarAmount)
        })
    })
})