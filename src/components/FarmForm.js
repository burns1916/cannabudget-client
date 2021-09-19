import React from "react";

const FarmForm = props => {

    const { name, location, yield } = this.props

    return (
        <div>
        <form onSubmit={onSubmit}>
            <label>Farm Name:</label>
            <input placeholder="name" value={name} type="text" name="name" onChange={onChange} />
            <label>Location:</label>
            <input placeholder="location" value={location} type="text" name="location" onChange={onChange} />
            <label>Yield:</label>
            <input placeholder="yield" value={yield} type="text" name="yield" onChange={onChange} />
        </form>
        </div>
    )
}

export default FarmForm