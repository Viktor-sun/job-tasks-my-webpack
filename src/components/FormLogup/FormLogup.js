import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import s from './FormLogup.module.css'
import { userOperations } from '@redux/thunks'

class FormLogup extends Component {
  handleSubmit = e => {
    e.preventDefault()
    this.props.onSubmit()
  }

  render() {
    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
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
        <Link to="/login" className={s.btn}>
          Log In
        </Link>
      </form>
    )
  }
}

const mapStateToProps = () => ({})

const mapDispatchToProps = {
  onSubmit: userOperations.logup,
}

export default connect(mapStateToProps, mapDispatchToProps)(FormLogup)
