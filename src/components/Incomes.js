import React from "react";
import { connect } from 'react-redux';
import { deleteIncome } from '../actions/incomes';

const Incomes = props => {
    
    const onClick = () => {
        props.deleteIncome(props.id)
    }

    return (
        <>
        <h4>Name: {this.props.name}</h4>
        <h4>Amount: {this.props.amount}</h4>
        <button onClick={onClick}>Delete</button>
        </>
    )
}

export default connect(null, { deleteIncome })(Incomes)
