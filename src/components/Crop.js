import { connect } from 'react-redux';
import { deleteCrop } from '../actions/crops';

const Crop = props => {

   const onClick = () => {
        props.deleteFarm(props.id)
   }

        return(
            <div>
            <h2>Strain Name: {props.strain_name}</h2>
            <h3>Harvest Date: {props.harvest_date}</h3>
            <button onClick={onClick}>Delete</button>
            </div>   
        )
}

export default connect(null, { deleteCrop })(Crop)