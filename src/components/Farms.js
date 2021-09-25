import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteFarm } from '../actions/farms';
import { Link } from 'react-router-dom';

class Farms extends Component {

     onClick = (id) => {
        this.props.deleteFarm(id)
     }

     render() {
        return(
            <>
          {this.props.currentUser && this.props.farms.filter(farm => farm.user.id === this.props.currentUser.id).map((farm) =>
            <div>
            <h2>Name: {farm.name}</h2>
            <h3>Location: {farm.location}</h3>
            <Link key={farm.id} to={`/farms/${farm.id}`}>Manage Crops</Link>
            <button onClick={this.onClick.bind(this, farm.id)}>Delete</button>
            </div>
          )}
            </>   
        )
     }
}

const mapStateToProps = state => {
     return {
          currentUser: state.currentUser.currentUser,
          farms: state.farms.farms,
      } 
}

export default connect(mapStateToProps, { deleteFarm })(Farms)