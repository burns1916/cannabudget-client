import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { getCrops, addCrop, editCrop } from '../actions/crops';
import { getFarms, setFarm } from '../actions/farms';
import Crops from '../components/Crops';
import CropForm from '../components/CropForm';


class CropContainer extends Component{
    state = {
        cropModal: false,
        cropForm: {
            strain_name: '',
            farm_id: parseInt(this.props.match.params.id),
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
                farm_id: parseInt(this.props.match.params.id),
            }
        })
    }

    componentDidMount(){
        this.props.setFarm(parseInt(this.props.match.params.id))
        this.props.getCrops(parseInt(this.props.match.params.id))
        this.props.getFarms()
    }
       
    openNewCropForm = () => this.setState({
        cropModal: true,
        cropForm: {
            strain_name: '',
            farm_id: parseInt(this.props.match.params.id),
        }
    })

    
    populateCropForm = (crop) => this.setState({
        cropModal: true,
        cropForm: {
            strain_name: crop.strain_name,
            farm_id: parseInt(this.props.match.params.id),
        }
    })

    render() {
        return(
            <>
                {this.props.farms.filter(farm => farm.id === parseInt(this.props.match.params.id)).map((farm, pos) => <div key={pos}><h1>{farm.name}</h1> <h3>{farm.location}</h3></div>)}
                <button onClick={this.openNewCropForm}>New Crop</button>
                <CropForm toggle={this.toggleCropModal} {...this.state.cropForm} display={this.state.cropModal} onChange={this.onCropChange} onSubmit={this.onCropSubmit}/>
                {this.props.crops.filter(crop => crop.farm.id === parseInt(this.props.match.params.id)).map((crop) => <Crops key={crop.id} {...crop}/>)}
             </>
        )
    }   
}

const mapStateToProps = state => {
    return {
        farms: state.farms.farms,
        ...state.farms.selectedFarm,
        currentUser: state.currentUser.currentUser,
        crops: state.crops.crops,
    }
}

export default withRouter(connect(mapStateToProps, { getCrops, addCrop, editCrop, getFarms, setFarm })(CropContainer))

