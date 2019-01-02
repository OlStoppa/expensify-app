import authReducer from '../../reducers/auth';

test('should login uid to store', () => {
    const id = 123;
    const action = {
        type: 'LOGIN',
        uid: id
    };
    const state = authReducer({}, action);
    expect(state.uid).toBe(action.uid);
});

test('should logout user clear uid from store', () => {
    const action = {
        type: 'LOGOUT'
    };
    const state = authReducer({uid: 'anything'}, action);
    expect(state).toEqual({});
});