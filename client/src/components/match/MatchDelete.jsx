import { useNavigate, useParams } from "react-router-dom"
import "./MatchDelete.css"
import { deleteMatchById } from "../../managers/matchManager";

export const MatchDelete = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    return (
        <div id="delete-page">
            <div id="delete-container">
                <h2>Are you sure you want to delete?</h2>
                <div id="confirmation-container">
                    <button onClick={() => {
                        deleteMatchById(id).then(() => {
                            navigate("/matches")})
                    }} id="delete-btn">DELETE</button>
                    <button onClick={() => {
                        navigate(`/matches/${id}`)
                    }} id="edit-btn">CANCEL</button>
                </div>
            </div>
        </div>
    )
}