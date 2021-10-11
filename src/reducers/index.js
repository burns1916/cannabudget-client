import { currentUserReducer } from './currentUser'
import { farmsReducer } from './farms'
import { combineReducers } from 'redux';
import { cropsReducer } from './crops';
import { incomesReducer } from './incomes';

const rootReducer = combineReducers({
    currentUser: currentUserReducer,
    farms: farmsReducer,
    crops: cropsReducer,
    incomes: incomesReducer,

})

export default rootReducer