import { currentUserReducer } from './currentUser'
import { farmsReducer } from './farms'
import { combineReducers } from 'redux';
import { cropsReducer } from './crops';
import { incomesReducer } from './incomes';
import { expensesReducer } from './expenses';

const rootReducer = combineReducers({
    currentUser: currentUserReducer,
    farms: farmsReducer,
    crops: cropsReducer,
    incomes: incomesReducer,
    expenses: expensesReducer,

})

export default rootReducer