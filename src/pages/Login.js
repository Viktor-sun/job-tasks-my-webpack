import React, { Component } from 'react'
import { connect } from 'react-redux'
import Layout from '../components/Layout'
import Form from '../components/FormLogin'
import { userSelectors } from '@redux/selectors'

class LoginPage extends Component {
  render() {
    const { loading } = this.props

    return (
      <Layout withTitle titleText="log in" withSpinner={loading}>
        <Form />
      </Layout>
    )
  }
}

const mapStateToProps = state => ({
  loading: userSelectors.getLoading(state),
})

export default connect(mapStateToProps)(LoginPage)
