import React from "react";
import { connect } from 'react-redux';
import { deleteExpense } from '../actions/expenses';

const Expenses = props => {
    
    const onClick = () => {
        props.deleteExpense(props.id)
    }

    return (
        <>
        <h4>Name: {props.name}</h4>
        <h4>Amount: {props.amount}</h4>
        <button onClick={onClick}>Delete</button>
        </>
    )
}

export default connect(null, { deleteExpense })(Expenses)
