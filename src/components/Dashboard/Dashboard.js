import React, { useContext } from "react"
import Card from "../Card/Card"
import "./Dashboard.scss"
import UsersContext from "../../Context/UsersContext"
import homeIcon from '../../assets/home.png'

export default function Dashboard() {
  const { users } = useContext(UsersContext)
  const cards = users.map((user) => {
    return <Card user={user} key={user.id} />
  })

  return <section className='card-section'>
            <h3 className='roomies-header'>Available Roomies <img className='home-icon'src={homeIcon} alt='home icon'/></h3>
            <div className="cards-container">
              {cards}
            </div>
          </section>
    
}