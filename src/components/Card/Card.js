import React from 'react'

export default function Card({ user }) {
const { email, name, location, gender, age } = user.attributes
console.log(email);

    return (
        <article className='card'>
            <h1>{name}</h1>
            <p>{email}</p>
            <p>{location}</p>
            <p>{gender}</p>
            <p>{age}</p>
        </article>
    )
}