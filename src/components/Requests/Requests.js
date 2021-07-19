import React, { useContext } from 'react'
import UsersContext from '../../Context/UsersContext'
// import RequestRoomieContext from '../../Context/RequestRoomieContext'
import './Requests.scss'
import Card from '../Card/Card'

export default function Requests() {
  const { currentUser, users } = useContext(UsersContext)
  // const requestRoomie = useContext(RequestRoomieContext)

  if(currentUser.attributes.roomies.length) {
    const requestCards = users.filter(user => {
        return currentUser.attributes.roomies.find(element => user.id === element.id)
    }) 
    const roomieCards = requestCards.map(user => {
      return <Card user={user} key={user.id} />
    })
    return (
      <div>
        {roomieCards}
      </div>
  )}
    
  return(
    <div>
      <h1>No current requests! Go to your dashboard to find potential roomies!</h1>
    </div>
  )
}