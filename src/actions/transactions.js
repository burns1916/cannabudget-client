import {
    GET_TRANSACTIONS,
    ADD_TRANSACTION,
    REMOVE_TRANSACTION,
} from '../actionTypes';

import { getCurrentUser } from './currentUser';

const BASE_URL = 'https://localhost:3001';
const TRANSACTION_URL = `${BASE_URL}/transactions`

export const getTransactions = () => {
    return (dispatch) => {
        fetch(TRANSACTION_URL, {
            credentials: "include",
        })
        .then(resp => resp.json())
        .then(transactions => dispatch({
            type: GET_TRANSACTIONS,
            transactions
        }))
    }
}