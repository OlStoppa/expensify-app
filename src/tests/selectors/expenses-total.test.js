import React from 'react';
import { shallow } from 'enzyme';
import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
		const result = selectExpensesTotal();
		expect(result).toBe(0);
});

test('should add up multiple expenses', () => {
		const result = selectExpensesTotal(expenses);
		expect(result).toBe(12695);
});

test('should add up a single expense', () => {
		const result = selectExpensesTotal([expenses[0]]);
		expect(result).toBe(195);
});

