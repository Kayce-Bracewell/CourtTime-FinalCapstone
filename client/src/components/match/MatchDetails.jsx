import { useEffect, useState } from "react";
import { getMatchById } from "../../managers/matchManager";
import { useNavigate, useParams } from "react-router-dom";
import "./MatchDetails.css";

export const MatchDetails = ({ loggedInUser }) => {
    const [match, setMatch] = useState({});
    const [showConfirm, setShowConfirm] = useState(false);

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getMatchById(id).then(setMatch);
    }, [id]);

    const getDisplayInfo = (match) => {
        const opponentName = match.matchOpponent?.firstName + " " + match.matchOpponent?.lastName;
        const loggedInUserName = loggedInUser.firstName + " " + loggedInUser.lastName;
        
        return opponentName === loggedInUserName ? match.matchLeader : match.matchOpponent;
    }

    const displayInfo = getDisplayInfo(match);

    return (
        <div id="match-container">
            <h2>Match Details</h2>
            <div key={match.id} className="court-info">
                <img id="detail-img" src={match.court?.image} alt={`image for ${match.court?.name}`} />
                <div className="court-subsection">
                    <h5>{match.court?.name}</h5>
                    <div className="court-item-group">
                        <h6>Address:</h6>
                        <p>{match.court?.address}</p>
                    </div>
                    <div className="court-item-group">
                        <h6>Surface Type:</h6>
                        <p>{match.court?.type}</p>
                    </div>
                    <div className="court-item-group">
                        <h6>Size:</h6>
                        <p>{match.court?.courtSize}</p>
                    </div>
                </div>
            </div>
            <div className="match-details-section">
                <div className="match-subsection">
                    <h5>Opponent Info</h5>
                    <div className="match-item-group">
                        <h6>Name:</h6>
                        <p>{displayInfo?.firstName + " " + displayInfo?.lastName}</p>
                    </div>
                    <div className="match-item-group">
                        <h6>Email:</h6>
                        <p>{displayInfo?.email}</p>
                    </div>
                    <div className="match-item-group">
                        <h6>Phone:</h6>
                        <p>{displayInfo?.phoneNum}</p>
                    </div>
                    <div className="match-item-group">
                        <h6>Skill:</h6>
                        <p>{displayInfo?.skill} / 5</p>
                    </div>
                </div>
            </div>
            <div className="match-details-section">
                <div className="match-time-section">
                    <button onClick={() => {
                        navigate("edit")
                    }} id="edit-btn">Edit Match</button>
                    <h4>{"Scheduled Time: " + match.scheduledTime}</h4>
                    <button onClick={() => {
                        navigate("delete")
                    }} id="delete-btn">Delete Match</button>
                </div>
            </div>
        </div>
    );
}
