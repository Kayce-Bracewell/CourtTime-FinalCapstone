import { useEffect, useState } from "react"
import { getCourts } from "../../managers/courtManager"
import { Link } from "react-router-dom"
import "./CourtList.css"
import placeholderCourtImg from "../../assets/placeholder-court-real.jpg"

export const CourtList = () => {
    const [courts, setCourts] = useState([])

    useEffect(() => {
        getCourts().then(setCourts)
    }, [])

    return (
        <div id="court-list">
            <h2>Courts</h2>
            <div className="court-container">
                {courts.map((c) => (
                    <div key={c.id} className="court-item">
                        <Link to={`${c.id}`} className="link-unstyled">
                            {/* <img src={placeholderCourtImg}/> */}
                            <img src={c.image} alt={`image of ${c.name}`}/>
                            <h4>{c.name}</h4>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}