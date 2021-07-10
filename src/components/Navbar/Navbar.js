import React from 'react'
import { NavLink, Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header>
      <nav>
      <Link to='/' title='Roomies'><h1>Roomies</h1></Link>
      <div>
        <ul>
          <li>
            <NavLink to='/dashboard' title='Dashboard'>Dashboard</NavLink>
          </li>
        </ul>
      </div>
      </nav>
    </header>
  )
}
