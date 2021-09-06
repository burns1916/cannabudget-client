import React from 'react'
import classes from './AddTransaction.module.css'

export const AddTransaction = () => {
    return (
        <div className={classes.form}>
            <form>
                <div className={classes.InputGroupSale}>
                    <input type="text" placeholder="Add Sale" autocomplete="off" />
                    <input type="number" placeholder="Add Amount" autocomplete="off" />
                    <input type="submit" value="Submit" />
                </div>
            </form>
            <form>
                <div className={classes.InputGroupExpense}>
                    <input type="text" placeholder="Add expense" autocomplete="off" />
                    <input type="number" placeholder="Add Amount" autocomplete="off" />
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </div>
    )
}

export default AddTransaction
