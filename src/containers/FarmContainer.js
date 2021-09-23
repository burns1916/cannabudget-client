import React, { Component } from "react";
import { connect } from "react-redux";
import Farm from "../components/Farm";
import { withRouter } from 'react-router-dom';
import FarmForm from "../components/FarmForm";
import { getFarms, addFarm, editFarm } from '../actions/farms';
import { getCrops, addCrop, editCrop } from '../actions/farms';
import Crop from '../components/Crop';
import CropForm from '../components/CropForm';

class FarmContainer extends Component {

    state = {
        farmModal: false,
        farmForm: {
            name: '',
            location: '',

        },
        cropModal: false,
        cropForm: {
            strain_name: '',
            harvest_date: '',
        }
    }

    toggleFarmModal = () => this.setState({farmModal: !this.state.farmModal})
    toggleCropModal = () => this.setState({cropModal: !this.state.cropModal})

    onFarmChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({ farmForm:
            {
                ...this.state.farmForm,
                [name]: value
            }
        })
    }

    onCropChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({ cropForm:
            {
                ...this.state.cropForm,
                [name]: value
            }
        })
    }

    onFarmSubmit = (e) => {
        e.preventDefault();
        if (this.state.farmForm.id) {
            this.props.editFarm(this.state.farmForm)
        } else {
            this.props.addFarm(this.state.farmForm)
        }
        this.setState({
            farmModal: false,
            farmForm: {
                name: '',
                location: '',
            }
        })
    }

    onCropSubmit = (e) => {
        e.preventDefault();
        if (this.state.cropForm.id) {
            this.props.editCrop(this.state.cropForm)
        } else {
            this.props.addCrop(this.state.cropForm)
        }
        this.setState({
            cropModal: false,
            cropForm: {
                strain_name: '',
                harvest_date: '',
            }
        })
    }
    
    componentDidMount(){
        this.props.getFarms()
        this.props.getCrops()
    }

    openNewFarmForm = () => this.setState({
        farmModal: true,
        farmForm: {
            name: '',
            location: '',
        }
    })

    
    openNewCropForm = () => this.setState({
        cropModal: true,
        cropForm: {
            strain_name: '',
            harvest_date: '',
        }
    })

    populateFarmForm = (farm) => this.setState({
        farmModal: true,
        farmForm: {
            name: farm.name,
            location: farm.location,
        }
    })

    populateCropForm = (crop) => this.setState({
        cropModal: true,
        farmForm: {
            strain_name: crop.strain_name,
            harvest_date: crop.harvest_date,
        }
    })

    renderMyFarms = () => {
        return (
            <>
            <button onClick={this.openNewFarmForm}>New Farm</button>
            <FarmForm toggle={this.toggleFarmModal} {...this.state.farmForm} display={this.state.farmModal} onChange={this.onFarmChange} onSubmit={this.onFarmSubmit}/>
            <CropForm toggle={this.toggleCropModal} {...this.state.cropForm} display={this.state.cropModal} onChange={this.onCropChange} onSubmit={this.onCropSubmit}/>
            {this.props.currentUser && this.props.farms.filter(farm => farm.user.id === this.props.currentUser.id).map(farm => <Farm key={farm.id} populateFarmForm={this.populateFarmForm} {...farm} />)}
            </>
        )
    }

    render() {
        return(
            <div>
                {this.props.location.pathname === '/farms' ? this.renderMyFarms() : "Please Login" }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser.currentUser,
        farms: state.farms.farms,
        ...state.farms.crops,
    }
}

export default withRouter(connect(mapStateToProps, { getFarms, addFarm, editFarm, getCrops, addCrop, editCrop })(FarmContainer))