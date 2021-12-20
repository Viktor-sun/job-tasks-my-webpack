import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import s from './FormLogin.module.css'

export class FormLogin extends Component {
  render() {
    return (
      <form className={s.form}>
        <input
          type="text"
          id="login"
          autoComplete="off"
          placeholder="Enter login"
          className={s.input}
        />
        <input
          type="password"
          id="password"
          autoComplete="off"
          placeholder="Enter password"
          className={s.input}
        />
        <button type="submit" className={s.btn}>
          Submit
        </button>
        <Link to="/logup" className={s.btn}>
          Log up
        </Link>
      </form>
    )
  }
}

const mapStateToProps = () => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(FormLogin)
