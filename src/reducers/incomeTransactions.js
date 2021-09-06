const initialState = {
    incomeTransactions: [],
  }

  export function incomeTransactionReducer(state=initialState, action) {
      switch(action.type){
          case "ADD_INCOME_TRANSACTION":
              return {
                  ...state,
                  incomeTransactions: [...state.incomeTransactions]
              }
          default:
              return state;
      }
  }