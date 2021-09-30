import React from 'react';
import { connect } from 'react-redux';
import { deleteFarm } from '../actions/farms';
import { NavLink } from 'react-router-dom';

const Farms = props => {

     const onClickDelete = () => {
        props.deleteFarm(props.id)
     }
     
        return(
            <div>
            <h2>Name: {props.name}</h2>
            <h3>Location: {props.location}</h3>
            <button onClick={onClickDelete}>Delete</button>
            <NavLink to={`/farms/${props.id}`}>Manage Farm</NavLink>
            </div>
          );
}

const mapStateToProps = state => {
     return {
          currentUser: state.currentUser.currentUser,
          farms: state.farms.farms,
      } 
}

export default connect(mapStateToProps, { deleteFarm })(Farms)