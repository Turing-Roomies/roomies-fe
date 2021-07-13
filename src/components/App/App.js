import React, { useState, useEffect } from 'react'
// import { fakeData } from '../../data'
import { Switch, Route } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Home from '../Home/Home'
import './App.scss'
import Dashboard from '../Dashboard/Dashboard'
import UsersContext from '../../Context/UsersContext'
import ErrorContext from '../../Context/ErrorContext'
import RequestRoomieContext from '../../Context/RequestRoomieContext'
import { getUsers } from '../../utilities/apiCalls'

export default function App() {

  const [users, setUsers] = useState([])
  const [error, setError] = useState('')
  const [currentUser, setCurrentUser] = useState(
    {
      "id": "13",
      "type": "user",
      "attributes": {
        "roomies": [],
        "email": "dusty@email.com",
        "name": "The Dust",
        "gender": "male",
        "age": 90,
        "location": {
        "city": "Orlando",
        "state": "FL"
        }
      }
    }
  )

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getUsers();
        setUsers(response.data);
      } catch (err) {
        setError(err);
      }
    };
    fetchUsers();
  }, []);

  const requestRoomie = id => {
    console.log(47, id)
  }
  
  return (
    <RequestRoomieContext.Provider value={requestRoomie}>
      <ErrorContext.Provider value={error}>
        <UsersContext.Provider value={users}>
          <main>
              <Navbar />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/dashboard' component={Dashboard} />
            </Switch>
          </main>
        </UsersContext.Provider>
      </ErrorContext.Provider>
    </RequestRoomieContext.Provider>
  )
}