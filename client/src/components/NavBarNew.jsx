import { Link } from "react-router-dom";
import "./NavBarNew.css"
import { logout } from "../managers/authManager";

export const NavBar = ({ loggedInUser, setLoggedInUser }) => {
    return (
        <div className="navbar">
            <div className="nav-item">
                <Link to="/">
                    🎾Court Time
                </Link>
            </div>
            {loggedInUser ? (
                <>
                    <div className="nav-item">
                        <Link to="/courts">
                            Courts
                        </Link>
                    </div>
                    <div className="nav-item">
                        <Link to="/profile">
                            Profile
                        </Link>
                    </div>
                    <div className="nav-item">
                        <Link to="/matches">
                            Upcoming Matches
                        </Link>
                    </div>
                    <button className="nav-item"
                        onClick={() => {
                            logout().then(() => {
                                setLoggedInUser(null);
                            });
                        }}
                    >
                        Logout
                    </button>
                </>
            ) : (
                <div className="nav-item">
                    <Link to="/login">
                        <button className="smaller-btn">Login</button>
                    </Link>
                </div>
            )}
        </div>
    );
};
