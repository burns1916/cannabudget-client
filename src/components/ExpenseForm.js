import React from 'react';

const ExpenseForm = props => {
    const { name, amount, onChange, onSubmit } = props

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>Name:</label>
                <input placeholder="Name" value={name} type="text" name="name" onChange={onChange} />
                <label>Amount:</label>
                <input placeholder="Amount" value={amount} type="text" name="amount" onChange={onChange} />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default ExpenseForm