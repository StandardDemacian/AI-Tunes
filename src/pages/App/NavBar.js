import React from "react"
import { Link } from "react-router-dom"
import * as userService from "../../utilities/users-service"

export default function NavBar({user, setUser}) {
    function handleLogOut() {
        // we should delegate the actual loggin out to the users service
        userService.logOut()
        setUser(null)
    }
    return (
        <nav>
            <span>Howdy, {user.name} 
            <br></br>
            Current Score: {user.score}</span>
            <Link to="" onClick={handleLogOut}>Log Out</Link>
        </nav>
    )
}