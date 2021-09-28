import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteFarm } from '../actions/farms';

class Farms extends Component {

     onClickDelete = (id) => {
        this.props.deleteFarm(id)
     }
     
     render() {
        return(
            <>
          {this.props.currentUser && this.props.farms.filter(farm => farm.user.id === this.props.currentUser.id).map((farm, pos) =>
            <div key={pos}>
            <h2>Name: {farm.name}</h2>
            <h3>Location: {farm.location}</h3>
            <button onClick={this.onClickDelete.bind(this, farm.id)}>Delete</button>
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