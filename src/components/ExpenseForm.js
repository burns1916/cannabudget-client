import React from 'react';
import classes from './Transaction.module.css'

const ExpenseForm = props => {
    const display = props.display ? "block" : "none"
    const { name, amount, onChange, onSubmit, toggle } = props

    return (
        <div id="myModal" style={{ display }}>
        <button onClick={toggle} className={classes.formBtn}>Close Expense Form</button>
            <form onSubmit={onSubmit}>
                <label className={classes.title}>Name:</label>
                <input placeholder="Name" value={name} type="text" name="name" onChange={onChange} className={classes.inputForm} />
                <label className={classes.title}>Amount:</label>
                <input placeholder="Amount" value={amount} type="text" name="amount" onChange={onChange} className={classes.inputForm}/>
                <input type="submit" value="Submit" className={classes.submitBtn} />
            </form>
        </div>
    )
}

export default ExpenseForm