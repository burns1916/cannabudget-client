import React, { Component } from "react";
import { connect } from "react-redux";
import { setFarm, unsetFarm } from '../actions/farms'

class FarmPage extends Component {

    componentDidMount() {
        const id = this.props.match.params.id
        this.props.setFarm(id)
    }

    componentWillUnmount() {
        this.props.unsetFarm()
    }

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
    ...state.farms.selectedFarm,
    currentUser: state.currentUser.currentUser
})

export default connect(mapStateToProps, { setFarm, unsetFarm })(FarmPage)
