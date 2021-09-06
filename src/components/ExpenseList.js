import React from 'react'
import classes from './ExpenseList.module.css'

export const ExpenseList = () => {
    return (
        <div className={classes.TransactionsExpense}>
        <h2>Transaction History</h2>
        <ul className={classes.TransacitonList}>
            <li className={classes.Transaciton}>
                <span className={classes.TransactionText}>Salary</span>
                <span className={classes.TransactionAmount}>$5000</span>
                <button className={classes.DeleteBtn}><i className="fas fa-trash"></i></button>
            </li>
        </ul>
    </div>
    )
}

export default ExpenseList
