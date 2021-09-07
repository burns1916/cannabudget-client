import React, { Component } from 'react'
import classes from './ExpenseList.module.css'
import { connect } from 'react-redux'

class ExpenseList extends Component {

    expensesList = () => { this.props.expenseTransactions.map((expense) => {
                <li className={classes.Transaction}>
                <span key={expense.id}>{expense.name}</span>
                <span key={expense.id}>{expense.amount}</span>
                <button className={classes.DeleteBtn}><i className="fas fa-trash"></i></button>
                </li>
        });
    }

    render() {
    return (
        <div className={classes.TransactionsExpense}>
        <h2>Expense Transaction History</h2>
        <ul className={classes.TransacitonList}>
            {this.expensesList}
        </ul>
    </div>
    )
    }
}

const mapStateToProps = state => {
    return{
        expenseTransactions: state.expenseTransactions
    }
}

export default connect(mapStateToProps)(ExpenseList)
