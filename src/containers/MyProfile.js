import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCurrentUser } from '../actions/currentUser'


class MyProfile extends Component {

  componentDidMount(){
    this.props.getCurrentUser()
  }

  render() {
    return (
      <>
        <div>
          <h2>Welcome, {this.props.currentUser && this.props.currentUser.username}</h2>
        </div>

      </>
    )
  }
}

const mapStateToProps = state => {
  return({
    currentUser: state.currentUser.currentUser
  })
}

export default connect(mapStateToProps, { getCurrentUser })(MyProfile)