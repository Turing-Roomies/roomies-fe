import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Home from '../Home/Home'
import './App.scss'
import Dashboard from '../Dashboard/Dashboard'
import UsersContext from '../../Context/UsersContext'
import ErrorContext from '../../Context/ErrorContext'//Probably don't need an error context because App can conditionally render error if it's state exists
import RequestRoomieContext from '../../Context/RequestRoomieContext'
import CurrentUserContext from '../../Context/CurrentUserContext'
import { getUsers } from '../../utilities/apiCalls'

export default function App() {

  const [users, setUsers] = useState([])
  const [error, setError] = useState('')
  const [currentUser, setCurrentUser] = useState(
    {
      "id": "13",
      "type": "user",
      "attributes": {
        "roomies": [{id: '5', status: 'pending'}],
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


  const requestRoomie = async id => {
    // const updatedCurrentUser = await(handleRoomieRequest)
    // setCurrentUser(response)
    setCurrentUser(prevUser => ({
      ...prevUser,
      attributes: {...prevUser.attributes, roomies: [ ...prevUser.attributes.roomies, {id, status: 'pending'} ]}
    }))
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <RequestRoomieContext.Provider value={requestRoomie}>
        <ErrorContext.Provider value={error}>
          <UsersContext.Provider value={users}>
            <main>
              <Navbar />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/dashboard" component={Dashboard} />
              </Switch>
            </main>
          </UsersContext.Provider>
        </ErrorContext.Provider>
      </RequestRoomieContext.Provider>
    </CurrentUserContext.Provider>
  );
}