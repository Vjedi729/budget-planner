import { OLD_BudgetConfig, FromOldConfig_OLD_BEHAVIOR } from "./budgetConfig";
import { HELPER_quickDistributeMoneyToBuckets } from "./testData";
import { cloneDeep } from "lodash";
import { BucketBalance } from "./bucket-fill-algorithm/interface";
import "@testing-library/jest-dom"

test("New Budget Config Replicates Old Behaviors", () => {
    const testConfig: OLD_BudgetConfig = {
        people: ["Person A", "Person B"],
        incomes: {bucketNames: ["Income"]},
        needs: {bucketNames: ["Need 1", "Need 2", "Need 3"]},
        wants: {
            wantsMoneySplit: {
                "Person A": 30, "Person B": 30, "Both": 40
            },
            bucketFilling: {
                "Person A": {allocations: { "Want 1": 10, "Want 2": 30 }},
                "Person B": {allocations: { "Want 3": 10, "Want 2": 100 }},
                "Both":     {allocations: { "Want 4": 10, "Want 5": 30 }},
            }
        }
    }
    const testInitialBalance: BucketBalance = {
        "Income": 1000, 
        "Need 1": -200, "Need 2": -100, "Need 3": -150
        // Wants are all 0 by default
    }

    const oldFunctionOutput = HELPER_quickDistributeMoneyToBuckets(
        testConfig, cloneDeep(testInitialBalance), 
        undefined //"Old Function Output" // * Log context
    )

    const testNewConfig = FromOldConfig_OLD_BEHAVIOR(testConfig);
    let newFunctionOutput = cloneDeep(testInitialBalance)
    testNewConfig.moneyDistributions.forEach(dist => {
        newFunctionOutput = dist.bucketFillAlgorithm.fillBuckets(newFunctionOutput)
    })

    // console.log("Old Function", oldFunctionOutput)
    // console.log("New Function", newFunctionOutput)

    Object.entries(newFunctionOutput).forEach(
        ([bucketName, bucketAmount]) => {
            expect(bucketAmount).toBeCloseTo(oldFunctionOutput[bucketName])
        }
    )
})