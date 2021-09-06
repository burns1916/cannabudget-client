import { currentUserReducer } from './currentUser';
import { transactionReducer } from './transactions';

import { combineReducers } from 'redux';

const reducer = combineReducers({
    currentUser: currentUserReducer,
    transactions: transactionReducer

})

export default reducer