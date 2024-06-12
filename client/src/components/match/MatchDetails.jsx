import { useEffect, useState } from "react"
import { getMatchById } from "../../managers/matchManager"
import { useParams } from "react-router-dom"


export const MatchDetails = () => {
    const [match, setMatch] = useState({})

    const { id } = useParams();

    useEffect(() =>  {
        getMatchById(id).then(setMatch)
    }, [])

    return (
        <>Match Details</>
    )
}