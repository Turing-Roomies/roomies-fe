import React, { useState, useEffect } from 'react';
import { fakeData } from '../../data'

export default function Dashboard() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        setUsers(fakeData.data)
    })

    return (
        <h1>YEET</h1>
    )
}