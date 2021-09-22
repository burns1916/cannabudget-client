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
        modal: false,
        farmForm: {
            name: '',
            location: '',

        },
        cropForm: {
            strain_name: '',
            harvest_date: '',
        }
    }

    toggleModal = () => this.setState({modal: !this.state.modal})

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
            modal: false,
            form: {
                name: '',
                location: '',
            }
        })
    }

    onCropSubmit = (e) => {
        e.preventDefault();
        if (this.state.cropForm.id) {
            this.props.editFarm(this.state.cropForm)
        } else {
            this.props.addFarm(this.state.cropForm)
        }
        this.setState({
            modal: false,
            form: {
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
        modal: true,
        farmForm: {
            name: '',
            location: '',
        }
    })

    
    openNewCropForm = () => this.setState({
        modal: true,
        cropForm: {
            strain_name: '',
            harvest_date: '',
        }
    })

    populateFarmForm = (farm) => this.setState({
        modal: true,
        farmForm: {
            name: farm.name,
            location: farm.location,
        }
    })

    populateCropForm = (crop) => this.setState({
        modal: true,
        farmForm: {
            strain_name: crop.strain_name,
            harvest_date: crop.harvest_date,
        }
    })

    renderMyFarms = () => {
        return (
            <>
            <FarmForm toggle={this.toggleModal} {...this.state.farmForm} display={this.state.modal} onChange={this.onFarmChange} onSubmit={this.onFarmSubmit}/>
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
        crops: state.crops.crops,
    }
}

export default withRouter(connect(mapStateToProps, { getFarms, addFarm, editFarm, getCrops, addCrop, editCrop })(FarmContainer))