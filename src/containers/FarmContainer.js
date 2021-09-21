import React, { Component } from "react";
import { connect } from "react-redux";
import { getFarms } from "../actions/farms";
import Farm from "../components/Farm";
import { withRouter } from 'react-router-dom';
import FarmForm from "../components/FarmForm";
import { addFarm, editFarm } from '../actions/farms';

class FarmContainer extends Component {

    state = {
        modal: false,
        form: {
            name: '',
            location: '',
            total: '',
        }
    }

    toggleModal = () => this.setState({modal: !this.state.modal})

    onChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({ form:
            {
                ...this.state.form,
                [name]: value
            }
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.form.id) {
            this.props.editFarm(this.state.form)
        } else {
            this.props.addFarm(this.state.form)
        }
        this.setState({
            modal: false,
            form: {
                name: '',
                location: '',
                total: '',
            }
        })
    }
    
    componentDidMount(){
        this.props.getFarms()
    }

    openNewFarmForm = () => this.setState({
        modal: true,
        form: {
            name: '',
            location: '',
            total: '',
        }
    })

    populateForm = (farm) => this.setState({
        modal: true,
        form: {
            name: farm.name,
            location: farm.location,
            total: farm.total,
        }
    })

    renderMyFarms = () => {
        return (
            <>
            <button onClick={this.openNewFarmForm}>
                New Farm
            </button>
            <FarmForm toggle={this.toggleModal} {...this.state.form} display={this.state.modal} onChange={this.onChange} onSubmit={this.onSubmit}/>
            {this.props.currentUser && this.props.farms.filter(farm => farm.user.id === this.props.currentUser.id).map(farm => <Farm key={farm.id} populateForm={this.populateForm} {...farm} />)}
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
    }
}

export default withRouter(connect(mapStateToProps, { getFarms, addFarm, editFarm })(FarmContainer))