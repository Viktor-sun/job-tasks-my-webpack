import React, { Component } from 'react'
import Layout from '../components/Layout'
import Form from '../components/FormLogup'

class RegisterPage extends Component {
  render() {
    return (
      <Layout withTitle titleText="log up">
        <Form />
      </Layout>
    )
  }
}

export default RegisterPage
