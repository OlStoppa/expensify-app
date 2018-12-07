import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('should render ExpensesSummary with no expenses', () => {
	const wrapper = shallow(<ExpensesSummary expenses={[]} />);
	expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary with an expenses', () => {
	const wrapper = shallow(<ExpensesSummary expenses={[expenses[0]]} />);
	expect(wrapper).toMatchSnapshot();
});
