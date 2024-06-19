import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserMatches } from "../../managers/matchManager";
import "./MatchList.css";

export const MatchList = ({ loggedInUser }) => {
    const [matches, setMatches] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getUserMatches(loggedInUser.id).then(setMatches);
    }, [loggedInUser.id]);

    const getDisplayName = (match) => {
        const opponentName = match.matchOpponent?.firstName + " " + match.matchOpponent?.lastName;
        const leaderName = match.matchLeader?.firstName + " " + match.matchLeader?.lastName;
        const loggedInUserName = loggedInUser.firstName + " " + loggedInUser.lastName;

        return opponentName === loggedInUserName ? leaderName : opponentName;
    };

    const formatScheduledTime = (scheduledTime) => {
        if (!scheduledTime) return "";
    
        const date = new Date(scheduledTime);
        return date.toLocaleString('en-US', {
            timeZone: 'UTC', // Adjust according to your stored timezone
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true // to show AM/PM
        });
    }
    

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
                        <p>{getDisplayName(m)}</p>
                    </div>
                    <div className="match-item">
                        <h4>Time</h4>
                        <p>{formatScheduledTime(m.scheduledTime)}</p>
                    </div>
                    <div className="match-item match-details">
                        <button id="details-btn" onClick={() => {
                            navigate(`${m.id}`);
                        }}>Details</button>
                    </div>
                </div>
            ))}
        </div>
    );
};
