import React, { Component } from 'react'
import Title from '../components/Title'
import Form from '../components/FormLogin'

class LoginPage extends Component {
  render() {
    return (
      <>
        <Title text="log in" />
        <Form />
      </>
    )
  }
}

export default LoginPage
