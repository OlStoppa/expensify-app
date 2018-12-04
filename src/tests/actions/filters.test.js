import { setStartDate, setEndDate, sortByDate, sortByAmount, setTextFilter } from '../../actions/filters';
import moment from 'moment';

test('should generste set start date action object', () => {
	const action = setStartDate(moment(0));
	expect(action).toEqual({
		type: 'SET_START_DATE',
		startDate: moment(0)
	});
});

test('should generate set end date action object', () => {
	const action = setEndDate(moment(0));
	expect(action).toEqual({
		type: 'SET_END_DATE',
		endDate: moment(0)
	});
});

test('should generate sort by date action object', () => {
	const action = sortByDate();
	expect(action).toEqual({
		type: 'SORT_BY_DATE'
	});
});

test('should generate sort by amount action object', () => {
	const action = sortByAmount();
	expect(action).toEqual({
		type: 'SORT_BY_AMOUNT'
	});
});

test('should generate set text filter with passed values', () => {
	const action = setTextFilter('hello');
	expect(action).toEqual({
		type: 'SET_TEXT_FILTER',
		text: 'hello'
	});
});

test('should generate set text filter with default values', () => {
	const action = setTextFilter();
	expect(action).toEqual({
		type: 'SET_TEXT_FILTER',
		text: ''
	});
});