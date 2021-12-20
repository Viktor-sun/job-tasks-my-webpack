import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <ul style={{ display: 'flex', justifyContent: 'space-around' }}>
      <li>
        <Link to="/login">login</Link>
      </li>
      <li>
        <Link to="/logup">logup</Link>
      </li>
      <li>
        <Link to="/todos">todos</Link>
      </li>
    </ul>
  )
}
