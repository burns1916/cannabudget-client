import React, { useState } from "react";
import classes from './Farm.module.css'
import { Country, State, City } from 'country-state-city'

const FarmForm = props => {

    const display = props.display ? "block" : "none"
    const { name, location, onChange, onSubmit } = props

    const states = State.getStatesOfCountry('US')
    let [state, selectState] = useState("Select a State")

    let cities = City.getCitiesOfState('US', state)
    let [city, selectCity] = useState("Select a City")  
    console.log(cities)

    let handleStateChange = (e) => {
        selectState(e.target.value)
    }

    let handleCityChange = (e) => {
        selectCity(e.target.value)
    }

    return (
        <div id="myModal" style={{ display }}>
        <form onSubmit={onSubmit}>
            <label className={classes.title}>Farm Name:</label>
            <input placeholder="name" value={name} type="text" name="name" onChange={onChange} className={classes.inputForm} />
            <label className={classes.title}>Location:</label>
            <select onChange={handleStateChange}>
                <option value="Select a State"> -- Select a State == </option>
                {states.map((state, pos) => <option key={pos} value={state.isoCode}>{state.name}</option>)}
            </select>
            <select onChange={handleCityChange}>
                <option value="Select a City"> -- Select a City -- </option>
                {cities.map((city, pos) => <option key={pos} value={city.name}>{city.name}</option>)}
            </select>
            <input placeholder="location" value={location} type="text" name="location" onChange={onChange} className={classes.inputForm}/>
            <input type="submit" value="Submit" className={classes.submitBtn} />
        </form>
        </div>
    )
}

export default FarmForm