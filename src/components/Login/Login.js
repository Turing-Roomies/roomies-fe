import React, { useState,  useRef } from "react"
import usersContext from "../../Context/UsersContext"
import { getCurrentUser } from '../../utilities/apiCalls'
import './Login.scss'

export default function Login({ setCurrentUser }) {
  const emailRef = useRef()
  const passwordRef = useRef()
  const [authenticateError, setAuthenticateError] = useState('')


  const handleSubmit = async (event) => {
    event.preventDefault()
    const logInInfo = {
      "email": emailRef.current.value,
      "password": passwordRef.current.value
    }   
    try {
      setAuthenticateError('')
      const currentUser = await getCurrentUser(logInInfo)
      setCurrentUser(currentUser.data)
    } catch (err) {
      setAuthenticateError('Could not find login credentials. Please create an account or try again!')
      clearInputs()
    }
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
            <input type="email" ref={emailRef} name="userName" required />
          </label>
          <label className='password'> Password
            <input type="password" ref={passwordRef} name="password" required />
          </label>
          <button className="submit-button" type="submit" >Login</button>
          {authenticateError && (<p className='wrong-credentials'>{authenticateError}</p>)}
        </div>
      </form>
    </div>
  )
}