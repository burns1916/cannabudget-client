import { connect } from 'react-redux';
import { deleteFarm } from '../actions/farms';

const Farm = props => {

    const onClick = () => {
        props.deleteFarm(props.id)

        return(
            <div>
            <h2>{props.name}</h2>
            <h2>{props.location}</h2>
            <h3>{props.total}</h3>
            <button onClick={onClick}>Delete</button> 
            </div>   
        )
    }

    <div>

    </div>
}

export default connect(null, { deleteFarm })(Farm)