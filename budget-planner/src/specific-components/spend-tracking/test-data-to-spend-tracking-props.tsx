import { getBucketBalances, laterDateFirstSort, testBudgetHistory, testInitialDate, testInitialBucketBalances, testTransactionData, testBudgetData, testBudgetRefillRecurrence, earlierDateFirstSort } from "@/data/testData"
import { sampleTransactions, sampleInitialDate } from "@/data/transactionData2023"
import { JsSort } from "@/ts-utils/sort-utils"
import { InnerSpendTrackingComponentProps } from "@/specific-components/spend-tracking/interface"
import { BasicHistoryOf, HistoryOf } from "@/data/history"
import { BudgetConfig } from "@/data/budgetConfig"

export function TestDataToSpendTrackingProps(
    startDate: Date = new Date(2021, 2 /* March */, 15), 
    endDate: Date = new Date(Date.now())
): InnerSpendTrackingComponentProps {

    let transactions = sampleTransactions
    let budgetHistory: HistoryOf<BudgetConfig, Date> = new BasicHistoryOf(laterDateFirstSort, testBudgetData, startDate)
    budgetHistory.reportNoChange(endDate);

    return {
        bucketBalanceHistory: getBucketBalances(
            laterDateFirstSort, testInitialBucketBalances, sampleInitialDate, testBudgetHistory, 
            testBudgetRefillRecurrence, transactions, 
            endDate, false
        ),
        transactions: transactions.filter(transaction => 
            JsSort.ResultEquals(JsSort.ResultType.LeftArgFirst, laterDateFirstSort(transaction.time, startDate)) &&
            JsSort.ResultEquals(JsSort.ResultType.LeftArgFirst, laterDateFirstSort(endDate, transaction.time))
        ),
        budgetConfigHistory: budgetHistory
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