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
        <h4 className={classes.title}>Name: {props.name}</h4>
        <h4 className={classes.title}>Amount: {props.amount}</h4>
        <button onClick={onClick} className={classes.deleteBtn}>Delete</button>
        </>
    )
}

export default connect(null, { deleteExpense })(Expenses)
