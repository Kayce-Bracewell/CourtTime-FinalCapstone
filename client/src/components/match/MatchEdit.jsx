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
        editMatch(match).then(() => navigate(`/matches/${match.id}`));
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
                            placeholder="Search for opponent by name"
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
                        <input
                            name="scheduledTime"
                            value={match.scheduledTime}
                            onChange={handleChange}
                        />
                    </div>
                    <button id="submit-edit-btn" type="submit">Save Changes</button>
                </form>
            </div>
        </div>
    );
};
