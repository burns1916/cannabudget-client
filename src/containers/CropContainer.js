import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { getCrops, addCrop } from '../actions/crops';
import { getFarms, setFarm } from '../actions/farms';
import Crops from '../components/Crops';
import CropForm from '../components/CropForm';
import classes from '../components/Crop.module.css'


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
        this.props.addCrop(this.state.cropForm)
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
        this.props.getCrops()
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
                {this.props.farms.filter(farm => farm.id === parseInt(this.props.match.params.id)).map((farm, pos) => <div key={pos}><h1 className={classes.farmName}>{farm.name}</h1> <h3 className={classes.farmLocation}>{farm.location}</h3></div>)}
                <br />
                {this.state.cropModal ? <button onClick={this.toggleCropModal} className={classes.formBtn}><span className={classes.tree}><i class="fa fa-tree" aria-hidden="true"></i></span> Close Crop Form</button> : <button onClick={this.openNewCropForm} className={classes.formBtn}><span className={classes.tree}><i class="fa fa-tree" aria-hidden="true"></i></span> New Crop</button> }
                <CropForm {...this.state.cropForm} display={this.state.cropModal} onChange={this.onCropChange} onSubmit={this.onCropSubmit}/>
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

export default withRouter(connect(mapStateToProps, { getCrops, addCrop, getFarms, setFarm })(CropContainer))

