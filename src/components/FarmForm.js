import React from "react";
import classes from './Farm.module.css'

const FarmForm = props => {

    const display = props.display ? "block" : "none"
    const { name, location, onChange, onSubmit } = props

    return (
        <div id="myModal" style={{ display }}>
        <form onSubmit={onSubmit}>
            <label className={classes.title}>Farm Name:</label>
            <input placeholder="name" value={name} type="text" name="name" onChange={onChange} className={classes.inputForm} />
            <label className={classes.title}>Location:</label>
            <input placeholder="location" value={location} type="text" name="location" onChange={onChange} className={classes.inputForm}/>
            <input type="submit" value="Submit" className={classes.submitBtn} />
        </form>
        </div>
    )
}

export default FarmForm