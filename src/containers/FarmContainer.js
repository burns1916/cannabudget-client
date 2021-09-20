import React, { Component } from "react";
import { connect } from "react-redux";
import { getFarms } from "../actions/farms";
import Farm from "../components/Farm";
import { withRouter } from 'react-router-dom';
import FarmForm from "../components/FarmForm";
import { addFarm, editFarm } from '../actions/farms';

class FarmContainer extends Component {

    state = {
        form: {
            name: '',
            location: '',
            total: '',
        }
    }

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

    renderMyFarms = () => {
        return (
            <>
                <Farm/>
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