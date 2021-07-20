import React, { useContext } from 'react'
import UsersContext from '../../Context/UsersContext'
// import RequestRoomieContext from '../../Context/RequestRoomieContext'
import './Requests.scss'
import Card from '../Card/Card'



export default function Requests() {
  const { currentUser, users } = useContext(UsersContext);

  let connections = []
  
  const helper = (array, id) => {
    if (array.length) {
      array.forEach(request => {
        users.forEach(user => {
          if (request[id] === Number(user.id)) {
                connections.push(user)
          }
        })
      })
    }
  }
  helper(currentUser.attributes.roomie_requests_received, 'requestor_id')
  helper(currentUser.attributes.roomie_requests_sent, 'receiver_id')
  helper(currentUser.attributes.roomies, 'roomie_a_id')


  const roomieCards = connections.map(user => {
    return <Card user={user} key={user.id} />;
  })
    
  //We still need to conditionally render a "You have no connections" message
  return (
    <div>
      <div>{roomieCards}</div>
    </div>
  )
}