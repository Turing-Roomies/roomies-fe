import React, { useState, useEffect } from 'react'


export default function Login() {

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [formError, setFormError] = useState(false)

    
    const handleChange = event => {
        event.target.name === 'userName' ? setUserName(event.target.value) : setPassword(event.target.value)
        setFormError(false)
    }

    function handleSubmit(event) {
        event.preventDefault()
        if(!userName || !password){
            setFormError(true)
        }
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
                    {formError && <h1>UserName or Password is missing!</h1>}
                </div>
            </form>
        </div>
    )
}

