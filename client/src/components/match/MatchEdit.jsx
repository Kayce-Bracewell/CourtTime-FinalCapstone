import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getMatchById, editMatch } from "../../managers/matchManager";
import "./MatchEdit.css";

export const MatchEdit = () => {
    const [match, setMatch] = useState({
        id: '',
        matchLeaderId: '',
        matchOpponentId: '',
        courtId: '',
        scheduledTime: ''
    });

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
    }, [id]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setMatch({
            ...match,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        editMatch(match);
        navigate(`/matches/${match.id}`)
    };

    return (
        <div id="match-edit-page">
            <div id="match-edit-container">
                <h2>Edit Match</h2>
                <form onSubmit={handleSubmit}>
                    <input type="hidden" name="id" value={match.id} />
                    <input type="hidden" name="matchLeaderId" value={match.matchLeaderId} />

                    <div className="edit-info">
                        <h5>CourtId:</h5>
                        <input 
                            name="courtId"
                            value={match.courtId}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="edit-info">
                        <h5>OpponentId:</h5>
                        <input 
                            name="matchOpponentId"
                            value={match.matchOpponentId}
                            onChange={handleChange}
                        />
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
