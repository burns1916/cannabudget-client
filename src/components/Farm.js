import { connect } from 'react-redux';
import { deleteFarm } from '../actions/farms';

const Farm = props => {

   const onClick = () => {
        props.deleteFarm(props.id)
   }

        return(
            <div>
            <h2>Name: {props.name}</h2>
            <h3>Location: {props.location}</h3>
            <p>Total Yield: {props.total}</p> 
            <button onClick={onClick}>Delete</button>
            </div>   
        )
}

export default connect(null, { deleteFarm })(Farm)