import React from "react";
import classes from './Crop.module.css'

const CropForm = props => {

    const display = props.display ? "block" : "none"
    const { strain_name, onChange, onSubmit } = props

    return (
        <div id="myModal" style={{ display }}>
            <br />
        <form onSubmit={onSubmit}>
            <label className={classes.inputTitle}>Strain Name:</label>
            <input placeholder="strain name" value={strain_name} type="text" name="strain_name" onChange={onChange} />
            <br />
            <br />
            <input type="submit" value="Submit" className={classes.submitBtn} />
        </form>
        <br />
        </div>
    )
}

export default CropForm