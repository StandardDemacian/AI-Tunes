import React from "react"
import { Link } from "react-router-dom"
import * as userService from "../../utilities/users-service"
import "./NavBar.css"

export default function NavBar({user, setUser}) {
    function handleLogOut() {
        // we should delegate the actual loggin out to the users service
        userService.logOut()
        setUser(null)
    }
    return (
        <div className="navbar">
        <nav>
            <span>Howdy, {user.name} 
            <br></br>
            Current Score: {user.score}</span>
            <br></br>
            <Link to="" onClick={handleLogOut} id="log-out-nav-bar">Log Out</Link>
        </nav>
        </div>
    )
}