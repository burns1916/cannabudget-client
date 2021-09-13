import {
        ADD_EXPENSE,
        DELETE_EXPENSE,
        GET_EXPENSE
        } from '../actionTypes';

const BASE_URL = 'https://cannabudget-api.herokuapp.com/'
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

export const addExpense = (expenseData) => {
    return dispatch => {
        const acceptedExpenseData = {
            id: expenseData.id,
            name: expenseData.name,
            amount: expenseData.amount,
        }
        return fetch(EXPENSE_URL, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(acceptedExpenseData),
        })
        .then(resp => resp.json())
        .then(expense => {
            if (expense.error) {
                alert(expense.error)
            } else {
                dispatch({
                    type: ADD_EXPENSE,
                    expense
                })
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
}