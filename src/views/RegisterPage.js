import React, { Component } from 'react'

class RegisterPage extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">log up</h1>
        <form className="authForm">
          <input
            type="text"
            id="login"
            autoComplete="off"
            placeholder="Enter login"
            className="input"
          />
          <input
            type="password"
            id="password"
            autoComplete="off"
            placeholder="Enter password"
            className="input"
          />
          <button type="submit" className="authButton">
            Submit
          </button>
          <button type="button" className="authButton" data-route="/login">
            Log In
          </button>
        </form>
      </div>
    )
  }
}

export default RegisterPage
