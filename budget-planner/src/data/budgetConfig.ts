import { BucketName } from "./enums"

export type PeopleGroups<People extends string> = People | `${People}+${People}` | `${People}+${People}+${People}` | `${People}+${People}+${People}+${People}`

export type MoneySplit<Budgets extends string> = Partial<Record<Budgets, number>>

export interface BudgetConfig<Budgets extends string = string, People extends string = Budgets> {
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