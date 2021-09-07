import React from 'react';
import classes from './AddIncomeTransaction.module.css';

const AddIncomeTransaction = () => {
    return (
        <div>
            <form>
                <div className={classes.InputGroupSale}>
                    <input type="text" placeholder="Add Sale" autoComplete="off" />
                    <input type="number" placeholder="Add Amount" autoComplete="off" />
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </div>
    )
}

export default AddIncomeTransaction
