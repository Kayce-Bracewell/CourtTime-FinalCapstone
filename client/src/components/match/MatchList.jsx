import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getUserMatches } from "../../managers/matchManager"
import "./MatchList.css"

export const MatchList = ({ loggedInUser }) => {
    const [matches, setMatches] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getUserMatches(loggedInUser.id).then(setMatches)
    }, [])

    return (
        <div id="main-match-container">
            <h1>Scheduled Matches</h1>
                {matches.map((m) => (
                    <div key={m.id} className="match-container">
                        <div className="match-item">
                            <h4>Location</h4>
                            <p>{m.court.name}</p> 
                        </div>
                        <div className="match-item">
                            <h4>Opponent</h4>
                            <p>{m.matchOpponent.firstName + " " + m.matchOpponent.lastName}</p>
                        </div>
                        <div className="match-item">
                            <h4>Time</h4>
                            <p>{m.scheduledTime}</p>
                        </div>
                        <div className="match-item match-details">
                            <button id="details-btn" onClick={() => {
                                navigate(`${m.id}`)
                            }}>Details</button>
                        </div>
                    </div>
                ))}
        </div>
    )
}