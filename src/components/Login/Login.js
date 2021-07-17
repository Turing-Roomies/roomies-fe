import React, { useState, useContext, useRef } from "react"
import usersContext from "../../Context/UsersContext"
import './Login.scss'

export default function Login({ setCurrentUser }) {
  const userNameRef = useRef()
  const passwordRef = useRef()
  const [authenticateError, setAuthenticateError] = useState(false)

  const { users } = useContext(usersContext)


  function handleSubmit(event) {
    event.preventDefault()
    const userLogin = users.find((user) =>  user.attributes.name === userNameRef.current.value && user.attributes.email === passwordRef.current.value )
    if(userLogin) {
      setCurrentUser(userLogin)
    }else{
      setAuthenticateError(true)
      clearInputs()
    }
  }

  const clearInputs = () => {
    userNameRef.current.value = ""
    passwordRef.current.value = ""
  }


  return (
    <div className='form-container'>
      <form onSubmit={e => handleSubmit(e)}>
        <div className='input-container'>
          <label className='username'> Username
            <input type="text" ref={userNameRef} name="userName" required />
          </label>
          <label className='password'> Password
            <input type="password" ref={passwordRef} name="password" required />
          </label>
          <button className="submit-button" type="submit" >Login</button>
          {authenticateError && (<p className='wrong-credentials'>Could not find login credentials. Please create an account or try again!</p>)}
        </div>
      </form>
    </div>
  )
}