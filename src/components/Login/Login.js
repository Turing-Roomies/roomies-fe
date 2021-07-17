import React, { useState, useContext, useRef } from "react"
import usersContext from "../../Context/UsersContext"

export default function Login({ setCurrentUser }) {
  const userNameRef = useRef()
  const passwordRef = useRef()
  const [authenticateError, setAuthenticateError] = useState(false)
  // const [currentUser, setCurrentUser] = useState({})

  const users = useContext(usersContext)

  const handleChange = (event) => {
    setFormError(false)
    setAuthenticateError(false)
  }

  function handleSubmit(event) {
    event.preventDefault()
    authenticate() 
    // clearInputs()
  }

  const clearInputs = () => {
    userNameRef.current.value = ""
    passwordRef.current.value = ""
  }

  const authenticate = () => {
    users.find((user) => {
      if ( user.attributes.name === userNameRef && user.attributes.email === passwordRef ) {
        setCurrentUser(user)
        return
      } else {
        setAuthenticateError(true)
        clearInputs()
        return
      }
    })
  }

  return (
    <div>
      <form onSubmit={e => handleSubmit(e)}>
        <div>
          <label> User Name
            <input type="text" ref={userNameRef} name="userName" required />
          </label>
          <label> password
            <input type="password" ref={passwordRef} name="password" required />
          </label>
          <button className="submit-button" type="submit" >Login</button>
          {authenticateError && (<h1>Could not find login credentials! Please create an account or try again!</h1>)}
        </div>
      </form>
    </div>
  )
}
