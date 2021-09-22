import React, { Component } from "react";
import { connect } from "react-redux";
import { setFarm, unsetFarm, setCrop, unsetCrop } from '../actions/farms'

class CropPage extends Component {

    componentDidMount() {
        const id = this.props.match.params.id
        const farmId = this.props.match.params.farm_id
        this.props.setCrop(id)
        this.props.setFarm(farmId)
    }

    componentWillUnmount() {
        this.props.unsetCrop()
        this.props.unsetFarm()
    }

    render() {
        const { strain_name, harvest_date } = this.props
        return (
            <>
                <h2>Strain Name: { strain_name }</h2>
                <h3>Harvest Date: { harvest_date } </h3>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    ...state.farms.selectedFarm,
    ...state.crop.selectedCrop,
    currentUser: state.currentUser.currentUser
})

export default connect(mapStateToProps, { setFarm, unsetFarm, setCrop, unsetCrop })(CropPage)