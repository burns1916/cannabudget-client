import React from "react";

const CropForm = props => {

    const display = props.display ? "block" : "none"
    const { strain_name, harvest_date, toggle, onChange, onSubmit } = props

    return (
        <div id="myModal" style={{ display }}>
        <button onClick={toggle}>Close Crop Form</button>
        <form onSubmit={onSubmit}>
            <label>Strain Name:</label>
            <input placeholder="strain name" value={strain_name} type="text" name="strain_name" onChange={onChange} />
            <label>Harvest Date:</label>
            <input placeholder="harvest date" value={harvest_date} type="text" name="harvest_date" onChange={onChange} />
            <input type="submit" value="Submit" />
        </form>
        </div>
    )
}

export default CropForm