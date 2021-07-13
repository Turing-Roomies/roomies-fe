import React, { useContext } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Context from '../../Context'
import './Requests.scss'
import Card from '../Card/Card'

export default function Requests() {
  const users = useContext(Context)
  return (
    <div>
      <Card />
      
    </div>
  )
}
