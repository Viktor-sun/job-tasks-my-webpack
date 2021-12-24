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
      confirmPassword: '',
      nameValid: null,
      passwordValid: null,
      confirmPasswordValid: null,
      showPassword: false,
      showConfirmPassword: false,
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { name, password, confirmPassword } = this.state
    if (prevState.name !== name) {
      this.setState({
        nameValid: this.nameValidation('Name', name),
      })
    }
    if (prevState.password !== password) {
      this.setState({
        passwordValid: this.passwordValidation('Password', password),
        confirmPasswordValid: this.confirmPasswordValidation(
          password,
          confirmPassword,
        ),
      })
    }
    if (prevState.confirmPassword !== confirmPassword) {
      this.setState({
        confirmPasswordValid: this.confirmPasswordValidation(
          password,
          confirmPassword,
        ),
      })
    }
  }

  nameValidation(fieldName, fieldValue) {
    if (fieldValue === '') {
      return `${fieldName} is required`
    }
    if (/[^a-zA-Z-а-яА-Я -]/.test(fieldValue)) {
      return 'Invalid characters'
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
    this.setState({ [name]: value.trim() })
  }

  handleSubmit = e => {
    e.preventDefault()
    const {
      name,
      password,
      nameValid,
      passwordValid,
      confirmPassword,
      confirmPasswordValid,
    } = this.state
    if (name === '' || password === '' || confirmPassword === '') return
    const isValid = !nameValid && !passwordValid && !confirmPasswordValid
    if (isValid) {
      this.props.onSubmit({ name, password })
      this.reset()
    }
  }

  reset() {
    this.setState({ name: '', password: '', confirmPassword: '' })
  }

  handleShowPassword = () => {
    this.setState(prevState => ({ showPassword: !prevState.showPassword }))
  }

  handleShowConfirmPassword = () => {
    this.setState(prevState => ({
      showConfirmPassword: !prevState.showConfirmPassword,
    }))
  }

  render() {
    const {
      name,
      password,
      nameValid,
      passwordValid,
      confirmPassword,
      confirmPasswordValid,
      showPassword,
      showConfirmPassword,
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
            type={showConfirmPassword ? 'text' : 'password'}
            autoComplete="off"
            placeholder="Confirm the password"
            className={s.input}
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
          />
          <span
            className={showConfirmPassword ? s.iconPassShow : s.iconPassHidden}
            onClick={this.handleShowConfirmPassword}
          ></span>
          {confirmPasswordValid && (
            <p className={s.validError}>{confirmPasswordValid}</p>
          )}
        </label>
        <button type="submit" className={s.btn}>
          submit
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
