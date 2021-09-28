import {
    ADD_FARM,
    DELETE_FARM,
    EDIT_FARM,
    GET_FARMS,
    SET_FARM,
    UNSET_FARM,
    ADD_CROP,
    DELETE_CROP,
    GET_CROPS,
    EDIT_CROP,
    SET_CROP,
    UNSET_CROP,
} from '../actionTypes'

const initialState = {
    farms: [],
    selectedFarm: null,
    crops: [],
    selectedCrop: null,
}

export function farmsReducer(state = initialState, action) {
    switch(action.type) {
        case GET_FARMS:
            return {...state, farms: action.farms}
        case ADD_FARM:
            return {...state, farms: [...state.farms, action.farm]}
        case DELETE_FARM:
            return {...state, farms: [...state.farms.filter(farm => farm.id !== action.farmId)]}
        case EDIT_FARM:
            return {...state, 
                  farms: [...state.farms.map(farm => farm.id === action.farm.id ? action.farm : farm)]
                }
        case SET_FARM:
            return {...state, selectedFarm: action.farm}
        case UNSET_FARM:
            return {...state, selectedFarm: null}
        case GET_CROPS:
            return {...state, crops: action.crops, selectedFarm: action.crops}
        case ADD_CROP:
            return {...state, crops: [...state.crops, action.crop], selectedFarm: action.crop}
        case EDIT_CROP:
            return {...state, crops: [...state.crops.map(crop => crop.id === action.id ? action.crop : crop)], selectedFarm: action.crop}
        case SET_CROP:
            return {...state, selectedCrop: action.crop, selectedFarm: action.crop}
        case UNSET_CROP:
            return {...state, selectedCrop: null}
        case DELETE_CROP:
            return {...state, selectedfarm: action.crop}
        default:
            return state
    }
} 