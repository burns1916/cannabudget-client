import React from 'react';
import { connect } from 'react-redux';
import { uuid } from 'uuid' 
import AddExpenseTransaction from '../components/AddExpenseTransaction';
import ExpenseList from '../components/ExpenseList';
import { addExpense, getExpense } from '../actions/expenseTransactions'


class ExpenseTransactionContainer extends React.Component {
    
    state = {
        expense: {
            id: uuid(),
            name: '',
            amount: '',
        },
    }

    

    render() {
        return(
            <AddExpenseTransaction {...this.state.expense} onChange={this.onChange} onSubmit={this.onSubmit}/>
        )
    }
}

const mapStateToProps = state => {
    expenseTransactions: state.expenseTransactions
}


export default connect(mapStateToProps,{addExpense, getExpense})(ExpenseTransactionContainer)