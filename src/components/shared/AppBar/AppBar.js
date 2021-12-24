import React, { Component } from 'react'
import s from './AppBar.module.css'

class AppBar extends Component {
  render() {
    return (
      <header className={s.header}>
        <div className={s.container}>
          <ul className={s.userMenu}>
            <li>Hello Guest</li>
            <li>
              <button type="button">logout</button>
            </li>
          </ul>
        </div>
      </header>
    )
  }
}

export default AppBar
