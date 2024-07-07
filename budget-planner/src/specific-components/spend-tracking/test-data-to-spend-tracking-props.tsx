import { getBucketBalances, laterDateFirstSort, testBudgetConfigHistory, testInitialBucketBalances, testBudgetRefillRecurrence, testIncomeTransactions } from "@/data/testData"
import { sampleTransactions, sampleInitialDate } from "@/data/transactionData2023"
import { JsSort } from "@/ts-utils/sort-utils"
import { InnerSpendTrackingComponentProps } from "@/specific-components/spend-tracking/interface"

export function TestDataToSpendTrackingProps(
    startDate: Date = new Date(2021, 2 /* March */, 15), 
    endDate: Date = new Date(Date.now())
): InnerSpendTrackingComponentProps {

    console.info("Creating `SpendTrackingProps` from *Test Data*")

    let transactions = sampleTransactions.concat(testIncomeTransactions(startDate, endDate))

    return {
        bucketBalanceHistory: getBucketBalances(
            { laterTimeFirstSort: laterDateFirstSort }, 
            { 
                initialBucketBalances: testInitialBucketBalances, 
                initialTime: sampleInitialDate, endTime: endDate, inclusive: false
            },
            testBudgetConfigHistory, 
            transactions, 
        ),
        transactions: transactions.filter(transaction => 
            JsSort.ResultEquals(JsSort.ResultType.LeftArgFirst, laterDateFirstSort(transaction.time, startDate)) &&
            JsSort.ResultEquals(JsSort.ResultType.LeftArgFirst, laterDateFirstSort(endDate, transaction.time))
        ),
        budgetConfigHistory: testBudgetConfigHistory
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