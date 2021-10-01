import React, { Component } from "react";
import { connect } from "react-redux";
import { setFarm, unsetFarm } from '../actions/farms'
import CropContainer from "../containers/CropContainer";
import Crop from "./Crop";

class FarmPage extends Component {

    componentDidMount() {
        const id = this.props.match.params.id
        this.props.setFarm(id)
    }

    componentDidUnount() {
        this.props.unsetFarm()
    }

    render() {
        const {name, location} = this.props
        return (
            <div>
                <h2>Farm Name:</h2>{JSON.stringify(name)}
                <h3>Location:</h3> {JSON.stringify(location)}
                <br />
                <CropContainer />
                <Crop />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    ...state.farms.selectedFarm,
    currentUser: state.currentUser.currentUser,
    crops: state.crops.crops,
})

export default connect(mapStateToProps, { setFarm, unsetFarm })(FarmPage)
