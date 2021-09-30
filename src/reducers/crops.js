import {
    ADD_CROP,
    DELETE_CROP,
    GET_CROPS,
    EDIT_CROP,
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
        case EDIT_CROP:
            return {...state, crops: [...state.crops.map(crop => crop.id === action.id ? action.crop : crop)]}
        case SET_CROP:
            return {...state, selectedCrop: action.crop}
        case UNSET_CROP:
            return {...state, selectedCrop: null}
        case DELETE_CROP:
            return {...state, selectedfarm: action.crop}
        default:
            return state
    }
}