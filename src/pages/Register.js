import React, { Component } from 'react'
import { connect } from 'react-redux'
import Layout from '../components/Layout'
import Form from '../components/FormLogup'
import { userSelectors } from '@redux/selectors'

class RegisterPage extends Component {
  render() {
    const { loading } = this.props

    return (
      <Layout withTitle titleText="log up" withSpinner={loading}>
        <Form />
      </Layout>
    )
  }
}

const mapStateToProps = state => ({
  loading: userSelectors.getLoading(state),
})

export default connect(mapStateToProps)(RegisterPage)
