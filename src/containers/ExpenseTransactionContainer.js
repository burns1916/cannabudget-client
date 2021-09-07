import React from 'react';
import { connect } from 'react-redux';
import { uuid } from 'uuid' 
import AddExpenseTransaction from '../components/AddExpenseTransaction';
import ExpenseList from '../components/ExpenseList';
import { addExpense, getExpense } from '../actions/expenseTransactions'


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

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps,{addExpense, getExpense})(ExpenseTransactionContainer)