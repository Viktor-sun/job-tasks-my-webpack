import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import s from './FormLogin.module.css'
import { userOperations } from '@redux/thunks'
import { navRoutes } from '../../routes'

export class FormLogin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      password: '',
      nameValid: null,
      passwordValid: null,
      showPassword: false,
    }
  }

  nameValidation(fieldName, fieldValue) {
    if (fieldValue === '') {
      return `${fieldName} is required`
    }
    if (/[^a-zA-Z-а-яА-Я -]/.test(fieldValue)) {
      return 'invalid characters'
    }
    if (fieldValue.length < 3) {
      return `${fieldName} needs to be at least three characters`
    }
    return null
  }

  passwordValidation(fieldName, fieldValue) {
    if (fieldValue === '') {
      return `${fieldName} is required`
    }
    if (!/[0-9a-zA-Z!@#$%^&*]{6,}/g.test(fieldValue)) {
      return `${fieldName} needs to be at least six characters`
    }
    if (!/(?=.*[!@#$%^&*])/g.test(fieldValue)) {
      return `${fieldName} needs to be at least one special character`
    }
    return null
  }

  handleChange = e => {
    const { name, value } = e.currentTarget
    this.setState({
      [name]: value.trim(),
      [name + 'Valid']:
        name === 'name'
          ? this.nameValidation(name, value)
          : this.passwordValidation(name, value),
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { name, password, nameValid, passwordValid } = this.state
    if (name === '' || password === '') return
    const isValid = !nameValid && !passwordValid
    if (isValid) {
      this.props.onSubmit({ name, password })
      this.reset()
    }
  }

  reset() {
    this.setState({ name: '', password: '' })
  }

  handleShowPassword = () => {
    this.setState(prevState => ({ showPassword: !prevState.showPassword }))
  }

  render() {
    const { name, password, nameValid, passwordValid, showPassword } =
      this.state

    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <label className={s.inputLabel}>
          <input
            type="text"
            autoComplete="off"
            placeholder="Enter login"
            className={s.input}
            name="name"
            value={name}
            onChange={this.handleChange}
          />
          {nameValid && <p className={s.validError}>{nameValid}</p>}
        </label>
        <label className={s.inputLabel}>
          <input
            type={showPassword ? 'text' : 'password'}
            autoComplete="off"
            placeholder="Enter password"
            className={s.input}
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <span
            className={showPassword ? s.iconPassShow : s.iconPassHidden}
            onClick={this.handleShowPassword}
          ></span>
          {passwordValid && <p className={s.validError}>{passwordValid}</p>}
        </label>
        <button type="submit" className={s.btn}>
          Submit
        </button>
        <Link to={navRoutes.logup.to} className={s.btn}>
          {navRoutes.logup.name}
        </Link>
      </form>
    )
  }
}

const mapDispatchToProps = {
  onSubmit: userOperations.login,
}

export default connect(null, mapDispatchToProps)(FormLogin)
