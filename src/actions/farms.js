import {
    ADD_FARM,
    DELETE_FARM,
    GET_FARMS,
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

export const addFarm = (farmData) => {
    return dispatch => {
        const sendableFarmData = {
            name: farmData.name,
            location: farmData.location,
        }
        return fetch(FARM_URL, {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(sendableFarmData),
        })
        .then(response => response.json())
        .then(farm => {
            if (farm.error) {
                alert(farm.error)
            } else {
                dispatch ({
                    type: ADD_FARM,
                    farm
                })
                dispatch(getCurrentUser())
            }
        })
        .catch((error) => {
            console.log('Error:', error)
        });
    }
}

export const deleteFarm = (farmId) => {
    return (dispatch) => {
        return fetch(`${FARM_URL}/${farmId}`, {
            credentials: "include",
            method: "DELETE",
        })
        .then(resp => resp.json())
        .then(() => {
            dispatch({
                type: DELETE_FARM,
                farmId
            })
            dispatch(getCurrentUser())
        })
    }
}



