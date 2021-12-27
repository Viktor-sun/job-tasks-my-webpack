import React, { Component, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Spinner from './components/shared/Spinner'
import { routes } from './routes'
import { userOperations } from '@redux/thunks'

class App extends Component {
  componentDidMount() {
    this.props.fetchUser()
  }

  render() {
    return (
      <Suspense fallback={<Spinner />}>
        <Routes>
          {routes.map(({ path, component }) => (
            <Route key={path} path={path} element={component} />
          ))}
        </Routes>
      </Suspense>
    )
  }
}

const mapDispatchToProps = {
  fetchUser: userOperations.getCurrent,
}

export default connect(null, mapDispatchToProps)(App)
