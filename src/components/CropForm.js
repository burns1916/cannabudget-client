import React from "react";


const CropForm = props => {

    const display = props.display ? "block" : "none"
    const { strain_name, toggle, onChange, onSubmit } = props

    return (
        <div id="myModal" style={{ display }}>
        <button onClick={toggle}>Close Crop Form</button>
        <form onSubmit={onSubmit}>
            <label>Strain Name:</label>
            <input placeholder="strain name" value={strain_name} type="text" name="strain_name" onChange={onChange} />
            <input type="submit" value="Submit" />
        </form>
        </div>
    )
}

export default CropForm