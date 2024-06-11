import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getCourtById } from "../../managers/courtManager"
import "./CourtDetails.css"

export const CourtDetails = () => {
    const [court, setCourt] = useState({})
    const { id } = useParams()

    useEffect(() => {
        getCourtById(id).then(setCourt)
    }, [])

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
                <img src={court.image} alt={`image for ${court.name}`}/>
                <div id="scheduled-matches">
                    <p id="match-header">Matches Container</p>
                </div>
            </div>
            <button id="schedule-btn">Schedule A Match!</button>
        </div>
    )
}