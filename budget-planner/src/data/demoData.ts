export type PeopleGroups<People extends string> = People | `${People}+${People}` | `${People}+${People}+${People}` | `${People}+${People}+${People}+${People}`

export type MoneySplit<Budgets extends string> = Partial<Record<Budgets, number>>

export interface BudgetData<People extends string, Budgets extends string> {
    people: Array<People>
    incomes: Array<{dollars: number, everyXdays: number}>,
    needs: {
        bucketNames: Array<string>
    }
    wants: {
        wantsMoneySplit: MoneySplit<Budgets> // Proportional
        bucketFilling: Record<string, MoneySplit<Budgets>> // TODO: What should the value be?
    }
}

export var testBudgetData: BudgetData<"Vishal"|"Meridith", "Vishal"|"Meridith"|"Both"> = {
    people: ["Vishal", "Meridith"],
    incomes: [{dollars: 2144, everyXdays: 14}],
    needs: {
        bucketNames: [
            "Home Improvement",
            "Shelter", 
            "Groceries", 
            "Utilities", 
            "Car", 
            "Health",
            "Clothing",
            "Needs Debts"
        ]
    },
    wants: {
        wantsMoneySplit: {
            "Vishal": 30,
            "Meridith": 30,
            "Both": 40
        },
        bucketFilling: {
            "Cats": { "Meridith": 150 }, // What is happening here?
            "Fish": { "Meridith": 20, "Vishal": 10 },
            "Garden": { "Meridith": 20, "Vishal": 10, "Both": 10 },
            "Sewing": { "Meridith": 30, "Both": 10 },
            "Housewares": { "Both": 30 }
        }
    }
}