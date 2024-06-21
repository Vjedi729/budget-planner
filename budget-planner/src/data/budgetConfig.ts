import { FillSequence } from "./bucket-fill-algorithm"
import { BucketFillAlgorithm } from "./bucket-fill-algorithm/interface"
import { BucketName } from "./enums"
import { EveryMonthOnTheNth, Recurrence } from "./transactions"

export type PeopleGroups<People extends string> = People | `${People}+${People}` | `${People}+${People}+${People}` | `${People}+${People}+${People}+${People}`

export type MoneySplit<Budgets extends string> = Partial<Record<Budgets, number>>

export interface OLD_BudgetConfig<Budgets extends string = string, People extends string = string> {
    people: Array<People>
    incomes: Array<{dollars: number, everyXDays: number}>,
    needs: {
        bucketNames: Array<string>
    }
    wants: {
        wantsMoneySplit: MoneySplit<Budgets> // Proportional
        bucketFilling: Record<Budgets, {allocations: MoneySplit<BucketName>}>  // Dollars per month, for now
        // TODO: Add something to determine how often buckets are filled
        // TODO: Support different types of money allocations in Money Split (dollars, percentages, etc.)
    }
}
export interface BudgetConfig<People extends string = string> {
    people: Array<People>
    needs: {
        bucketNames: Array<string>
    }
    moneyDistributions: [
        { recurrence: Recurrence<Date>, bucketFillAlgorithm: BucketFillAlgorithm<string> }
    ]
}

export function FromOldConfig_OLD_BEHAVIOR<Budget extends string, People extends string>(
    oldStyleConfig: OLD_BudgetConfig<Budget, People>
) : BudgetConfig<People> {
    const fillSeq = new FillSequence([

    ])
    return {
        people: oldStyleConfig.people,
        needs: {bucketNames: oldStyleConfig.needs.bucketNames.map(x => x)},
        moneyDistributions: [
            { recurrence: new EveryMonthOnTheNth(2), bucketFillAlgorithm: fillSeq }
        ]
    }
}

// export function FromOldConfig<Budget extends string, People extends string>(oldStyleConfig: OLD_BudgetConfig<Budget, People>) : BudgetConfig<People>{
//     return oldStyleConfig;
// } 