import React from 'react'

export default function Login() {

    function handleSubmit(event) {
        event.preventDefault()
    }

    return (
        <div>
            <form>
                <div>
                    <label>User Name
                        <input 
                        type='text'
                        required
                        />
                    </label>
                    <label>password
                        <input 
                        type='text'
                        required
                        />
                    </label>
                    <button className='submit-button' onClick={event => handleSubmit(event)} type='submit'>Login</button>
                </div>
            </form>
        </div>
    )
}
