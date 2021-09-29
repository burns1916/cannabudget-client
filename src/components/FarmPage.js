import React, { Component } from "react";
import { connect } from "react-redux";
import { setFarm, unsetFarm } from '../actions/farms'

class FarmPage extends Component {

    componentDidMount() {
        const id = this.props.match.params.id
        this.props.setFarm(id)
    }

    componentDidUnount() {
        this.props.unsetFarm()
    }

    render() {
        return (
            <>
                <h2>Farm Name:</h2>{this.props.name}
                <h3>Location:</h3> {this.props.location}
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    ...state.farms.selectedFarm,
    currentUser: state.currentUser.currentUser,
})

export default connect(mapStateToProps, { setFarm, unsetFarm })(FarmPage)
