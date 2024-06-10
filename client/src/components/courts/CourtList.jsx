import { useEffect, useState } from "react"
import { getCourts } from "../../managers/courtManager"


export const CourtList = () => {
    const [courts, setCourts] = useState([])

    useEffect(() => {
        getCourts().then(setCourts)
    }, [])

    return (
        <h2>Courts</h2>
    )
}