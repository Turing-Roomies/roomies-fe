import React, { useContext } from 'react'
import './Card.scss'
import locationIcon from '../../assets/location-icon-orange.png'
import userIcon from '../../assets/user-icon-orange.png'
import RequestRoomieContext from '../../Context/RequestRoomieContext'

export default function Card({ user }) {
const { id, attributes: {name, location, gender, age } } = user
const requestRoomie = useContext(RequestRoomieContext)

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
        <button className='req-contact' onClick={ () => requestRoomie(id) }>Request Contact</button>
      </article>
  )
}