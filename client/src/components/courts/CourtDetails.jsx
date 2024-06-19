import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getCourtById } from "../../managers/courtManager"
import "./CourtDetails.css"
import { getMatchesByCourtId } from "../../managers/matchManager"

export const CourtDetails = ({ loggedInUser }) => {
    const [court, setCourt] = useState({})
    const [courtMatches, setCourtMatches] = useState(null)
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        getCourtById(id).then(setCourt)
        getMatchesByCourtId(id)
            .then(matches => {
                if(matches.length === 0) {
                    setCourtMatches(null);
                } else {
                    setCourtMatches(matches)
                }
            })
    }, [id])

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
        <div id="court-container">
            <h2 id="court-name">{court.name}</h2>
            <div id="court-info">
                <div className="info-item">
                    <h5 className="info-label">Address:</h5>
                    <h5>{court.address}</h5>
                </div>
                <div className="info-item">
                    <h5 className="info-label">Size:</h5>
                    <h5>{court.courtSize}</h5>
                </div>
                <div className="info-item">
                    <h5 className="info-label">Surface:</h5>
                    <h5>{court.type}</h5>
                </div>
            </div>
            <div id="image-matches-container">
                <img id="court-detail-image" src={court.image} alt={`image for ${court.name}`}/>
                <div id="scheduled-matches">
                    <p id="match-header">Scheduled Matches</p>
                    {/* The line below will check if the court has matches.
                    If so, it puts them in the match container, otherwise: nothing*/}
                    {courtMatches ? 
                    <div id="match-simple-group">
                        {courtMatches.map(cm => (
                            <div key={cm.id} className="match-group-item">
                                <p>{cm.matchLeader?.firstName + " " + cm.matchLeader?.lastName}</p>
                                <p id="vs">VS</p>
                                <p>{cm.matchOpponent?.firstName + " " + cm.matchOpponent?.lastName}</p>
                                <p id="match-item-time">{formatScheduledTime(cm.scheduledTime)}</p>
                            </div>
                        ))}
                    </div> : <></>}
                </div>
            </div>
            <button id="schedule-btn" onClick={() => {
                navigate("schedule")
            }}>Schedule A Match!</button>
        </div>
    )
}
