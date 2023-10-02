export type PeopleGroups<People extends string> = People | `${People}+${People}` | `${People}+${People}+${People}` | `${People}+${People}+${People}+${People}` | `${People}+${People}+${People}+${People}+${People}`

export type MoneySplit<People extends string> = Partial<Record<PeopleGroups<People>, number>>

export interface BudgetData<People extends string> {
    people: Array<People>
    wantsMoneySplit: MoneySplit<People>
    bucketFilling: Record<string, {}> // TODO: What should the value be?
}

export var testBudgetData: BudgetData<"Vishal"|"Meridith"> = {
    people: ["Vishal", "Meridith"],
    wantsMoneySplit: {
        "Vishal": 30,
        "Meridith": 30,
        "Vishal+Meridith":40
    },
    bucketFilling: {
        "Fish": {}
    }
}