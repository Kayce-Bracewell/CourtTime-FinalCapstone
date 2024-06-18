import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getMatchById, editMatch } from "../../managers/matchManager";
import "./MatchEdit.css";
import { getCourts } from "../../managers/courtManager";
import { getAllUserProfiles } from "../../managers/userManager";

export const MatchEdit = ({ loggedInUser }) => {
    const [courts, setCourts] = useState([]);
    const [users, setUsers] = useState([]);
    const [match, setMatch] = useState({
        id: '',
        matchLeaderId: '',
        matchOpponentId: '',
        courtId: '',
        scheduledTime: ''
    });
    const [courtSearch, setCourtSearch] = useState('');
    const [userSearch, setUserSearch] = useState('');
    const [filteredCourts, setFilteredCourts] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);

    // Add state for date and time components
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [hour, setHour] = useState('');

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getMatchById(id).then(match => {
            setMatch({
                id: match.id,
                matchLeaderId: match.matchLeaderId,
                matchOpponentId: match.matchOpponentId,
                courtId: match.courtId,
                scheduledTime: match.scheduledTime
            });

            // Initialize date and time components from scheduledTime
            const date = new Date(match.scheduledTime);
            setDay(date.getUTCDate());
            setMonth(date.getUTCMonth() + 1); // getMonth() returns 0-11
            setHour(date.getUTCHours());
        });
        getCourts().then(setCourts);
        getAllUserProfiles().then(setUsers);
    }, [id]);

    useEffect(() => {
        setFilteredCourts(
            courts.filter(court =>
                court.name.toLowerCase().includes(courtSearch.toLowerCase())
            )
        );
    }, [courtSearch, courts]);

    useEffect(() => {
        setFilteredUsers(
            users.filter(user =>
                (user.firstName + ' ' + user.lastName).toLowerCase().includes(userSearch.toLowerCase()) &&
                user.id !== loggedInUser.id
            )
        );
    }, [userSearch, users, loggedInUser]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setMatch({
            ...match,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    
        // Construct the scheduledTime string from the selected components
        const year = new Date().getUTCFullYear();
        const scheduledTimeUTC = new Date(Date.UTC(year, month - 1, day, hour)); // Create UTC date
    
        // Convert to ISO string for consistency with server storage
        const scheduledTime = scheduledTimeUTC.toISOString();
    
        const updatedMatch = {
            ...match,
            scheduledTime: scheduledTime
        };
    
        editMatch(updatedMatch).then(() => navigate(`/matches/${match.id}`));
    };
    
    const handleCourtSearchChange = (event) => {
        setCourtSearch(event.target.value);
    };

    const handleUserSearchChange = (event) => {
        setUserSearch(event.target.value);
    };

    return (
        <div id="match-edit-page">
            <div id="match-edit-container">
                <h2>Edit Match</h2>
                <form onSubmit={handleSubmit}>
                    <input type="hidden" name="id" value={match.id} />
                    <input type="hidden" name="matchLeaderId" value={match.matchLeaderId} />

                    <div className="edit-info">
                        <h5>Search Court:</h5>
                        <input
                            type="text"
                            value={courtSearch}
                            onChange={handleCourtSearchChange}
                            placeholder="Search for court by name"
                        />
                        <select
                            name="courtId"
                            value={match.courtId}
                            onChange={handleChange}
                        >
                            <option value="">Select a court</option>
                            {filteredCourts.map(court => (
                                <option key={court.id} value={court.id}>
                                    {court.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="edit-info">
                        <h5>Search Opponent:</h5>
                        <input
                            type="text"
                            value={userSearch}
                            onChange={handleUserSearchChange}
                            placeholder="Search opponent by name"
                        />
                        <select
                            name="matchOpponentId"
                            value={match.matchOpponentId}
                            onChange={handleChange}
                        >
                            <option value="">Select an opponent</option>
                            {filteredUsers.map(user => (
                                <option key={user.id} value={user.id}>
                                    {user.firstName} {user.lastName}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="edit-info">
                        <h5>Time:</h5>
                        <div className="time-selectors">
                            <select value={month} onChange={(e) => setMonth(e.target.value)}>
                                <option value="">Month</option>
                                {[...Array(12).keys()].map(m => (
                                    <option key={m + 1} value={m + 1}>{new Date(0, m).toLocaleString('default', { month: 'long' })}</option>
                                ))}
                            </select>
                            <select value={day} onChange={(e) => setDay(e.target.value)}>
                                <option value="">Day</option>
                                {[...Array(31).keys()].map(d => (
                                    <option key={d + 1} value={d + 1}>{d + 1}</option>
                                ))}
                            </select>
                            <select value={hour} onChange={(e) => setHour(e.target.value)}>
                                <option value="">Hour</option>
                                {[...Array(24).keys()].map(h => (
                                    <option key={h} value={h}>{h}:00</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <button id="submit-edit-btn" type="submit">Save Changes</button>
                </form>
            </div>
        </div>
    );
};
