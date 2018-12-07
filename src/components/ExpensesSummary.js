import React from 'react';
import { connect } from 'react-redux';
import selectExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';



export const ExpensesSummary = (props) => {
	const length = props.expenses.length;
	const expense = length === 1 ? 'expense' : 'expenses';
	const total = numeral(selectExpensesTotal(props.expenses) / 100).format('$0,0.00');
	return(
		<div>
			<h1>{`Viewing ${length} ${expense} totalling ${total}`}</h1>
			
		</div>

		);

}

const mapStatetoProps = (state) => {
	return{
		expenses: selectExpenses(state.expenses, state.filters)
		
	};

};

export default connect(mapStatetoProps)(ExpensesSummary);