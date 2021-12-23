import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import s from './FormLogup.module.css'
import { userOperations } from '@redux/thunks'
import { navRoutes } from '../../routes'

class FormLogup extends Component {
  constructor(props) {
    super(props)
    this.state = { inputName: '', inputPassword: '', inputPasswordEcho: '' }
  }

  handleChange = e => {
    const { name, value } = e.currentTarget
    this.setState({ [name]: value.trim() })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { inputName, inputPassword } = this.state
    this.props.onSubmit({ name: inputName, password: inputPassword })
  }

  render() {
    const { inputName, inputPassword, inputPasswordEcho } = this.state

    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          placeholder="Enter login"
          className={s.input}
          name="inputName"
          value={inputName}
          onChange={this.handleChange}
        />
        <input
          type="password"
          autoComplete="off"
          placeholder="Enter password"
          className={s.input}
          name="inputPassword"
          value={inputPassword}
          onChange={this.handleChange}
        />
        <input
          type="password"
          autoComplete="off"
          placeholder="Confirm the password"
          className={s.input}
          name="inputPasswordEcho"
          value={inputPasswordEcho}
          onChange={this.handleChange}
        />
        <button type="submit" className={s.btn}>
          Submit
        </button>
        <Link to={navRoutes.login.to} className={s.btn}>
          {navRoutes.login.name}
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
