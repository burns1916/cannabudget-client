const initialState = {
    expenseTransactions: [],
}

export function expenseTransactionReducer(state=initialState, action) {
    switch(action.type) {
        case "ADD_EXPENSE_TRANSACTION":
            return{
                ...state,
                expenseTransactions: [...state.expenseTransactions, action.expenseTransaction]
            }
        default:
            return state;
    }
}
