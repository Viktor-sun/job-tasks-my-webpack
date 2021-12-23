import React from 'react'
import TodosPage from './pages/Todos'
import RegisterPage from './pages/Register'
import LoginPage from './pages/Login'
import NotFoundPage from './pages/NotFound'

export const navRoutes = {
  todos: { name: 'todos', to: '/todos' },
  login: { name: 'login', to: '/login' },
  logup: { name: 'logup', to: '/logup' },
}

export const routes = [
  {
    path: navRoutes.todos.to,
    component: <TodosPage />,
  },
  {
    path: navRoutes.login.to,
    component: <LoginPage />,
  },
  {
    path: navRoutes.logup.to,
    component: <RegisterPage />,
  },
  {
    path: '*',
    component: <NotFoundPage />,
  },
]
