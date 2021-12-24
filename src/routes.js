import React, { lazy } from 'react'

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
