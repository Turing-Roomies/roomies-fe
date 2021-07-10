import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Navbar.scss'

export default function Navbar() {
  return (
    <header>
      <nav>
      <Link to='/' title='Roomies'><h1 className='page-header'>Roomies</h1></Link>
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
