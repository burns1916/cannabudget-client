import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authUser } from '../actions/currentUser';
import Header from '../components/Header';
import MyProfile from './MyProfile';

class Home extends Component {

    componentDidMount(){
        this.props.authUser()
    }

    render() {
        return(
            <>
            <Header />
            {this.props.currentUser.authComplete ? <MyProfile /> : "Please Login or Sign Up" }
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