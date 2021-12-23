import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom'
import { routes } from './routes'

class App extends Component {
  render() {
    return (
      <Routes>
        {routes.map(({ path, component }) => (
          <Route key={path} path={path} element={component} />
        ))}
      </Routes>
    )
  }
}

export default App
