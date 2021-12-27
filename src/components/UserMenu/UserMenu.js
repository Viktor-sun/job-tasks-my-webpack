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
        <li>Hello Guest</li>
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
  userId: userSelectors.getUser(state),
})

const mapDispatchToProps = {
  onLogout: userOperations.logout,
}

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu)
