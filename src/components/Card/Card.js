import React, { useState, useContext } from 'react'
import './Card.scss'
import locationIcon from '../../assets/location-icon-orange.png'
import userIcon from '../../assets/user-icon-orange.png'
import UsersContext from "../../Context/UsersContext"

import Button from '../Button/Button'

export default function Card({ user }) {
const { id, attributes: {name, location, gender, age , email} } = user

    return (
      <article className='card'>
        <div className='card-name'>
          <h1>{name},</h1>
          <h3>{age}</h3>
        </div>
        <div className='card-info'>
          <div className='location-container'>
            <img className='location-icon' src={locationIcon} alt='location icon'/>
            <p>{location.city}, {location.state}</p>
          </div>
          <div className='gender-container'>
            <img className='user-icon' src={userIcon} alt='user icon'/>
            <p>{gender}</p>
          </div>
        </div>
        <Button id={id} email={email}/>
      </article>
  )
}

Navbar.propTypes = {
  user: PropTypes.object
}