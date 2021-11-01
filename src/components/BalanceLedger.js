import React from 'react';
import classes from './Transaction.module.css'

const BalanceLedger = props => {

    const incomeValues = []
    props.incomes.forEach(income => incomeValues.push(income.amount))
    const incomeTotals = incomeValues.reduce((acc, val) => acc + val, 0)

    const expenseValues = []
    props.expenses.forEach(expense => expenseValues.push(expense.amount))
    const expenseTotals = expenseValues.reduce((acc, val) => acc + val, 0)

    const balance = incomeTotals - expenseTotals 

    return(
        <>
            <div className={classes.balanceContainer}>
            <h3 >Balance:</h3><span className={classes.balanceAmount}>${balance}</span>
            <br />
            <br />
            </div>
            <div div className={classes.incomeExpenseContainer}>
                <div className={classes.totalIncomeContainer}><h5>Total Sales:</h5><span className={classes.incomeAmount}>${incomeTotals}</span></div><br />
                <div className={classes.totalExpenseContainer}><h5>Total Expenses:</h5><span className={classes.expenseAmount}>${expenseTotals}</span></div><br />
                <br />
                <br />
            </div>
        </>
    )
}

export default BalanceLedger