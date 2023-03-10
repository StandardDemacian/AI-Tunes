import React from "react"
import { useState } from "react"
import { logIn } from "../../utilities/users-service"
import './LoginForm.css'

export default function LoginForm({ setUser }) {

    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    })

    const [error, setError] = useState("")

    function handleChange (event) {
            //clone the state and update it with new key value
        setCredentials({
            ...credentials,
            [event.target.name]: event.target.value
        })
    }

    async function handleSubmit (event){
        try {        
            event.preventDefault()
            const userToLogin = await logIn(credentials)
            setUser(userToLogin)
        } catch {
            setError("Error Logging In")
        }
    }

return (
    <div className="login-container">
    <form autoComplete="off" onSubmit={handleSubmit}>
        <label>Email</label>
        <input 
            type="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            required
        />
        <label>Password</label>
        <input 
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
        />
        <button id="login-button" type="submit">Log In</button>
    </form>
    <p className="error-message">{error}</p>
    </div>
)
}