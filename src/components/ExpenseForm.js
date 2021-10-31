import React from 'react';
import classes from './Transaction.module.css'

const ExpenseForm = props => {
    const display = props.display ? "block" : "none"
    const { name, amount, onChange, onSubmit } = props

    return (
        <div id="myModal" style={{ display }}>
            <div className={classes.incomeContainer}>
            <form onSubmit={onSubmit}>
                <label className={classes.inputTitle}>Name:</label>
                <input placeholder="Name" value={name} type="text" name="name" onChange={onChange} className={classes.inputForm} />
                <br />
                <label className={classes.inputTitle}>Amount:</label>
                <input placeholder="Amount" value={amount} type="text" name="amount" onChange={onChange} className={classes.inputForm}/>
                <input type="submit" value="Submit" className={classes.submitBtn} />
            </form>
            </div>
        </div>
    )
}

export default ExpenseForm