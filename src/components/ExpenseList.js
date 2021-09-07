import React, { Component } from 'react'
import classes from './ExpenseList.module.css'
import { connect } from 'react-redux'

class ExpenseList extends Component {

    expensesList() {
        return this.props.expenseTransactions.map((expense) => {
            return (
                <li className={classes.Transaction}>
                <span key={expense.id}>{expense.name}</span>
                <span key={expense.id}>{expense.amount}</span>
                <button className={classes.DeleteBtn}><i className="fas fa-trash"></i></button>
                </li>
            );
        });
    }

    render() {
    return (
        <div className={classes.TransactionsExpense}>
        <h2>Transaction History</h2>
        <ul className={classes.TransacitonList}>
            {this.expensesList()}
        </ul>
    </div>
    )
    }
}

function mapStateToProps(state) {
    return{
        expenseTransactions: state.expenseTransactions
    }
}

export default connect(mapStateToProps)(ExpenseList)
