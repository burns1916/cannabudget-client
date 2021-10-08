import React from 'react';
import { connect } from 'react-redux';
import { deleteCrop } from '../actions/crops';
import { NavLink } from 'react-router-dom';


const Crops = props => {

   const onClick = () => {
        props.deleteCrop(props.id)
   }

        return(
            <div>
            <h2>Strain Name: {props.strain_name}</h2>
            <button onClick={onClick}>Delete</button>
            <NavLink to={`/farms/${props.farm.id}/crops/${props.id}`}>Manage Transactions</NavLink>   
            </div>   
        )
}



export default connect(null, { deleteCrop })(Crops)