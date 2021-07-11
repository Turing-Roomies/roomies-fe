import React from 'react'
import './Card.scss'

export default function Card({ user }) {
const { email, name, location, gender, age } = user.attributes
console.log(email);

    return (
        <article className='card'>
            <h1>{name}</h1>
            <p>Email: {email}</p>
            <p>City: {location}</p>
            <p>Gender: {gender}</p>
            <p>Age: {age}</p>
        </article>
    )
}