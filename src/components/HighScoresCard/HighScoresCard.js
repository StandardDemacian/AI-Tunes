import { useState, useEffect } from "react"
import { getAllUsers } from "../../utilities/users-api"
import TopScorersCard from "./TopScorersCard"

export default function HighScoreCard(){
    const [topUsers, setTopUsers] = useState([])

    useEffect(function() {
        async function getHighestScoringUsers(){
            const topUsers = await getAllUsers()
            setTopUsers(topUsers)
        }
        getHighestScoringUsers()
    }, [])

    // creating a leaderBoard - Sorts through every user's score and finds the user's with the top 5 highest scores
   const leaderBoard = topUsers.sort(
        (user1, user2) => (user1.score < user2.score) ? 1 : (user1.score > user2.score) ? -1 : 0
    ).slice(0, 5)


    return(
        <div>
            <h1>Top Scorers</h1>
            {leaderBoard.map((user, index) => (
                <TopScorersCard name={user.name} score={user.score} index={index} />
            ))}
        </div>
    )
}