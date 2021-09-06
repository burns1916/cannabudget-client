import React from 'react'
import classes from './Balance.module.css'

export const Balance = () => {
    return (
        <div className={classes.Balance}>
            <h2>Balance</h2>
            <h3>$0.00</h3>
            <div className={classes.IncomeExpense}>
                <div className={classes.Plus}>
                    <h3>Income</h3>
                    <h2>+$0</h2>
                </div>
                <div className={classes.Minus}>
                    <h3>Expense</h3>
                    <h2>-$0</h2>
                </div>
            </div>
        </div>
    )
}

export default Balance
