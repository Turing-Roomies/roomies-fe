import React, { useContext } from 'react'
import UsersContext from '../../Context/UsersContext'
// import RequestRoomieContext from '../../Context/RequestRoomieContext'
import './Requests.scss'
import Card from '../Card/Card'



export default function Requests() {
  const { currentUser, users } = useContext(UsersContext);
  let connections = []
  
  const roomieMaker = (array, id) => {
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
  roomieMaker(currentUser.attributes.roomie_requests_received, 'requestor_id')
  roomieMaker(currentUser.attributes.roomie_requests_sent, 'receiver_id')
  roomieMaker(currentUser.attributes.roomies, 'receiver_id')
  roomieMaker(currentUser.attributes.roomies, 'requestor_id')

  const roomieCards = connections.map((user, index) => {
    return <Card user={user} key={index} />;
  })
    
  return (
    <div>
      <div>{roomieCards}</div>
    </div>
  )
}