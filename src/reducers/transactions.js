import {
    ADD_INCOME,
    REMOVE_INCOME,
    ADD_EXPENSE,
    REMOVE_EXPENSE,
} from '../actionTypes';

const initialState = {
    transactions: [],
}

export function transactionsReducer(state = initialState, action) {
    switch(action.type) {
        default:
            return state
    }
}