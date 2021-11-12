import {
    ADD_CROP,
    DELETE_CROP,
    GET_CROPS,
    SET_CROP,
    UNSET_CROP,
} from '../actionTypes';
import { getCurrentUser } from './currentUser';

const BASE_URL = 'http://localhost:3001'
const CROP_URL = `${BASE_URL}/crops`

export const getCrops = () => {
    return (dispatch) => {
        fetch(`${BASE_URL}/crops`, {
            credentials: "include",
        })
        .then(resp => resp.json())
        .then(crops => dispatch({
            type: GET_CROPS,
            crops
        }))
    }
}

export const setCrop = (cropId) => {
    return dispatch => {
        fetch(`${CROP_URL}/${cropId}`, {
            credentials: "include",
        })
        .then(resp => resp.json())
        .then(crop => dispatch({
            type: SET_CROP,
            crop
        }))
    }
}

export const unsetCrop = () => ({ type: UNSET_CROP })

export const addCrop = (cropData) => {
    return dispatch => {
        const sendableCropData = {
            strain_name: cropData.strain_name,
            farm_id: cropData.farm_id,
        }
    return fetch(`${BASE_URL}/farms/${cropData.farm_id}/crops`, {
        credentials: "include",
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(sendableCropData),
    })
    .then(response => response.json())
    .then(crop => {
        if (crop.error) {
            alert(crop.error)
        } else {
            dispatch({
                type: ADD_CROP,
                crop
            })
            dispatch(getCurrentUser())
        }
    })
    .catch((error) => {
        console.log('Error:', error)
    });
    }
}

export const deleteCrop = (cropId) => {
    return (dispatch) => {
        return fetch(`${CROP_URL}/${cropId}`, {
            credentials: "include",
            method: "DELETE",
        })
        .then(resp => resp.json())
        .then(() => {
            dispatch({
                type: DELETE_CROP,
                cropId
            })
            dispatch(getCurrentUser())
        })
    }
}

