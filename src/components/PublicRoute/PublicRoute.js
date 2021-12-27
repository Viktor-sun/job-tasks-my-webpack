import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { userSelectors } from '@redux/selectors'
import { navRoutes } from '../../routes'

export class PrivateRoute extends Component {
  render() {
    const { children, isAuth } = this.props
    return isAuth ? <Navigate to={navRoutes.todos.to} /> : children
  }
}

const mapStateToProps = state => ({
  isAuth: userSelectors.getUser(state).isVerified,
})

export default connect(mapStateToProps)(PrivateRoute)
