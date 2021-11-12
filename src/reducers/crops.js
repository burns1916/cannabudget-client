import {
    ADD_CROP,
    DELETE_CROP,
    GET_CROPS,
    SET_CROP,
    UNSET_CROP,
} from '../actionTypes';

const initialState = {
    crops: [],
    selectedCrop: null,
}

export function cropsReducer(state = initialState, action) {
    switch(action.type) {
        case GET_CROPS:
            return {...state, crops: action.crops}
        case ADD_CROP:
            return {...state, crops: [...state.crops, action.crop]}
        case SET_CROP:
            return {...state, selectedCrop: action.crop}
        case UNSET_CROP:
            return {...state, selectedCrop: null}
        case DELETE_CROP:
            return {...state, crops: [...state.crops.filter(crop => crop.id !== action.cropId)]}
        default:
            return state
    }
}