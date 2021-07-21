import React, { useState, useEffect } from "react"
import { Switch, Route } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import Home from "../Home/Home"
import smileyIcon from '../../assets/green-smiley.png'
import Requests from '../Requests/Requests'
import "./App.scss"
import Dashboard from "../Dashboard/Dashboard"
import Login from "../Login/Login"
import UsersContext from "../../Context/UsersContext"
import RequestRoomieContext from "../../Context/RequestRoomieContext"
import { getUsers, postRequest, deleteRequest } from "../../utilities/apiCalls"

export default function App() {
  const [users, setUsers] = useState([])
  const [error, setError] = useState("")
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getUsers()
        setUsers(response.data)
      } catch (err) {
        setError(err.message)
      }
    }
    fetchUsers()
  }, [])

  const requestRoomie = async (reqBody, query) => {
    try{
      const response = await postRequest(query, reqBody)
      setCurrentUser(response.data)
    } catch (err) {
      setError(err.message)
    }
  }

  const deleteRoomie = async (body) => {
    try {
      const response = await deleteRequest(currentUser.id, body )
      setCurrentUser(response.data)
    } catch (err) {
      setError(err.message)
    }
  }

  const requestValue = {
    requestRoomie,
    deleteRoomie
  }

  const userValue = {
    currentUser,
    users,
    setUsers
  }

  return (
      <RequestRoomieContext.Provider value={requestValue}>
        <UsersContext.Provider value={userValue}>
          <main>
            <Navbar setCurrentUser={setCurrentUser}/>
            {error && <h1>{error}</h1>}
            <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <div>
                    {!currentUser ? (
                      <Login setCurrentUser={setCurrentUser} />
                    ) : (
                      <h3 className='welcome-header'>{`Welcome, ${currentUser.attributes.name}!`} <img className='smiley-icon' src={smileyIcon} alt='smiley face icon'/> </h3>
                    )}
                    <Home />
                  </div>
                )}
              />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path='/requests' component={Requests} />
            </Switch>
          </main>
        </UsersContext.Provider>
      </RequestRoomieContext.Provider>
  )
}