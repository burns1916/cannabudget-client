import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authUser } from '../actions/currentUser';
import MyProfile from './MyProfile';

class Home extends Component {

    componentDidMount(){
        this.props.authUser()
    }

    render() {
        return(
            <>
            {this.props.currentUser === null ? "Please Login or Sign Up" : <MyProfile /> }
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps, { authUser })(Home)