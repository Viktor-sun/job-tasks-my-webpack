import React, { Component, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Spinner from './components/shared/Spinner'
import { routes } from './routes'

class App extends Component {
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

export default App
