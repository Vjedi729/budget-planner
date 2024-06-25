import _, { max } from "lodash";
import { BucketBalance } from "./interface";
import { BucketFillAlgorithm } from "./interface";
import { BucketName } from "../enums";
import { getOrDefault } from "@/ts-utils/record-utils";


export class LogBuckets implements BucketFillAlgorithm<"LogBuckets"> {
    readonly uniqueKeyString = "LogBuckets";

    label: string
    bucketWhitelist: Array<BucketName> | undefined

    constructor(label: string, whitelist?: Array<BucketName>) {
        this.label = label;
        this.bucketWhitelist = whitelist;
    }

    fillBuckets(initialBucketBalances: BucketBalance<number>): BucketBalance<number> {
        const toLog = (this.bucketWhitelist !== undefined) ? 
            Object.fromEntries(Object.entries(initialBucketBalances).filter(([name, _]) => this.bucketWhitelist?.includes(name))) :
            initialBucketBalances;
        console.log(this.label, toLog)

        return initialBucketBalances;
    }
}
export class FillSequence implements BucketFillAlgorithm<"Sequence"> {
    readonly uniqueKeyString = "Sequence";

    sequence: BucketFillAlgorithm<string>[]

    constructor(seq: BucketFillAlgorithm<string>[]) {
        this.sequence = seq;
    }

    fillBuckets(initialBucketBalances: BucketBalance): BucketBalance {
        return this.sequence.reduce<BucketBalance>((p, c) => c.fillBuckets(p), initialBucketBalances);
    }
}

export enum FromSourceDistributionMethods {
    EqualDollars, EqualPercentFull, // TODO: EqualDollarsRemaining
}
type BucketTargets = Readonly<Record<BucketName, number>>

export abstract class FillBucketsFromSource<T extends string> implements BucketFillAlgorithm<T> {
    readonly uniqueKeyString: T;

    source: BucketName
    distributionMethod: FromSourceDistributionMethods // ? Maybe make 2+ separate classes? 

    constructor(
        uniqueKeyString: T,
        source: BucketName,
        distributionMethod: FromSourceDistributionMethods,
    ) {
        this.uniqueKeyString = uniqueKeyString;
        this.source = source;
        this.distributionMethod = distributionMethod;
    }

    abstract GetTargets(initialBucketBalances: BucketBalance): BucketTargets
    GetMoneyNeededToFillAll(targets: BucketTargets): number { return Object.entries(targets).reduce((p, c) => p+c[1], 0); }

    // fillCustomProportions(initialBucketBalances: BucketBalance, proportions: Record<BucketName, number>): BucketBalance {

    // }

    fillEqualDollars(initialBucketBalances: BucketBalance, targets?: BucketTargets): BucketBalance {
        targets = targets || this.GetTargets(initialBucketBalances);

        let excessMoney = getOrDefault(initialBucketBalances, this.source, 0);
        let filledAmount = 0;
        let targetsToFill = Object.keys(targets)
        while(excessMoney > 0 && targetsToFill.length > 0) {
            const maxAmountToAdd = excessMoney / targetsToFill.length;

            // console.log("Filling buckets with", excessMoney, "giving a max of", maxAmountToAdd, "dollars per bucket")

            targetsToFill = targetsToFill.reduce<BucketName[]>((nonFullTargets, targetName) => {
                const targetAmount = targets[targetName]
                let willBeFull = targetAmount <= filledAmount + maxAmountToAdd
                if(willBeFull) {
                    const amount = targetAmount-filledAmount
                    excessMoney -= amount;
                    initialBucketBalances[targetName] = getOrDefault(initialBucketBalances, targetName, 0) + amount;
                    return nonFullTargets;
                } else {
                    excessMoney -= maxAmountToAdd;
                    initialBucketBalances[targetName] = getOrDefault(initialBucketBalances, targetName, 0) + maxAmountToAdd;

                    return nonFullTargets.concat([targetName])
                }
            }, [])

            filledAmount += maxAmountToAdd;
            // console.log("Result", initialBucketBalances)
        }

        initialBucketBalances[this.source] = excessMoney;

        return initialBucketBalances;
        
    }

    fillEqualPercent(initialBucketBalances: BucketBalance, targets?: BucketTargets): BucketBalance {
        targets = targets || this.GetTargets(initialBucketBalances)
        // console.log(targets);
        const fractionToFillTo = initialBucketBalances[this.source] / this.GetMoneyNeededToFillAll(targets);

        Object.entries(targets).forEach(([targetName, targetAmount]) => {
            const amount = fractionToFillTo * targetAmount
            // console.log("Adding", amount, "to bucket", targetName)
            initialBucketBalances[this.source] -= amount;
            initialBucketBalances[targetName] = getOrDefault(initialBucketBalances, targetName, 0) + amount;
            // console.log(initialBucketBalances[targetName])
        });

        return initialBucketBalances
    }

    fillBuckets(initialBucketBalances: BucketBalance): BucketBalance {
        initialBucketBalances[this.source] = initialBucketBalances[this.source] || 0;
        const targets = this.GetTargets(initialBucketBalances);
        const moneyNeededToFillAll = this.GetMoneyNeededToFillAll(targets)
        // # Fill all buckets to target if possible
        if(initialBucketBalances[this.source] > moneyNeededToFillAll) {
            initialBucketBalances[this.source] -= moneyNeededToFillAll
            Object.entries(targets).forEach(
                ([targetName, targetAmount]) => initialBucketBalances[targetName] = (initialBucketBalances[targetName] || 0) + targetAmount
            );
            return initialBucketBalances;
        } 

        return (
            this.distributionMethod == FromSourceDistributionMethods.EqualDollars ? 
                this.fillEqualDollars(initialBucketBalances) :
                this.fillEqualPercent(initialBucketBalances)
        )

    }
}

export class AddFixedAmountFromSource extends FillBucketsFromSource<"FixedAmountFromSource"> {

    targets: Readonly<Record<string, number>>;
    moneyNeededToFillAll: number;

    constructor(
        source: BucketName,
        targets: Record<BucketName, number>,
        distributionMethod: FromSourceDistributionMethods,
    ) {
        super("FixedAmountFromSource", source, distributionMethod);
        this.targets = targets;
        this.moneyNeededToFillAll = Object.entries(targets).reduce((p, c) => p+c[1], 0);
    }

    GetTargets(initialBucketBalances: BucketBalance): Readonly<Record<string, number>> {
        return this.targets;
    }

    GetMoneyNeededToFillAll(targets: Readonly<Record<BucketName, number>>): number {
        return this.moneyNeededToFillAll
    }
}

export class FillToTargetBalanceFromSource extends FillBucketsFromSource<"FixedEndBalanceFromSource"> {

    targetBalances: BucketTargets

    constructor(source: BucketName, targetBalances: BucketTargets, distributionMethod: FromSourceDistributionMethods) {
        super("FixedEndBalanceFromSource", source, distributionMethod)

        this.targetBalances = targetBalances;
    }

    GetTargets(initialBucketBalances: BucketBalance): Readonly<Record<string, number>> {
        return Object.fromEntries(Object.entries(this.targetBalances).map(([name, targetBalance]) => {
            return [name, Math.max(0, targetBalance - getOrDefault(initialBucketBalances, name, 0))]
        }))
    }
}