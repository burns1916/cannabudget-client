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
            <br />
            <div className={classes.cropContainer}>
            <h3 className={classes.title}>Strain: {props.strain_name}</h3>
            <button onClick={onClick} className={classes.deleteBtn}><i class="fa fa-trash" aria-hidden="true"></i></button>
            </div>
            <NavLink to={`/farms/${props.farm.id}/crops/${props.id}`} className={classes.link}>Budget</NavLink>
            <br />
            <br />
          </div>      
        )
}



export default connect(null, { deleteCrop })(Crops)