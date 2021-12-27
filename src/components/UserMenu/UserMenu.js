import React, { Component } from 'react'
import { connect } from 'react-redux'
import s from './UserMenu.module.css'
import { userOperations } from '@redux/thunks'
import { userSelectors } from '@redux/selectors'

export class UserMenu extends Component {
  handleLogout = () => {
    const { userId, onLogout } = this.props
    onLogout(userId)
  }

  render() {
    return (
      <ul className={s.userMenu}>
        <li>Hello {this.props.userName}</li>
        <li>
          <button type="button" onClick={this.handleLogout}>
            logout
          </button>
        </li>
      </ul>
    )
  }
}

const mapStateToProps = state => ({
  userName: userSelectors.getUser(state).name,
  userId: userSelectors.getUser(state)._id,
})

const mapDispatchToProps = {
  onLogout: userOperations.logout,
}

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu)
