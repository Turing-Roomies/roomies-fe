import React, { useState, useEffect, useContext } from 'react'
import Card from '../Card/Card'
import Context from '../../Context'

export default function Dashboard() {
    const users = useContext(Context)
       const cards = users.map((user) => {
console.log(user);
        return <Card  user={user} key={user.id} />
      })

        return(
            <div>
                {cards}
            </div>
        )
}