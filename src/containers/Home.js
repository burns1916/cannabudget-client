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
            {this.props.currentUser === null ? "Please Login or Sign Up" : 
                <>
                <MyProfile />
                <br />
                <br />
                <h3>My Farms:</h3>
                <table className={classes.farmsTable}>
                    <tr>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Crops</th>
                    </tr>

                {this.props.farms.filter(farm => farm.user.id === this.props.currentUser.currentUser.id).map(farms => 
                    <tr >
                        <td className={classes.farmRow}>{farms.name}</td>
                        <td className={classes.farmRow}>{farms.location}</td>
                        <td className={classes.farmRow}><NavLink to={`/farms/${farms.id}/crops`} className={classes.link}>Manage Crops</NavLink></td>
                    </tr>
                )}

                    </table>
                <br />
                <br />
                <h3>My Crops:</h3>
                <table className={classes.farmsTable}>
                    <tr>
                        <th>Strain</th>
                        <th>Farm</th>
                        <th>Transactions</th>
                    </tr>
                {this.props.crops.filter(crop => crop.farm.user.id === this.props.currentUser.currentUser.id).map(crops =>
                    <tr>
                        <td className={classes.farmRow}>{crops.strain_name}</td>
                        <td className={classes.farmRow}>{crops.farm.name}</td>
                        <td className={classes.farmRow}><NavLink to={`/farms/${crops.farm.id}/crops/${crops.id}`} className={classes.link}>Manage Transactions</NavLink></td>
                    </tr>    
                )}
                </table>
                    </>
                }
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser,
        farms: state.farms.farms,
        crops: state.crops.crops,
    }
}

export default connect(mapStateToProps, { authUser })(Home)