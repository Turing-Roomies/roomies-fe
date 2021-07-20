import React, { useContext } from 'react'
import UsersContext from "../../Context/UsersContext"
import RequestRoomieContext from '../../Context/RequestRoomieContext'

export default function Button({ id, email }) {
const { currentUser } = useContext(UsersContext)
const requestRoomie = useContext(RequestRoomieContext)

const cursor = {cursor: 'pointer'}

  const changeRequest = () => {
    requestRoomie(currentUser.id, id)
  }

  return (
    <div>
      {!currentUser ? null :
      !!currentUser.attributes.roomies.find(user => user.roomie_a_id === Number(id)) ? <div>{email}</div> :
      !!currentUser.attributes.roomie_requests_sent.find(user => user.receiver_id === Number(id)) ? <div>Contact Sent!</div> :
      !!currentUser.attributes.roomie_requests_received.find(user => user.requestor_id === Number(id)) ?
        <div>
          <button>Accept</button>
          <button>Decline</button>
        </div>
        : <button className='req-contact' onClick={changeRequest} style={cursor} >Request Contact</button>}
    </div>
  )
}
