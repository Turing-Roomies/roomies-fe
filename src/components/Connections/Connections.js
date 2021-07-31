import React, { useContext } from 'react'
import UsersContext from '../../Context/UsersContext'
import Card from '../Card/Card'
import "./Connections.scss"
import homeIcon from '../../assets/home.png'

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
    <section>
      <h3 className='roomies-header'>Your Connections <img className='home-icon'src={homeIcon} alt='home icon'/></h3>
      <div className='connection-container'>
        {!connections.length && <h1 className='no-roomies-msg'>Sorry, you don't have any roomies yet!</h1>}
        {roomieCards}
      </div>
    </section>
  )
}