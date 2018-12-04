import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import  getVisibleExpenses  from './selectors/expenses';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

const waterBill = store.dispatch(addExpense({description: 'Water Bill', amount: 300, createdAt: 2}));
const gasBill = store.dispatch(addExpense({description: 'Gas Bill', amount: 400, createdAt: 5}));
const rent = store.dispatch(addExpense({description: 'rent', amount: 106000, createdAt: 1}));




const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
	);







ReactDOM.render(jsx, document.getElementById('app'));