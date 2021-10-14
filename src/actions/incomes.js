import {
    GET_INCOMES,
    ADD_INCOME,
    DELETE_INCOME,
} from '../actionTypes';

import { getCurrentUser } from './currentUser';

const BASE_URL = 'http://localhost:3001';
const INCOME_URL = `${BASE_URL}/incomes`

export const getIncomes = () => {
    return (dispatch) => {
        fetch(INCOME_URL, {
            credentials: "include",
        })
        .then(resp => resp.json())
        .then(incomes => dispatch({
            type: GET_INCOMES,
            incomes
        }))
    }
}

export const addIncome = (incomeData) => {
    return dispatch => {
        const sendableIncomeData = {
            name: incomeData.name,
            amount: incomeData.amount,
            crop_id: incomeData.crop_id, 
        }
        return fetch(INCOME_URL, {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(sendableIncomeData)
        })
        .then(response => response.json())
        .then(income => {
            if(income.error) {
                alert(income.error)
            } else {
                dispatch({
                    type: ADD_INCOME,
                    income
                })
                dispatch(getCurrentUser())
            }
        })
        .catch((error) => {
            console.log('Error', error)
        });
    }
}

export const deleteIncome = (incomeId) => {
    return (dispatch) => {
        return fetch(`${INCOME_URL}/${incomeId}`, {
            credentials: "include",
            method: "DELETE",
        })
        .then(resp => resp.json())
        .then(() => {
            dispatch({
                type: DELETE_INCOME,
                incomeId
            })
            dispatch(getCurrentUser())
        })
    }
}