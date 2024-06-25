import { filterDefined } from "@/ts-utils/undefined-utils"
import { AddFixedAmountFromSource, FillBucketsFromSource, FillSequence, FillToTargetBalanceFromSource, FromSourceDistributionMethods, LogBuckets } from "./bucket-fill-algorithm"
import { BucketFillAlgorithm } from "./bucket-fill-algorithm/interface"
import { BucketName } from "./enums"
import { EveryMonthOnTheNth, Recurrence } from "./transactions"

export type PeopleGroups<People extends string> = People | `${People}+${People}` | `${People}+${People}+${People}` | `${People}+${People}+${People}+${People}`

export type MoneySplit<Budgets extends string> = Partial<Record<Budgets, number>>

interface OLD_BucketFillDescription {
	allocations: MoneySplit<BucketName>
}

export interface OLD_BudgetConfig<Budgets extends string = string, People extends string = string> {
	people: Array<People>
	incomes: {
		bucketNames: Array<BucketName>
	}
	needs: {
		bucketNames: Array<BucketName>
	}
	wants: {
		wantsMoneySplit: MoneySplit<Budgets> // Proportional
		bucketFilling: Record<Budgets, OLD_BucketFillDescription>  // Dollars per month, for now
		// TODO: Add something to determine how often buckets are filled
		// TODO: Support different types of money allocations in Money Split (dollars, percentages, etc.)
	}
}
export interface BudgetConfig<People extends string = string> {
	people: Array<People>
	needs: {
		bucketNames: Array<string>
	}
	moneyDistributions: Array<
		{ recurrence: Recurrence<Date>, bucketFillAlgorithm: BucketFillAlgorithm<string> }
	>
}

export function FromOldConfig_OLD_BEHAVIOR<Budget extends string, People extends string>(
	oldStyleConfig: OLD_BudgetConfig<Budget, People>
) : BudgetConfig<People> {

	// * Prep for filling wants buckets with all unspent money
	// ! (using "BIG_NUMBER" is a hack)
	const wantsWeightTotal = Object.values<number | undefined>(oldStyleConfig.wants.wantsMoneySplit).reduce<number>((p, c) => p+(c||0), 0)
	const BIG_NUMBER = Number.MAX_VALUE
	const weightMultiplier = BIG_NUMBER/wantsWeightTotal;
	const wantsHackTargets = Object.fromEntries(
		Object.entries<number|undefined>(oldStyleConfig.wants.wantsMoneySplit).map(
			([toBucket, amount]) => [toBucket, (amount||0)*weightMultiplier]
		)
	)

	// TODO: Log data for testing
	const fillSequences: BucketFillAlgorithm<string>[] = oldStyleConfig.incomes.bucketNames.map(
		incomeBucket => new FillSequence(
			oldStyleConfig.needs.bucketNames.map<BucketFillAlgorithm<string>>(name =>
				// * Fill needs buckets first
				new FillToTargetBalanceFromSource(incomeBucket, {[name]: 0}, FromSourceDistributionMethods.EqualPercentFull)
			// ).concat(
			// 	new LogBuckets("Filled Needs Buckets")
			).concat(
				// * Fill main wants buckets with remaining money
				new AddFixedAmountFromSource(
					incomeBucket, 
					wantsHackTargets,
					FromSourceDistributionMethods.EqualPercentFull
				)
			// ).concat(
			// 	new LogBuckets("Split Wants Buckets")
			).concat(
				// * Fill specific buckets from main wants buckets
				Object.entries<OLD_BucketFillDescription>(oldStyleConfig.wants.bucketFilling).map(([fromBucket, data]) =>
					filterDefined(Object.entries(data.allocations).map(([toBucket, amount])=>
						amount != undefined ? new AddFixedAmountFromSource(fromBucket, {[toBucket]: amount}, FromSourceDistributionMethods.EqualDollars) : undefined
					))
				).flat()
			)
		)
	)
	return {
		people: oldStyleConfig.people,
		needs: {bucketNames: oldStyleConfig.needs.bucketNames.map(x => x)},
		moneyDistributions: fillSequences.map(seq =>
			({ recurrence: new EveryMonthOnTheNth(2), bucketFillAlgorithm: seq })
		)
	}
}

// export function FromOldConfig<Budget extends string, People extends string>(oldStyleConfig: OLD_BudgetConfig<Budget, People>) : BudgetConfig<People>{
//     return oldStyleConfig;
// } 