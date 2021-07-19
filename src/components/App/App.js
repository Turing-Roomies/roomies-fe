import React, { useState, useEffect } from "react"
import { Switch, Route } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import Home from "../Home/Home"
import smileyIcon from '../../assets/green-smiley.png'
// import dummyData from "../../utilities/dummyData"
import Requests from '../Requests/Requests'
import "./App.scss"
import Dashboard from "../Dashboard/Dashboard"
import Login from "../Login/Login"
import UsersContext from "../../Context/UsersContext"
import ErrorContext from "../../Context/ErrorContext"
import RequestRoomieContext from "../../Context/RequestRoomieContext"
import { getUsers, postRequest } from "../../utilities/apiCalls"

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

  const requestRoomie = async (reqId, recId) => {
    const reqBody = {
      "requestor_id": reqId,
      "receiver_id": recId
    }
    const query = 'roomie_requests'
    try{
      const response = await postRequest(query, reqBody)
      setCurrentUser(response.data)
    } catch (err) {
      setError(err.message)
    }
  }

  const userValue = {
    currentUser,
    users
  }

  return (
      <RequestRoomieContext.Provider value={requestRoomie}>
        {/* <ErrorContext.Provider value={error}> */}
          <UsersContext.Provider value={userValue}>
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
        {/* </ErrorContext.Provider> */}
      </RequestRoomieContext.Provider>
  )
}