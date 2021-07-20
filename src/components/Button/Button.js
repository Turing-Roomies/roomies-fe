import React, { useContext } from 'react'
import UsersContext from "../../Context/UsersContext"
import RequestRoomieContext from '../../Context/RequestRoomieContext'

export default function Button({ id, email }) {
const { currentUser } = useContext(UsersContext)
const requestRoomie = useContext(RequestRoomieContext)

const cursor = {cursor: 'pointer'}

  const changeRequest = (query) => {
    const reqBody = {
      "requestor_id": currentUser.id,
      "receiver_id": id
    }
    requestRoomie(query, reqBody)
  }

  return (
    <div>
      {!currentUser ? null :
      !!currentUser.attributes.roomies.find(user => user.roomie_a_id === Number(id)) ? <div>{email}</div> :
      !!currentUser.attributes.roomie_requests_sent.find(user => user.receiver_id === Number(id)) ? <div>Contact Sent!</div> :
      !!currentUser.attributes.roomie_requests_received.find(user => user.requestor_id === Number(id)) ?
        <div>
          <button onClick={changeRequest('roomies')}>Accept</button>
          <button onClick={changeRequest('roomie_requests/:id')}>Decline</button>
        </div>
        : <button className='req-contact' onClick={changeRequest('roomie_requests')} style={cursor} >Request Contact</button>}
    </div>
  )
}
