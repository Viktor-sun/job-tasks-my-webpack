import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom'
import Container from './components/Container'
import TodosPage from './views/TodosPage'
import RegisterPage from './views/RegisterPage'
import LoginPage from './views/LoginPage'
import Navigation from './components/Navigation/Navigation'

class App extends Component {
  render() {
    return (
      <Container>
        <Navigation />

        <Routes>
          <Route path="todos" element={<TodosPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="logup" element={<RegisterPage />} />
          <Route
            path="*"
            element={
              <main style={{ padding: '1rem' }}>
                <p>There&apos;s nothing here!</p>
              </main>
            }
          />
        </Routes>
      </Container>
    )
  }
}

export default App
