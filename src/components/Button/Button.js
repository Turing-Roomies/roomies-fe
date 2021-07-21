import React, { useContext } from 'react'
import UsersContext from "../../Context/UsersContext"
import RequestRoomieContext from '../../Context/RequestRoomieContext'
import PropTypes from 'prop-types'


export default function Button({ id, email }) {
  const { currentUser } = useContext(UsersContext)
  const {requestRoomie, deleteRoomie } = useContext(RequestRoomieContext)
  const cursor = {cursor: 'pointer'}

  const changeRequest = (query) => {
    const reqBody = {
      "requestor_id": currentUser.id,
      "receiver_id": id
    }
    requestRoomie(reqBody, query)
  }

  const removeRequest = () => {
    const remBody = {
      "requestor_id": id,
      "receiver_id": currentUser.id
    }
    deleteRoomie(remBody)
  }

  return (
    <div>
      {!currentUser ? null :
      !!currentUser.attributes.roomies.find(user => user.receiver_id === Number(id) || user.requestor_id === Number(id)) ? <div>{email}</div> :
      !!currentUser.attributes.roomie_requests_sent.find(user => user.receiver_id === Number(id)) ? <div className='contact-message'>Contact Sent!</div> :
      !!currentUser.attributes.roomie_requests_received.find(user => user.requestor_id === Number(id)) ?
        <div>
          <button onClick={() => changeRequest('roomies')}>Accept</button>
          <button onClick={removeRequest}>Decline</button>
        </div>
        : <button className='req-contact' onClick={() => changeRequest('roomie_requests')} style={cursor} >Request Contact</button>}
    </div>
  )
}

Button.propTypes = {
  id: PropTypes.string,
  email: PropTypes.string
}