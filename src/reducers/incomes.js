import {
    GET_INCOMES,
    ADD_INCOME,
    DELETE_INCOME,
} from '../actionTypes';

const initialState = {
    incomes: [],
}

export function incomesReducer(state = initialState, action) {
    switch(action.type) {
        case GET_INCOMES:
            return {...state, incomes: action.incomes}
        case ADD_INCOME:
            return {...state, incomes: [...state.incomes, action.income]}
        case DELETE_INCOME:
            return {...state, incomes: [...state.incomes.filter(income => income.id !== action.incomeId)]}
        default:
            return state
    }
}