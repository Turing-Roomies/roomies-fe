import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Home from '../Home/Home'
import './App.css'

export default function App() {

  return (
    <main>
      <Switch>
        <Navbar />
        <Route 
        path='/'
        component={Home}
        />
      </Switch>
    </main>
  )
}
