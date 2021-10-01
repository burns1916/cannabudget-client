// import { currentUserReducer } from './currentUser';
import { currentUserReducer } from './currentUser'
import { farmsReducer } from './farms'
import { combineReducers } from 'redux';
import { cropsReducer } from './crops';

const rootReducer = combineReducers({
    currentUser: currentUserReducer,
    farms: farmsReducer,
    crops: cropsReducer,

})

export default rootReducer