import React, { useState,  useRef, useContext } from "react"
import UsersContext from '../../Context/UsersContext'
import { postRequest } from '../../utilities/apiCalls'
import PropTypes from 'prop-types'
import './Login.scss'

export default function Login({ setCurrentUser }) {
  const emailRef = useRef()
  const passwordRef = useRef()
  const [authenticateError, setAuthenticateError] = useState('')
  const { users, setUsers } = useContext(UsersContext)

  const handleSubmit = async (event) => {
    event.preventDefault()
    const logInInfo = {
      "email": emailRef.current.value,
      "password": passwordRef.current.value
    }   
    const query = 'sessions'
    try {
      setAuthenticateError('')
      const currentUser = await postRequest(query, logInInfo)
      setCurrentUser(currentUser.data)
      filterUsers(currentUser.data.id)
    } catch (err) {
      setAuthenticateError('Could not find login credentials. Please create an account or try again!')
      clearInputs()
    }
  }

  const filterUsers = (id) => {
    const filteredUsers = users.filter(user => !(user.id === id))
    setUsers(filteredUsers)
  }

  const clearInputs = () => {
    emailRef.current.value = ""
    passwordRef.current.value = ""
  }

  return (
    <div className='form-container'>
      <form onSubmit={e => handleSubmit(e)}>
        <div className='input-container'>
          <label className='username'> Email
            <input className='emailInput' type="email" ref={emailRef} name="userName" required />
          </label>
          <label className='password'> Password
            <input className='passwordInput' type="password" ref={passwordRef} name="password" required />
          </label>
          <button className="submit-button" type="submit" >Login</button>
          {authenticateError && (<p className='wrong-credentials'>{authenticateError}</p>)}
        </div>
      </form>
    </div>
  )
}

Login.propTypes = {
  setCurrentUser: PropTypes.func
}