import { EveryMonthOnTheNth } from "@/data/transactions"

import { getBucketBalances, laterDateFirstSort, testBudgetHistory, testInitialDate, testInitialBucketBalaces, testTransactionData } from "@/data/testData"
import { JsSort } from "@/ts-utils/sort-utils"
import { InnerSpendTrackingComponentProps } from "@/specific-components/spend-tracking/interface"

export function TestDataToSpendTrackingProps(
    startDate: Date = new Date(2023, 7, 29), 
    endDate: Date = new Date(Date.now())
): InnerSpendTrackingComponentProps {
    return {
        bucketBalanceHistory: getBucketBalances(
            laterDateFirstSort, testInitialBucketBalaces, testInitialDate, testBudgetHistory, 
            new EveryMonthOnTheNth(2), testTransactionData, 
            endDate, false
        ), 
        transactions: testTransactionData.filter(transaction => 
            JsSort.ResultEquals(JsSort.ResultType.LeftArgFirst, laterDateFirstSort(transaction.time, startDate)) &&
            JsSort.ResultEquals(JsSort.ResultType.LeftArgFirst, laterDateFirstSort(endDate, transaction.time))
        ) 
    };
}

// ! These don't work for some unknown reason: 
/* 
export const TestDataOuterComponent: React.FC<OuterSpendTrackingComponentProps> = (props) => {
    
    let innerProps = TestDataToSpendTrackingProps();

    return <props.innerComponent 
        bucketBalanceHistory={innerProps.bucketBalanceHistory} 
        transactions={innerProps.transactions} 
    />
}

export const TestDataComponentFactory: SpendTrackingComponentFactory = (innerComponent) => {
    return () => {    
        return innerComponent(TestDataToSpendTrackingProps());
    }
}
//*/