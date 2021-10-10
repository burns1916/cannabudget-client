import {
    GET_TRANSACTIONS,
    ADD_TRANSACTION,
    REMOVE_TRANSACTION,
} from '../actionTypes';

const initialState = {
    transactions: [],
}

export function transactionsReducer(state = initialState, action) {
    switch(action.type) {
        case GET_TRANSACTIONS:
            return {...state, transactions: action.transactions}
        case ADD_TRANSACTION:
            return {...state, transactions: action.transactions}
        case REMOVE_TRANSACTION:
            return {...state, transactions: [...state.transactions.filter(transaction => transaction.id !== action.transactionId)]}
        default:
            return state
    }
}