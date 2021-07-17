import React from "react"
import { NavLink, Link } from "react-router-dom"
import "./Navbar.scss"

export default function Navbar() {
  const linkStyle = { textDecoration: "none", color: "black" }
  const activeStyle = { color: "#157A6E" }
  return (
    <header>
      <nav>
      <Link to='/' title='Roomies' style={linkStyle}><h1 className='page-header'>Roomies</h1></Link>
      <div>
        <ul className='nav-links'>
          <li>
            <NavLink to='/dashboard' title='Dashboard' style={linkStyle} activeStyle={activeStyle}>Dashboard</NavLink>
          </li>
        </ul>
      </div>
      </nav>
    </header>
  )
}
