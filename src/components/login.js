import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login, getCurrentUser } from '../action/currentUser.js';
import { withRouter, Redirect } from 'react-router-dom';

class Login extends Component {

    componentDidMount()  {
        this.props.getCurrentUser()
    }

    state = {
        username: '',
        password: '',
    }

    onChange = e => {
        const { name, value } = e.target
        this.setState({[name]: value})
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.login(this.state, this.props.histpry)
        this.setState({
            username: '',
            password: '',
        })
    }

    render() {
        return(

        )
    }

}

    const mapStateToProps = state => {
        return {
            loggedIn: !!state.currentUser
        }
    }

export default withRouter(connect(mapStateToProps, ))