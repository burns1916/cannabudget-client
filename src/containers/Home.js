import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authUser } from '../actions/currentUser';
import MyProfile from './MyProfile';
import { NavLink } from 'react-router-dom'
import classes from '../components/Home.module.css'

class Home extends Component {

    componentDidMount(){
        this.props.authUser()
    }

    render() {
        return(
            <>
            {this.props.currentUser === null ? "Please Login or Sign Up" : <MyProfile /> }
                <h3>My Farms:</h3>
                <table className={classes.farmsTable}>
                    <tr>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Crops</th>
                    </tr>

                {this.props.farms.filter(farm => farm.user.id === this.props.currentUser.id).map(farms => 
                    <tr>
                        <td>{farms.name}</td>
                        <td>{farms.location}</td>
                        <td><NavLink to={`/farms/${farms.id}/crops`}>Manage Crops</NavLink></td>
                    </tr>
                )}

                    </table>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser.currentUser,
        farms: state.farms.farms
    }
}

export default connect(mapStateToProps, { authUser })(Home)