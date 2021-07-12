import React from 'react'
import './Card.scss'

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
          <p>City: {location}</p>
          <p>Gender: {gender}</p>
          </div>
          <button className='req-contact'>Request Contact</button>
        </article>
    )
}