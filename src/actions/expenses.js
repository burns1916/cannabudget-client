import {
    GET_EXPENSES,
    ADD_EXPENSE,
    DELETE_EXPENSE,
} from '../actionTypes';

import { getCurrentUser } from './currentUser';

const BASE_URL = 'https://localhost:3001';
const EXPENSE_URL = `${BASE_URL}/expenses`

export const getExpenses = () => {
    return (dispatch) => {
        fetch(EXPENSE_URL, {
            credentials: "include",
        })
        .then(resp => resp.json())
        .then(expenses => dispatch({
            type: GET_EXPENSES,
            expenses
        }))
    }
}

export const addExpense = (expenseData) => {
    return dispatch => {
        const sendableIncomeData = {
            name: expenseData.name,
            amount: expenseData.amount, 
        }
        return fetch(EXPENSE_URL, {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(sendableExpenseData)
        })
        .then(response => response.json())
        .then(expense => {
            if(expense.error) {
                alert(expense.error)
            } else {
                dispatch({
                    type: ADD_EXPENSE,
                    expense
                })
                dispatch(getCurrentUser())
            }
        })
        .catch((error) => {
            console.log('Error', error)
        });
    }
}

export function deleteExpense => (expenseId) {
    return (dispatch) => {
        return fetch(`${EXPENSE_URL}/${expenseId}`, {
            credentials: "include",
            method: "DELETE",
        })
        .then(resp => resp.json())
        .then(() => {
            dispatch({
                type: DELETE_EXPENSE,
                expenseId
            })
            dispatch(getCurrentUser())
        })
    }
}