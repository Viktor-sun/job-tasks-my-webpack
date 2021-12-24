import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import s from './FormLogup.module.css'
import { userOperations } from '@redux/thunks'
import { navRoutes } from '../../routes'

class FormLogup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      password: '',
      passwordEcho: '',
      nameValid: null,
      passwordValid: null,
      passwordEchoValid: null,
      showPassword: false,
      showPasswordEcho: false,
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

  confirmPasswordValidation(password, passwordEcho) {
    if (passwordEcho === '') {
      return 'password is required'
    }
    if (password !== passwordEcho) {
      return 'password does not match'
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
          : name === 'password'
          ? this.passwordValidation(name, value)
          : this.confirmPasswordValidation(this.state.password, value),
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const {
      name,
      password,
      nameValid,
      passwordValid,
      passwordEcho,
      passwordEchoValid,
    } = this.state
    if (name === '' || password === '' || passwordEcho === '') return
    const isValid = !nameValid && !passwordValid && !passwordEchoValid
    if (isValid) {
      this.props.onSubmit({ name, password })
      this.reset()
    }
  }

  reset() {
    this.setState({ name: '', password: '', passwordEcho: '' })
  }

  handleShowPassword = () => {
    this.setState(prevState => ({ showPassword: !prevState.showPassword }))
  }

  handleShowPasswordEcho = () => {
    this.setState(prevState => ({
      showPasswordEcho: !prevState.showPasswordEcho,
    }))
  }

  render() {
    const {
      name,
      password,
      nameValid,
      passwordValid,
      passwordEcho,
      passwordEchoValid,
      showPassword,
      showPasswordEcho,
    } = this.state

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
        <label className={s.inputLabel}>
          <input
            type={showPasswordEcho ? 'text' : 'password'}
            autoComplete="off"
            placeholder="Confirm the password"
            className={s.input}
            name="passwordEcho"
            value={passwordEcho}
            onChange={this.handleChange}
          />
          <span
            className={showPasswordEcho ? s.iconPassShow : s.iconPassHidden}
            onClick={this.handleShowPasswordEcho}
          ></span>
          {passwordEchoValid && (
            <p className={s.validError}>{passwordEchoValid}</p>
          )}
        </label>
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

const mapDispatchToProps = {
  onSubmit: userOperations.logup,
}

export default connect(null, mapDispatchToProps)(FormLogup)
