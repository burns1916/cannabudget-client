import {
    ADD_FARM,
    DELETE_FARM,
    GET_FARMS,
    EDIT_FARM,
    SET_FARM,
    UNSET_FARM,

} from '../actionTypes'
import { getCurrentUser } from './currentUser'

const BASE_URL = 'http://localhost:3001'
const FARM_URL = `${BASE_URL}/farms`

export const getFarms = () => {
    return (dispatch) => {
        fetch(FARM_URL, {
            credentials: "include",
        })
        .then(resp => resp.json())
        .then(farms => dispatch({
            type: GET_FARMS,
            farms
        }))
    }
}

export const setFarm = (farmId) => {
    return dispatch => {
        fetch(`${FARM_URL}/${farmId}`, {
            credentials: "include"
        })
        .then(resp => resp.json())
        .then(farm => dispatch({
            type: SET_FARM,
            farm
        }))
    }
}

export const unsetFarm = () => ({ type: UNSET_FARM })