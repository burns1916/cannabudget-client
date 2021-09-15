import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCurrentUser } from '../actions/currentUser';
import Header from '../components/Header';

class Home extends Component {

    componentDidMount(){
        this.props.getCurrentUser()
    }

    render() {
        return(
            <>
            <Header />
            </>
        )
    }
}

export default connect(null, { getCurrentUser })(Home)