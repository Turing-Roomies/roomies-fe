import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Home from '../Home/Home'
import Dashboard from '../Dashboard/Dashboard'
import './App.css'

export default function App() {

  return (
    <main>
        <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/dashboard' component={Dashboard} />
      </Switch>
    </main>
  )
}