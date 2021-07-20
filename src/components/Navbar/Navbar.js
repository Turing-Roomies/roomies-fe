import React, { useContext } from "react"
import { NavLink, Link } from "react-router-dom"
import "./Navbar.scss"
import UsersContext from "../../Context/UsersContext"
import PropTypes from 'prop-types'

export default function Navbar({ setCurrentUser }) {
  const linkStyle = { textDecoration: "none", color: "black" }
  const activeStyle = { color: "#499F68" }
  const { currentUser } = useContext(UsersContext)

  const logout = () => {
    setCurrentUser(null)
  }

  return (
    <header>
      <nav>
      <Link to='/' title='Roomies' style={linkStyle}><h1 className='page-header'>Roomies</h1></Link>
      <div className='link-container'>
        <ul className='nav-links'>
          {currentUser &&
          <div>
            <li>
              <NavLink to='/' title='Logout' onClick={logout} style={linkStyle} >Logout</NavLink>
            </li>
            <li>
              <NavLink to='/requests' title='Requests Roomies' style={linkStyle} activeStyle={activeStyle}>Roomie Requests</NavLink>
            </li>
          </div> 
          }
          <li>
            <NavLink to='/dashboard' title='Dashboard' style={linkStyle} activeStyle={activeStyle}>Dashboard</NavLink>
          </li>
        </ul>
      </div>
      </nav>
    </header>
  )
}

Navbar.propTypes = {
  setCurrentUser: PropTypes.func
}