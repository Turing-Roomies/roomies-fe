<<<<<<< HEAD
import React, { useContext } from 'react'
=======
import React, { useState } from 'react'
>>>>>>> f28554e (Add conditional render to button)
import './Card.scss'
import locationIcon from '../../assets/location-icon-orange.png'
import userIcon from '../../assets/user-icon-orange.png'
import RequestRoomieContext from '../../Context/RequestRoomieContext'

export default function Card({ user }) {
<<<<<<< HEAD
const { id, attributes: {name, location, gender, age } } = user
const requestRoomie = useContext(RequestRoomieContext)
=======
const { name, location, gender, age } = user.attributes
const [request, setRequest] = useState(false)
const cursor = {cursor: 'pointer'}
>>>>>>> f28554e (Add conditional render to button)

  const changeRequest = () => {
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
<<<<<<< HEAD
        </div>
        <button className='req-contact' onClick={ () => requestRoomie(id) }>Request Contact</button>
      </article>
  )
=======
          {request ? <button className='req-contact' disabled={true}>Request sent!</button> 
          : <button className='req-contact' onClick={changeRequest} style={cursor} >Request Contact</button> 
          }
        </article>
    )
>>>>>>> f28554e (Add conditional render to button)
}