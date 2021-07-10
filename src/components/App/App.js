import React, { useState, useEffect } from 'react'
import { fakeData } from '../../data'
import { Switch, Route } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Home from '../Home/Home'
import './App.scss'
import Dashboard from '../Dashboard/Dashboard'
import Context from '../../Context'

export default function App() {

  const [users, setUsers] = useState([])

  useEffect(() => {
      setUsers(fakeData.data)
  }, [])

  return (
    <Context.Provider value={users}>
      <main>
          <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/dashboard' component={Dashboard} />
        </Switch>
      </main>
    </Context.Provider>
  )
}