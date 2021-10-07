import React from 'react';
import { connect } from 'react-redux';
import { deleteCrop } from '../actions/crops';

const Crop = props => {

   const onClick = () => {
        props.deleteCrop(props.id)
   }

        return(
            <div>
            <h2>Strain Name: {props.strain_name}</h2>
            <button onClick={onClick}>Delete</button>
            </div>   
        )
}



export default connect(null, { deleteCrop })(Crop)