import { BucketName } from "./enums"

export type PeopleGroups<People extends string> = People | `${People}+${People}` | `${People}+${People}+${People}` | `${People}+${People}+${People}+${People}`

export type MoneySplit<Budgets extends string> = Partial<Record<Budgets, number>>

export interface OLD_BudgetData<People extends string, Budgets extends string> {
    people: Array<People>
    incomes: Array<{dollars: number, everyXdays: number}>,
    needs: {
        bucketNames: Array<string>
    }
    wants: {
        wantsMoneySplit: MoneySplit<Budgets> // Proportional
        bucketFilling: Record<BucketName, MoneySplit<Budgets>> // TODO: What should the value be?
    }
}

export interface BudgetConfig<Budgets extends string = string, People extends string = Budgets> {
    people: Array<People>
    incomes: Array<{dollars: number, everyXdays: number}>,
    needs: {
        bucketNames: Array<string>
    }
    wants: {
        wantsMoneySplit: MoneySplit<Budgets> // Proportional
        bucketFilling: Record<Budgets, {allocations: MoneySplit<BucketName>}> // TODO: What should the value be?
        // TODO: How often do the buckets fill.
    }
}