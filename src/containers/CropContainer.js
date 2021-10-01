import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { getCrops, addCrop, editCrop } from '../actions/crops';
import Crop from '../components/Crop';
import CropForm from '../components/CropForm';

class CropContainer extends Component{
    state = {
        cropModal: false,
        cropForm: {
            strain_name: '',
            harvest_date: '',
        },
    }

    toggleCropModal = () => this.setState({cropModal: !this.state.cropModal})

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
        this.props.getCrops()
    }
       
    openNewCropForm = () => this.setState({
        cropModal: true,
        cropForm: {
            strain_name: '',
            harvest_date: '',
        }
    })

    
    populateCropForm = (crop) => this.setState({
        cropModal: true,
        farmForm: {
            strain_name: crop.strain_name,
            harvest_date: crop.harvest_date,
        }
    })

    render() {
        return(
            <>
                <button onClick={this.openNewCropForm}>New Crop</button>
                <CropForm toggle={this.toggleCropModal} {...this.state.cropForm} display={this.state.cropModal} onChange={this.onCropChange} onSubmit={this.onCropSubmit}/>
             </>
        )
    }   
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser.currentUser,
        crops: state.crops.crops,
    }
}

export default withRouter(connect(mapStateToProps, { getCrops, addCrop, editCrop })(CropContainer))

