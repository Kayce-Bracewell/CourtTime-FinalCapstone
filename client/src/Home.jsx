import { useEffect, useState } from "react";
import "./Home.css"
import { getUserMatches } from "./managers/matchManager";
import { Link } from "react-router-dom";

export const Home = ({ loggedInUser }) => {
    const [matches, setMatches] = useState(null)

    useEffect(() => {
        getUserMatches(loggedInUser.id)
            .then(m => {
                if(m.length === 0) {
                    setMatches(null)
                } else {
                    setMatches(m)
                }
            })
    }, [loggedInUser])

    return (
        <div className="pseudo-body">
            <Link to="matches">
                <div id="upcoming-match-banner">
                    <h1>!</h1>
                    <h3>You have upcoming matches</h3>
                    <h1>!</h1>
                </div>
            </Link>
            <h2>Welcome to Court Time!</h2>
            <div id="upcoming-matches-container">
                <h3>Scheduled Matches</h3>
                {matches?.map((m) => (
                    <div key={m.id} className="match-container">
                        <div className="match-item">
                            <h4>Location</h4>
                            <p>{m.court?.name}</p>
                        </div>
                        <div className="match-item">
                            <h4>Opponent</h4>
                            <p>{m.matchOpponent?.firstName + " " + m.matchOpponent?.lastName}</p>
                        </div>
                        <div className="match-item">
                            <h4>Time</h4>
                            <p>{m.scheduledTime}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}