import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import Farms from "../components/Farms";
import FarmForm from "../components/FarmForm";
import { getFarms, addFarm, editFarm} from '../actions/farms';
import classes from '../components/Farm.module.css'

class FarmContainer extends Component {

    state = {
        farmModal: false,
        farmForm: {
            name: '',
            location: '',

        },
    }

    toggleFarmModal = () => this.setState({farmModal: !this.state.farmModal})
    

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

    componentDidMount(){
        this.props.getFarms()
    }

    openNewFarmForm = () => this.setState({
        farmModal: true,
        farmForm: {
            name: '',
            location: '',
        }
    })

    render() {
        return(
            <>
            {this.state.farmModal ? <button onClick={this.toggleFarmModal} className={classes.formBtn}><i class="fa fa-tree" aria-hidden="true" className={classes.tree}></i> Close Farm Form</button> : <button onClick={this.openNewFarmForm} className={classes.formBtn}><span className={classes.tree}><i class="fa fa-tree" aria-hidden="true"></i></span> New Farm</button> }
            <FarmForm {...this.state.farmForm} display={this.state.farmModal} onChange={this.onFarmChange} onSubmit={this.onFarmSubmit}/>
            {this.props.currentUser && this.props.farms.filter(farm => farm.user.id === this.props.currentUser.id).map(farm => <Farms key={farm.id} populateForm={this.populateForm} {...farm} />)}
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser.currentUser,
        farms: state.farms.farms,
    }
}

export default withRouter(connect(mapStateToProps, { getFarms, addFarm, editFarm })(FarmContainer))