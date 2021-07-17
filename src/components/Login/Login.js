import React, { useState, useContext, useRef } from "react"
import usersContext from "../../Context/UsersContext"

export default function Login({ setCurrentUser }) {
  const userNameRef = useRef()
  const passwordRef = useRef()
  const [formError, setFormError] = useState(false)
  const [authenticateError, setAuthenticateError] = useState(false)
  // const [currentUser, setCurrentUser] = useState({})

  const users = useContext(usersContext)

  const handleChange = (event) => {

    event.target.name === "userName"
      ? setUserName(event.target.value)
      : setPassword(event.target.value)
    setFormError(false)
    setAuthenticateError(false)
  }

  function handleSubmit(event) {
    event.preventDefault()
    userName && password ? authenticate() : setFormError(true)
    clearInputs()
  }

  const clearInputs = () => {
    setUserName("")
    setPassword("")
  }

  const authenticate = () => {
    users.find((user) => {
      if ( user.attributes.name === userName && user.attributes.email === password ) {
        setCurrentUser(user)
        return
      } else {
        setAuthenticateError(true)
        return
      }
    })
  }

  return (
    <div>
      <form>
        <div>
          <label> User Name
            <input type="text" ref={userNameRef} name="userName" required />
          </label>
          <label> password
            <input type="password" ref={passwordRef} name="password" required />
          </label>
          <button className="submit-button" onClick={(event) => handleSubmit(event)} type="submit" >Login</button>
          {formError && <h1>UserName or Password is missing!</h1>}
          {authenticateError && (<h1>Could not find login credentials! Please create an account or try again!</h1>)}
        </div>
      </form>
    </div>
  )
}
