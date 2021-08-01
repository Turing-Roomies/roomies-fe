import React, { useContext } from 'react'
import UsersContext from "../../Context/UsersContext"
import ConnectionsContext from '../../Context/ConnectionContext'
import PropTypes from 'prop-types'


export default function Button({ id, email }) {
  const { currentUser } = useContext(UsersContext)
  const {requestRoomie, deleteRoomie } = useContext(ConnectionsContext)
  const cursor = {cursor: 'pointer'}

  const changeRequest = (query, reqId, recId) => {
    const reqBody = {
      "requestor_id": reqId,
      "receiver_id": recId
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
          <button className='accept' onClick={() => changeRequest('roomies', id , currentUser.id)}>Accept</button>
          <button className='decline' onClick={removeRequest}>Decline</button>
        </div>
        : <button className='req-contact' onClick={() => changeRequest('roomie_requests', currentUser.id, id)} style={cursor} >Request Contact</button>}
    </div>
  )
}

Button.propTypes = {
  id: PropTypes.string,
  email: PropTypes.string
}