// import { currentUserReducer } from './currentUser';
import { incomeTransactionReducer } from './incomeTransactions';
import { expenseTransactionReducer } from './expenseTransactions';
import { currentUserReducer } from './currentUser'
import { farmsReducer } from './farms'

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    currentUser: currentUserReducer,
    incomeTransactions: incomeTransactionReducer,
    expenseTransactions: expenseTransactionReducer,
    farms: farmsReducer,

})

export default rootReducer