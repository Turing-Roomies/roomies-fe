import React, { useState, useContext } from 'react'
import './Card.scss'
import locationIcon from '../../assets/location-icon-orange.png'
import userIcon from '../../assets/user-icon-orange.png'
import UsersContext from "../../Context/UsersContext"
// import RequestRoomieContext from '../../Context/RequestRoomieContext'

export default function Card({ user }) {
const { id, attributes: {name, location, gender, age } } = user
const [request, setRequest] = useState(false)
const cursor = {cursor: 'pointer'}
const { currentUser } = useContext(UsersContext)

  const changeRequest = () => {
    requestRoomie(currentUser.id, id)
    setRequest(true)
  }

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
        {!currentUser ? <div></div>
        
        : request ? <button className='req-contact' disabled={true}>Request sent!</button> 
       
        : <button className='req-contact' onClick={changeRequest} style={cursor} >Request Contact</button> 
        }
      </article>
  )
}