import React, { useContext } from 'react'
import Context from '../../Context/UsersContext'
import RequestRoomieContext from '../../Context/RequestRoomieContext'
import './Requests.scss'
import Card from '../Card/Card'

export default function Requests() {
  const users = useContext(Context)
  const requestRoomie = useContext(RequestRoomieContext)
  console.log(users)
  if(users.length) {
    const requestCards = users.map(user => {
      return <Card user={user} key={user.id} />
    })
    return (
      <div>
        {requestCards}
      </div>
    )}
    
    return(
      <div>
        <h1>No current requests! Go to your dashboard to find potential roomies!</h1>
      </div>
  )
}
