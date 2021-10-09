import React, { Component } from "react";
import { connect } from "react-redux";
import { setCrop, unsetCrop } from '../actions/crops'

class CropPage extends Component {

    componentDidMount() {
        const id = this.props.match.params.id
        this.props.setCrop(id)
    }

    componentWillUnmount() {
        this.props.unsetCrop()
    }

    render() {
        debugger;
        const { strain_name, farm.name } = this.props
        return (
            <>
                <h1>{farm.name}</h1>
                <h2>Strain Name: { strain_name }</h2>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    ...state.crops.selectedCrop,
    currentUser: state.currentUser.currentUser
})

export default connect(mapStateToProps, { setCrop, unsetCrop })(CropPage)