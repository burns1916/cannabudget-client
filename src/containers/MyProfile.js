import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCurrentUser } from '../actions/currentUser'
import { getFarms } from '../actions/farms'


class MyProfile extends Component {

  componentDidMount(){
    this.props.getCurrentUser()
    this.props.getFarms()
  }

  render() {
    return (
      <>
        <div>
          <h2>Farm Manager</h2>
          <h2>Welcome, {this.props.currentUser && this.props.currentUser.username}</h2>
        </div>

      </>
    )
  }
}

const mapStateToProps = state => {
  return({
    currentUser: state.currentUser.currentUser,
    farms: state.farms.farms,
  })
}

export default connect(mapStateToProps, { getCurrentUser, getFarms })(MyProfile)