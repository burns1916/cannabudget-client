import { connect } from 'react-redux';
import { deleteFarm, setFarm } from '../actions/farms';

const Farm = props => {

   const onClick = () => {
        props.deleteFarm(props.id)
   }

   const selectFarm = () => {
        props.setFarm(props.id)
   }

        return(
            <div>
            <h2>Name: {props.name}</h2>
            <h3>Location: {props.location}</h3>
            <button onClick={selectFarm}>Select Farm</button>
            <button onClick={onClick}>Delete</button>
            </div>   
        )
}

export default connect(null, { deleteFarm, setFarm })(Farm)