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
            <div className={classes.farmContainer}>
            <h2 className={classes.title}>{props.name}</h2>
            <button onClick={onClickDelete} className={classes.deleteBtn}><i className="fa fa-trash" aria-hidden="true"></i></button>
            </div>
            <h3 className={classes.title}> {props.location}</h3>
            <NavLink to={`/farms/${props.id}/crops`} className={classes.link}>Manage Crops</NavLink>
            <br />
            <br />

            </div>
          );
}

export default connect(null, { deleteFarm })(Farms)