import React from 'react';
import { connect } from 'react-redux';
import { deleteCrop } from '../actions/crops';
import { NavLink } from 'react-router-dom';
import classes from './Crop.module.css'


const Crops = props => {

   const onClick = () => {
        props.deleteCrop(props.id)
   }

        return(
            <div>
            <h2 className={classes.title}>Strain Name: {props.strain_name}</h2>
            <button onClick={onClick} className={classes.deleteBtn}>Delete</button>
            <NavLink to={`/farms/${props.farm.id}/crops/${props.id}`} className={classes.link}>Manage Transactions</NavLink>   
            </div>   
        )
}



export default connect(null, { deleteCrop })(Crops)