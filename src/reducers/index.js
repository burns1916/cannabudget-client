// import { currentUserReducer } from './currentUser';
import { currentUserReducer } from './currentUser'
import { farmsReducer } from './farms'

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    currentUser: currentUserReducer,
    farms: farmsReducer,

})

export default rootReducer