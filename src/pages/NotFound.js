import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import { navRoutes } from '../routes'

export default function NotFound() {
  return (
    <Layout withTitle titleText="There's nothing here!">
      <nav style={{ fontSize: '40px', textAlign: 'center' }}>
        You can go to: <Link to={navRoutes.todos.to}>todos</Link> or{' '}
        <Link to={navRoutes.login.to}>login</Link>
      </nav>
    </Layout>
  )
}
