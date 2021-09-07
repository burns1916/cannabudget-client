import React from 'react';
import { connect } from 'react-redux';
import { uuid } from 'uuid' 
import AddExpenseTransaction from '../components/AddExpenseTransaction';
import ExpenseList from '../components/ExpenseList'

class ExpenseTransactionContainer extends React.Component {
    state = {
        id: uuid(),
        name: '',
        amount: '',
    }

    

    render() {
        return(

        )
    }
}

const mapStateToProps = state => {
    expenseTransactions: state.expenseTransactions
}

export default connect(mapStateToProps,{addExpense, deleteExpense, getExpense})(ExpenseTransactionContainer)