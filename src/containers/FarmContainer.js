import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import Farms from "../components/Farms";
import FarmForm from "../components/FarmForm";
import { getFarms, addFarm, editFarm} from '../actions/farms';

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
            <button onClick={this.openNewFarmForm}>New Farm</button>
            <FarmForm toggle={this.toggleFarmModal} {...this.state.farmForm} display={this.state.farmModal} onChange={this.onFarmChange} onSubmit={this.onFarmSubmit}/>
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