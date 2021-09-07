import React from 'react'
import classes from './AddExpenseTransaction.module.css'

const AddExpenseTransaction = () => {
    return (
        <div>
            <form>
                <div className={classes.InputGroupExpense}>
                    <input type="text" placeholder="Add expense" autoComplete="off" />
                    <input type="number" placeholder="Add Amount" autoComplete="off" />
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </div>
    )
}

export default AddExpenseTransaction
