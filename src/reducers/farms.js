import {
    ADD_FARM,
    DELETE_FARM,
    EDIT_FARM,
    GET_FARMS,
    SET_FARM,
    UNSET_FARM,

} from '../actionTypes'

const initialState = {
    farms: [],
    selectedFarm: null,
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
        default:
            return state
    }
} 