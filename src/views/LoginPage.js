import React, { Component } from 'react'

class LoginPage extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">log in</h1>
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
            Log up
          </button>
        </form>
      </div>
    )
  }
}

export default LoginPage
