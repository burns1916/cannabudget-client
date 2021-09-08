import React from 'react'
import classes from './AddExpenseTransaction.module.css'

const AddExpenseTransaction = props => {

    const {name, amount, onChange, onSubmit} = props
    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className={classes.InputGroupExpense}>
                    <input type="text" placeholder="Add expense" autoComplete="off" name="name" onChange={onChange} value={name}/>
                    <input type="number" placeholder="Add Amount" autoComplete="off" name="amount" onChange={onChange} value={amount} />
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </div>
    )
}

export default AddExpenseTransaction
