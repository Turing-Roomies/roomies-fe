import React, { useState, useEffect } from "react"
import { Switch, Route } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import Home from "../Home/Home"
import smileyIcon from '../../assets/green-smiley.png'
import Requests from '../Connections/Connections'
import "./App.scss"
import Dashboard from "../Dashboard/Dashboard"
import Login from "../Login/Login"
import UsersContext from "../../Context/UsersContext"
import ConnectionsContext from "../../Context/ConnectionContext"
import { getUsers, postRequest, deleteRequest } from "../../utilities/apiCalls"
import FilterContext from "../../Context/FilterContext"

export default function App() {
  const [users, setUsers] = useState([])
  const [allUsers, setAllUsers] = useState([])
  const [error, setError] = useState("")
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getUsers()
        setUsers(response.data)
        setAllUsers(response.data)
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

  const filterUsers = (input) => {
    if(input) {
      setUsers(users.filter(user => 
        user.attributes.location.city.toLowerCase().includes(input.toLowerCase()) ||
        user.attributes.location.state.toLowerCase().includes(input.toLowerCase()) ||
        user.attributes.name.toLowerCase().includes(input.toLowerCase())
      ))
    }  else  {
      setUsers(allUsers)
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
      <ConnectionsContext.Provider value={requestValue}>
        <UsersContext.Provider value={userValue}>
          <FilterContext.Provider value={filterUsers}>
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
          </FilterContext.Provider>
        </UsersContext.Provider>
      </ConnectionsContext.Provider>
  )
}