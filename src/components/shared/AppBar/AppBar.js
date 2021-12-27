import React, { Component } from 'react'
import s from './AppBar.module.css'
import UserMenu from '../../UserMenu/UserMenu'

class AppBar extends Component {
  render() {
    return (
      <header className={s.header}>
        <div className={s.container}>
          <UserMenu />
        </div>
      </header>
    )
  }
}

export default AppBar
