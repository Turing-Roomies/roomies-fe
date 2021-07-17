import React, { useState, useEffect } from 'react'


export default function Login() {

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    
    const handleChange = event => {
        event.target.name === 'userName' ? setUserName(event.target.value) : setPassword(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log()
        //IF either input is empty, or wrong, conditionally render
        //a message that says "Username or password was incorrect"
        clearInputs()
    }

    const clearInputs = () => {
        setUserName('')
        setPassword('')
    }

    return (
        <div>
            <form>
                <div>
                    <label>User Name
                        <input 
                        type='text'
                        onChange={event => handleChange(event)}
                        value={userName}
                        name='userName'
                        required
                        />
                    </label>
                    <label>password
                        <input 
                        type='text'
                        onChange={event => handleChange(event)}
                        value={password}
                        name='password'
                        required
                        />
                    </label>
                    <button className='submit-button' onClick={event => handleSubmit(event)} type='submit'>Login</button>
                </div>
            </form>
        </div>
    )
}

