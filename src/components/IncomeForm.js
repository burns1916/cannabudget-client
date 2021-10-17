import React from 'react';

const IncomeForm = props => {
    const display = props.display ? "block" : "none"
    const { name, amount, onChange, onSubmit, toggle } = props

    return (
        <div id="myModal" style={{ display }}>
            <button onClick={toggle}>Close Income Form</button>
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

export default IncomeForm