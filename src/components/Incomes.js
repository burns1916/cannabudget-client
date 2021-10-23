import React from "react";
import { connect } from 'react-redux';
import { deleteIncome } from '../actions/incomes';
import classes from './Transaction.module.css'

const Incomes = props => {
    
    const onClick = () => {
        props.deleteIncome(props.id)
    }

    return (
        <>
        <h4 className={classes.title}>Name: {props.name}</h4>
        <h4 className={classes.title}>Amount: {props.amount}</h4>
        <button onClick={onClick} className={classes.deleteBtn}>Delete</button>
        </>
    )
}

export default connect(null, { deleteIncome })(Incomes)
