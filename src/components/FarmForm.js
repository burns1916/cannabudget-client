import React from "react";

const FarmForm = props => {

    const { name, location, total } = props

    return (
        <div>
        <form onSubmit={onSubmit}>
            <label>Farm Name:</label>
            <input placeholder="name" value={name} type="text" name="name" onChange={onChange} />
            <label>Location:</label>
            <input placeholder="location" value={location} type="text" name="location" onChange={onChange} />
            <label>Yield:</label>
            <input placeholder="total" value={total} type="text" name="total" onChange={onChange} />
        </form>
        </div>
    )
}

export default FarmForm