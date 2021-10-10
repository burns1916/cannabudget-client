import { currentUserReducer } from './currentUser'
import { farmsReducer } from './farms'
import { combineReducers } from 'redux';
import { cropsReducer } from './crops';
import { transactionsReducer } from './transactions';

const rootReducer = combineReducers({
    currentUser: currentUserReducer,
    farms: farmsReducer,
    crops: cropsReducer,
    transactions: transactionsReducer,

})

export default rootReducer