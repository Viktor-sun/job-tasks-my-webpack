import React, { lazy } from 'react'
import PrivateRoute from './components/PrivateRoute'
import PublicRoute from './components/PublicRoute'

const TodosPage = lazy(() => import('./pages/Todos'))
const RegisterPage = lazy(() => import('./pages/Register'))
const LoginPage = lazy(() => import('./pages/Login'))
const NotFoundPage = lazy(() => import('./pages/NotFound'))

export const navRoutes = {
  todos: { name: 'todos', to: '/todos' },
  login: { name: 'login', to: '/login' },
  logup: { name: 'logup', to: '/logup' },
}

export const routes = [
  {
    path: navRoutes.todos.to,
    component: (
      <PrivateRoute>
        <TodosPage />
      </PrivateRoute>
    ),
  },
  {
    path: navRoutes.login.to,
    component: (
      <PublicRoute>
        <LoginPage />
      </PublicRoute>
    ),
  },
  {
    path: navRoutes.logup.to,
    component: (
      <PublicRoute>
        <RegisterPage />/
      </PublicRoute>
    ),
  },
  {
    path: '*',
    component: <NotFoundPage />,
  },
]
