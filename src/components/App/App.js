import React, { useState, useEffect } from "react"
import { Switch, Route } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import Home from "../Home/Home"

import dummyData from "../../utilities/dummyData"

import "./App.scss"
import Dashboard from "../Dashboard/Dashboard"
import Login from "../Login/Login"
import UsersContext from "../../Context/UsersContext"
import ErrorContext from "../../Context/ErrorContext"
import RequestRoomieContext from "../../Context/RequestRoomieContext"
import CurrentUserContext from "../../Context/CurrentUserContext"
import { getUsers } from "../../utilities/apiCalls"

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
        setError(err)
      }
    }
    // fetchUsers()
    // Commented out to use dummy data

    setUsers(dummyData.data)
  }, [])

  const requestRoomie = async (id) => {
    // const updatedCurrentUser = await(handleRoomieRequest)
    // setCurrentUser(response)
    setCurrentUser((prevUser) => ({
      ...prevUser,
      attributes: {
        ...prevUser.attributes,
        roomies: [...prevUser.attributes.roomies, { id, status: "pending" }],
      },
    }))
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <RequestRoomieContext.Provider value={requestRoomie}>
        <ErrorContext.Provider value={error}>
          <UsersContext.Provider value={users}>
            <main>
              <Navbar setCurrentUser={setCurrentUser}/>
              <Switch>
                <Route
                  exact
                  path="/"
                  render={() => (
                    <div>
                      {!currentUser ? (
                        <Login setCurrentUser={setCurrentUser} />
                      ) : (
                        <h1>{`Welcome, ${currentUser.attributes.name}!`}</h1>
                      )}
                      <Home />
                    </div>
                  )}
                />
                <Route exact path="/dashboard" component={Dashboard} />
              </Switch>
            </main>
          </UsersContext.Provider>
        </ErrorContext.Provider>
      </RequestRoomieContext.Provider>
    </CurrentUserContext.Provider>
  )
}
