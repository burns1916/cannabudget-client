import React from "react";
import { connect } from 'react-redux';
import { deleteExpense } from '../actions/expenses';
import classes from './Transaction.module.css'

const Expenses = props => {
    
    const onClick = () => {
        props.deleteExpense(props.id)
    }

    return (
        <>
        <div className={classes.transactionContainer}>
        <h4 className={classes.title}>Name: {props.name}</h4>
        <button onClick={onClick} className={classes.deleteBtn}><i className="fa fa-trash" aria-hidden="true"></i></button>
        </div>      
        <strong className={classes.title}>Amount:</strong> <span className={classes.expenseAmount}>${props.amount}</span>
        <br />
        <br />
        </>
    )
}

export default connect(null, { deleteExpense })(Expenses)
