import React from "react"
import { useState } from "react"
import { logIn  } from "../../utilities/users-service"
import { getAllUsers } from "../../utilities/users-api"
import './LoginForm.css'

export default function LoginForm({setUser}) {
    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
    })

    const [error, setError] = useState('')

    function handleChange(e) {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    async function handleSubmit(e) {
        try {
            e.preventDefault()
            const user = await logIn(credentials)
            setUser(user)
            getAllUsers()
            
        } catch {
            setError('Error Logging In')
        }
    }

    return (
        <div className="login-form-container">
                <form autoComplete="off" onSubmit={handleSubmit} id="login-form">
                    <label>Email</label>
                    <input 
                        type="email"
                        name="email"
                        className="login-input"
                        value={credentials.email}
                        onChange={handleChange}
                        required 
                    />
                    <label>Password</label>
                    <input 
                        type="password"
                        name="password"
                        className="login-input"
                        value={credentials.password}
                        onChange={handleChange}
                        required 
                    />
                    <button type="submit" id="login-button">Sign In</button>
                </form>
                <p className="error-message">{error}</p>
            </div>
    )
}