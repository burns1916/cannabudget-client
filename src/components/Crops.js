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
             <>
            <div className={classes.cropContainer}>
            <h4 className={classes.title}>Strain:</h4>
            <h3>{props.strain_name}</h3>
            <button onClick={onClick} className={classes.deleteBtn}><i class="fa fa-trash" aria-hidden="true"></i></button>
            </div>
            <NavLink to={`/farms/${props.farm.id}/crops/${props.id}`} className={classes.link}>Budget</NavLink>
            </>      
        )
}



export default connect(null, { deleteCrop })(Crops)