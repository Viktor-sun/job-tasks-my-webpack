import React, { Component } from 'react'
import Layout from '../components/Layout'
import Form from '../components/FormLogin'

class LoginPage extends Component {
  render() {
    return (
      <Layout withTitle titleText="log in">
        <Form />
      </Layout>
    )
  }
}

export default LoginPage
