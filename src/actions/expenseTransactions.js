import {
        ADD_EXPENSE,
        DELETE_EXPENSE,
        GET_EXPENSE
        } from '../actionTypes';

const BASE_URL = 'http://localhost:3000/'
const EXPENSE_URL = `${BASE_URL}/expenses`

export const getExpense = () => {
    return (dispatch) => {
        fetch(EXPENSE_URL)
        .then(resp => resp.json())
        .then(expenses => dispatch({
            type: GET_EXPENSE,
            expenses
        }))
    }
}

export const addExpense = () => {
    
}