import React from 'react';
import { connect } from 'react-redux';
import { deleteFarm } from '../actions/farms';
import { NavLink } from 'react-router-dom';
import classes from './Farm.module.css'


const Farms = props => {

     const onClickDelete = () => {
        props.deleteFarm(props.id)
     }
     
        return(
            <div>
            <h2 className={classes.title}>Name: {props.name}</h2>
            <h3 className={classes.title}>Location: {props.location}</h3>
            <button onClick={onClickDelete} className={classes.deleteBtn}>Delete</button>
            <NavLink to={`/farms/${props.id}/crops`} className={classes.link}>Manage Crops</NavLink>
            </div>
          );
}

export default connect(null, { deleteFarm })(Farms)