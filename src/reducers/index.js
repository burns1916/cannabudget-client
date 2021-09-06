// import { currentUserReducer } from './currentUser';
import { incomeTransactionReducer } from './incomeTransactions';
import { expenseTransactionReducer } from './expenseTransactions';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    // currentUser: currentUserReducer,
    incomeTransactions: incomeTransactionReducer,
    expenseTransactions: expenseTransactionReducer,

})

export default rootReducer