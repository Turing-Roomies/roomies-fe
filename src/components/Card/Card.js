import React from 'react'
import './Card.scss'
import locationIcon from '../../assets/location-icon.png'
import userIcon from '../../assets/user-icon.png'

export default function Card({ user }) {
const { email, name, location, gender, age } = user.attributes
console.log(email);

    return (
        <article className='card'>
          <div className='card-name'>
            <h1>{name},</h1>
            <h3>{age}</h3>
          </div>
          <div className='card-info'>
            <div className='location-container'>
              <img className='location-icon' src={locationIcon} alt='location icon'/>
              <p>{location}</p>
            </div>
            <div className='gender-container'>
              <img className='user-icon' src={userIcon} alt='user icon'/>
              <p>{gender}</p>
            </div>
          </div>
          <button className='req-contact'>Request Contact</button>
        </article>
    )
}