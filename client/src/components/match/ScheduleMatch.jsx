import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCourtById } from "../../managers/courtManager";
import { CreateMatch } from "../../managers/matchManager";
import { getAllUserProfiles } from "../../managers/userManager";
import "./ScheduleMatch.css"

export const ScheduleMatch = ({ loggedInUser }) => {
    const [opponentId, setOpponentId] = useState("");
    const [scheduledTime, setScheduledTime] = useState("");
    const [court, setCourt] = useState({});
    const [userProfiles, setUserProfiles] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const [filteredUserProfiles, setFilteredUserProfiles] = useState([]);

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getCourtById(id).then(setCourt);
        getAllUserProfiles().then(setUserProfiles);
    }, [id]);

    useEffect(() => {
        const filtered = userProfiles.filter(user =>
            `${user.firstName} ${user.lastName}`.toLowerCase().includes(searchInput.toLowerCase())
        );
        setFilteredUserProfiles(filtered);
    }, [searchInput, userProfiles]);

    const handleScheduleMatch = () => {
        const matchObj = {
            MatchLeaderId: loggedInUser.id,
            MatchOpponentId: parseInt(opponentId),
            CourtId: parseInt(id),
            ScheduledTime: scheduledTime
        };

        CreateMatch(matchObj).then((res) => navigate(`/matches/${res.id}`));
    };

    return (
        <div id="court-container">
            <h2 id="court-name">Schedule Form</h2>
            <div id="schedule-container">
                <div className="schedule-inputs">
                    <label className="info-label">Search Opponent:</label>
                    <input
                        className="input-black"
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                    />
                </div>
                <div className="schedule-inputs">
                    <label className="info-label">Select Opponent:</label>
                    <select
                        className="input-black"
                        value={opponentId}
                        onChange={(e) => setOpponentId(e.target.value)}
                    >
                        <option value="">Select an opponent</option>
                        {filteredUserProfiles.map(user => (
                            <option key={user.id} value={user.id}>
                                {user.firstName} {user.lastName}
                            </option>
                        ))}
                    </select>
                </div>
                <div id="last-schedule-input" className="schedule-inputs">
                    <label className="info-label">Enter Time:</label>
                    <input
                        className="input-black"
                        onChange={(e) => setScheduledTime(e.target.value)}
                    />
                </div>
            </div>
            <button onClick={handleScheduleMatch} id="create-match-btn">Create Match</button> 
        </div>
    );
};
