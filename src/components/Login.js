import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login, getCurrentUser } from '../actions/currentUser';
import { withRouter, Redirect } from 'react-router-dom';
import classes from './UserAuth.module.css'

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
        this.props.login(this.state, this.props.history)
        this.setState({
            username: '',
            password: '',
        })
    }

    render() {
        return(
            <>
            { !this.props.loggedIn ?
            <div>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <h2 className={classes.title}>Login</h2>
                    </div>
                    <div>
                        <input placeholder="username" value={this.state.username} name="username" type="text" onChange={this.onChange} className={classes.formInput} />
                    </div>
                    <div>
                        <input placeholder="password" value={this.state.password} name="password" type="password" onChange={this.onChange} className={classes.formInput}/>
                    </div>
                    <div>
                        <input type="submit" value="Log In" className={classes.formBtn} />
                    </div>
                </form>
            </div>
            : <Redirect to='/' />
            }
            </>
        )
    }

}

    const mapStateToProps = state => {
        return {
            loggedIn: !!state.currentUser
        }
    }

export default withRouter(connect(mapStateToProps, { login, getCurrentUser })(Login))