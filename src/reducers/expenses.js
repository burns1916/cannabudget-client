import {
    GET_EXPENSES,
    ADD_EXPENSE,
    DELETE_EXPENSE,
} from '../actionTypes';

const initialState = {
    expenses: [],
}

export function expensesReducer(state = initialState, action) {
    switch(action.type) {
        case GET_EXPENSES:
            return {...state, expenses: action.expenses}
        case ADD_EXPENSE:
            return {...state, expenses: action.expenses}
        case DELETE_EXPENSE:
            return {...state, expenses: [...state.expenses.filter(expense => expense.id !== action.expenseId)]}
        default:
            return state
    }
}