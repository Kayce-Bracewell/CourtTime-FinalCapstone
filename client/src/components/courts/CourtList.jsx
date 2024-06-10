import { useEffect, useState } from "react"
import { getCourts } from "../../managers/courtManager"
import "./CourtList.css"

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
                        <img src={c.image} alt={`image of ${c.name}`}/>
                        <h4>{c.name}</h4>
                    </div>
                ))}
            </div>
        </div>
    )
}