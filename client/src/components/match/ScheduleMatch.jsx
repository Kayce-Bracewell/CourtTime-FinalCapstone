import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { getCourtById } from "../../managers/courtManager";
import { CreateMatch } from "../../managers/matchManager";

export const ScheduleMatch = ({ loggedInUser }) => {
    const [opponentId, setOpponentId] = useState("");
    const [scheduledTime, setScheduledTime] = useState("");
    const [court, setCourt] = useState({})

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getCourtById(id).then(setCourt)
    }, [id])

    const handleScheduleMatch = () => {
        const matchObj = {
            MatchLeaderId: loggedInUser.id,
            MatchOpponentId: parseInt(opponentId),
            CourtId: parseInt(id),
            ScheduledTime: scheduledTime
        }

        CreateMatch(matchObj).then((res) => navigate(`/matches/${res.id}`))
    }

    return (
        <div id="court-container">
            <h2 id="court-name">Schedule Form</h2>
            <div id="schedule-container">
                <div className="schedule-inputs">
                    <label className="info-label">Enter Opponent Id:</label>
                    <input className="input-black" onChange={(e) =>
                        setOpponentId(e.target.value)
                    }/>
                </div>
                <div id="last-schedule-input" className="schedule-inputs">
                    <label className="info-label">Enter Time:</label>
                    <input className="input-black" onChange={(e) => {
                        setScheduledTime(e.target.value)
                    }}/>
                </div>
            </div>
            <button onClick={handleScheduleMatch} id="create-match-btn">Create Match</button> 
        </div>
    )
}