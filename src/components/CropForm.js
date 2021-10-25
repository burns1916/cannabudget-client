import React from "react";
import classes from './Crop.module.css'

const CropForm = props => {

    const display = props.display ? "block" : "none"
    const { strain_name, onChange, onSubmit } = props

    return (
        <div id="myModal" style={{ display }}>
        <form onSubmit={onSubmit}>
            <label className={classes.title}>Strain Name:</label>
            <input placeholder="strain name" value={strain_name} type="text" name="strain_name" onChange={onChange} className={classes.formInput} />
            <input type="submit" value="Submit" className={classes.submitBtn} />
        </form>
        </div>
    )
}

export default CropForm