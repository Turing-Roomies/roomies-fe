import React, { useContext } from "react"
import Card from "../Card/Card"
import "./Dashboard.scss"
import UsersContext from "../../Context/UsersContext"

export default function Dashboard() {
  const users = useContext(UsersContext)
  const cards = users.map((user) => {
    return <Card user={user} key={user.id} />
  })

  return <div className="cards-container">{cards}</div>
}