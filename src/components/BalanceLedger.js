import React from 'react';

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
            <h3>Balance:</h3>{balance}<br />
            <h5>Total Income:</h5> {incomeTotals}<br />
            <h5>Total Expenses:</h5>{expenseTotals}<br />
            
        </>
    )
}

export default BalanceLedger