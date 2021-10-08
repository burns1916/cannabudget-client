import React, { Component } from "react";
import { connect } from "react-redux";
import { setCrop, unsetCrop } from '../actions/crops'

class CropPage extends Component {

    componentDidMount() {
        const id = this.props.match.params.id
        this.props.setCrop(id)
        debugger;
    }

    componentWillUnmount() {
        this.props.unsetCrop()
    }

    render() {
        const { strain_name } = this.props
        return (
            <>
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