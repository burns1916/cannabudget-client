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
        <div className={classes.transactionContainer}>
        <h4 className={classes.title}>Name: {props.name}</h4>
        <button onClick={onClick} className={classes.deleteBtn}><i class="fa fa-trash" aria-hidden="true"></i></button>
        </div>      
        <strong className={classes.title}>Amount:</strong> <span className={classes.incomeAmount}>${props.amount}</span>
        <br />
        <br />
  
        </>
    )
}

export default connect(null, { deleteIncome })(Incomes)
