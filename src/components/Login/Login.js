import React, { useState, useContext, useRef } from "react"
import usersContext from "../../Context/UsersContext"

export default function Login({ setCurrentUser }) {
  const userNameRef = useRef()
  const passwordRef = useRef()
  const [authenticateError, setAuthenticateError] = useState(false)

  const users = useContext(usersContext)


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
