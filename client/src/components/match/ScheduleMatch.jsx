import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCourtById } from "../../managers/courtManager";
import { CreateMatch } from "../../managers/matchManager";
import { getAllUserProfiles } from "../../managers/userManager";
import "./ScheduleMatch.css";

export const ScheduleMatch = ({ loggedInUser }) => {
    const [opponentId, setOpponentId] = useState("");
    const [scheduledDate, setScheduledDate] = useState({
        day: "",
        month: "",
        hour: "",
        year: new Date().getFullYear().toString() // Assuming current year
    });
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
            user.id !== loggedInUser.id &&
            `${user.firstName} ${user.lastName}`.toLowerCase().includes(searchInput.toLowerCase())
        );
        setFilteredUserProfiles(filtered);
    }, [searchInput, userProfiles, loggedInUser.id]);

    const handleScheduleMatch = () => {
        const { day, month, year, hour } = scheduledDate;
    
        // Convert month name to month index
        const monthIndex = new Date(Date.parse(`${month} 1, 2000`)).getMonth() + 1;
    
        // Construct ISO 8601 formatted datetime string with zero-padded values
        const isoFormattedDateTime = `${year}-${monthIndex.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}T${hour.toString().padStart(2, '0')}:00:00.000Z`;
    
        const matchObj = {
            MatchLeaderId: loggedInUser.id,
            MatchOpponentId: parseInt(opponentId),
            CourtId: parseInt(id),
            ScheduledTime: isoFormattedDateTime
        };
    
        CreateMatch(matchObj).then((res) => navigate(`/matches/${res.id}`));
    };

    // Function to generate array of options for days in a month
    const generateDayOptions = () => {
        const daysInMonth = 31; // Assuming maximum 31 days
        return Array.from({ length: daysInMonth }, (_, index) => index + 1);
    };

    // Array of month names for dropdown
    const monthOptions = [
        { value: "January", label: "January" },
        { value: "February", label: "February" },
        { value: "March", label: "March" },
        { value: "April", label: "April" },
        { value: "May", label: "May" },
        { value: "June", label: "June" },
        { value: "July", label: "July" },
        { value: "August", label: "August" },
        { value: "September", label: "September" },
        { value: "October", label: "October" },
        { value: "November", label: "November" },
        { value: "December", label: "December" }
    ];

    // Array of hour options (assuming 24-hour format)
    const hourOptions = Array.from({ length: 24 }, (_, index) => ({
        value: index.toString(),
        label: index < 10 ? `0${index}:00` : `${index}:00`
    }));

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
                <div className="schedule-inputs">
                    <label className="info-label">Select Day:</label>
                    <select
                        className="input-black"
                        value={scheduledDate.day}
                        onChange={(e) => setScheduledDate({ ...scheduledDate, day: e.target.value })}
                    >
                        <option value="">Select a day</option>
                        {generateDayOptions().map(day => (
                            <option key={day} value={day.toString()}>
                                {day}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="schedule-inputs">
                    <label className="info-label">Select Month:</label>
                    <select
                        className="input-black"
                        value={scheduledDate.month}
                        onChange={(e) => setScheduledDate({ ...scheduledDate, month: e.target.value })}
                    >
                        <option value="">Select a month</option>
                        {monthOptions.map(month => (
                            <option key={month.value} value={month.value}>
                                {month.label}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="schedule-inputs">
                    <label className="info-label">Select Hour:</label>
                    <select
                        className="input-black"
                        value={scheduledDate.hour}
                        onChange={(e) => setScheduledDate({ ...scheduledDate, hour: e.target.value })}
                    >
                        <option value="">Select an hour</option>
                        {hourOptions.map(hour => (
                            <option key={hour.value} value={hour.value}>
                                {hour.label}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <button onClick={handleScheduleMatch} id="create-match-btn">Create Match</button>
        </div>
    );
};
