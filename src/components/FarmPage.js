import React, { Component } from "react";
import { connect } from "react-redux";
import { setFarm, unsetFarm } from '../actions/farms'

class FarmPage extends Component {

    render() {
        return (
            <>
                <h2>Farm Name: {this.props.name}</h2>
                <h3>Location: {this.props.location} </h3>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    currentUser: state.currentUser.currentUser,
    farms: state.farms.farms,
})

export default connect(mapStateToProps, { setFarm, unsetFarm })(FarmPage)
