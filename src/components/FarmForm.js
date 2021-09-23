import React from "react";

const FarmForm = props => {

    const display = props.display ? "block" : "none"
    const { name, location, toggle, onChange, onSubmit } = props

    return (
        <div id="myModal" style={{ display }}>
        <button onClick={toggle}>Close Farm Form</button>
        <form onSubmit={onSubmit}>
            <label>Farm Name:</label>
            <input placeholder="name" value={name} type="text" name="name" onChange={onChange} />
            <label>Location:</label>
            <input placeholder="location" value={location} type="text" name="location" onChange={onChange} />
            <input type="submit" value="Submit" />
        </form>
        </div>
    )
}

export default FarmForm