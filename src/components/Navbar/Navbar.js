import React, { useContext } from "react"
import { NavLink, Link } from "react-router-dom"
import "./Navbar.scss"
import CurrentUserContext from "../../Context/CurrentUserContext"

export default function Navbar({ setCurrentUser }) {
  const linkStyle = { textDecoration: "none", color: "black" }
  const activeStyle = { color: "#499F68" }

  const user = useContext(CurrentUserContext)

  const logout = () => {
    setCurrentUser(null)
  }

  return (
    <header>
      <nav>
      <Link to='/' title='Roomies' style={linkStyle}><h1 className='page-header'>Roomies</h1></Link>
      <div className='link-container'>
        <ul className='nav-links'>
          {user &&
          <li>
            <NavLink to='/' title='Logout' onClick={logout} style={linkStyle} >Logout</NavLink>
          </li>
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