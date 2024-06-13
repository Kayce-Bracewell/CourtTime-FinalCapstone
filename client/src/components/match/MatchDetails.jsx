import { useEffect, useState } from "react"
import { getMatchById } from "../../managers/matchManager"
import { useNavigate, useParams } from "react-router-dom"
import placeholderCourtImg from "../../assets/placeholder-court-real.jpg"
import "./MatchDetails.css"

export const MatchDetails = () => {
    const [match, setMatch] = useState({})
    const [showConfirm, setShowConfirm] = useState(false)

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() =>  {
        getMatchById(id).then(setMatch)
    }, [])

    return (
        <div id="match-container">
            <h2>Match Details</h2>
                <div key={match.id} className="court-info">
                    {/* When the images are fixed in seed data I need to change the src attribute */}
                    <img id="detail-img" src={placeholderCourtImg} alt={`image for ${match.court?.name}`}/>
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
                            <p>{match.matchOpponent?.firstName + " " + match.matchOpponent?.lastName}</p>
                        </div>
                        <div className="match-item-group">
                            <h6>Email:</h6>
                            <p>{match.matchOpponent?.email}</p>
                        </div>
                        <div className="match-item-group">
                            <h6>Phone:</h6>
                            <p>{match.matchOpponent?.phoneNum}</p>
                        </div>
                        <div className="match-item-group">
                            <h6>Skill:</h6>
                            <p>{match.matchOpponent?.skill} / 5</p>
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
    )
}