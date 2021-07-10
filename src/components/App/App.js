import React from 'react'
import { Switch, Route } from 'react-router-dom'
import NavBar from '../Navbar/Navbar'
import './App.css'

export default function App() {
  


  return (
    <main>
      <Switch>
        <Navbar />
      </Switch>
    </main>
  )
}
