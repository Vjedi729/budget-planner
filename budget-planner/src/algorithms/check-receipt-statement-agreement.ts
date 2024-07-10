import { AccountStatement } from "@/data/account-statement-types"
import { Vendor } from "@/data/vendor"
import { Account } from "@/data/account"
import { Receipt } from "@/data/receipt"
import { StatementExternalTransaction } from "@/data/account-statement-types/account-statement"

export interface CheckReceiptStatementAgreementState {
	vendors: Vendor[]
	accounts: Account[]
}

interface Match {
	statement: AccountStatement,
	statementTransaction: StatementExternalTransaction,
	receipt: Receipt
}

type ConfirmTask = (match: Match) => boolean

export interface ReceiptStatementAgreementOutput {
	unmatchedStatementTransactions: StatementExternalTransaction[]
	matchedTransactions: Match[]
	likelyMatchedTransactions: {match: Match, confirm: ConfirmTask}[]
}

const EqualDay = function(a:Date, b:Date) { return a.getFullYear() == b.getFullYear() && a.getMonth() == b.getMonth() && a.getDate() && b.getDate()}

const MatchVendorData = function(statementVendorName: string, receiptStoreName: string, stateData: CheckReceiptStatementAgreementState): boolean {
	return false;
}

export const CheckReceiptStatementAgreement = function(
	receipts: Receipt[], statements: AccountStatement[],
	stateData: CheckReceiptStatementAgreementState,
) : ReceiptStatementAgreementOutput {
	let retVal: ReceiptStatementAgreementOutput = {
		unmatchedStatementTransactions: [],
		matchedTransactions: [],
		likelyMatchedTransactions: []
	};
	
	statements.forEach(statement => {
		statement.externalTransactionsSimple.forEach(statementTransaction => {
			// * Check against receipts
			const matchingReceipts = receipts.filter(receipt => (
				Math.abs(statementTransaction.amount - receipt.amount) < 0.001 && // Threshold is smallest currency counted amount
				EqualDay(statementTransaction.time, receipt.time) 
			))

			if(matchingReceipts.length == 0) retVal.unmatchedStatementTransactions.push(statementTransaction);
			else if(matchingReceipts.length == 1) {
				const matchedReceipt = matchingReceipts[0];
				if ()
			}
		})

		// TODO: Check internal transactions against each other
	})

	return retVal;
}