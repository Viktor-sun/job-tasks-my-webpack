import React, { Component } from 'react'
import { connect } from 'react-redux'
import s from './Footer.module.css'

class Footer extends Component {
  render() {
    return (
      <footer className={s.footer}>
        <span className={s.counter}>0 item left</span>
        <ul className={s.btnList}>
          <li>
            <button type="button" id="buttonAll" className={s.sortBtn}>
              All
            </button>
          </li>
          <li>
            <button type="button" id="butttonActive" className={s.sortBtn}>
              Active
            </button>
          </li>
          <li>
            <button type="button" id="buttonCompleted" className={s.sortBtn}>
              Completed
            </button>
          </li>
        </ul>
        <button className={s.btnClear}>Clear completed</button>
      </footer>
    )
  }
}

const mapStateToProps = () => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
