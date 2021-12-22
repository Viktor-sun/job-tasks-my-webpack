import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom'
import TodosPage from './pages/Todos'
import RegisterPage from './pages/Register'
import LoginPage from './pages/Login'
import routes from './routes'

class App extends Component {
  render() {
    return (
      <Routes>
        <Route path={routes.todos} element={<TodosPage />} />
        <Route path={routes.login} element={<LoginPage />} />
        <Route path={routes.logup} element={<RegisterPage />} />
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>There&apos;s nothing here!</p>
            </main>
          }
        />
      </Routes>
    )
  }
}

export default App
