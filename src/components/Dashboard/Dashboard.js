import React, { useState, useEffect, useContext } from 'react'
import Card from '../Card/Card'
import Context from '../../Context'
import './Dashboard.scss'

export default function Dashboard() {
    const users = useContext(Context)
    const cards = users.map((user) => {
        return <Card  user={user} key={user.id} />
    })

    return(
        <div className='cards-container'>
            {cards}
        </div>
    )
}