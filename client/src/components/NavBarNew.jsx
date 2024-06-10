import { Link } from "react-router-dom";
import "./NavBarNew.css"

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
                        <Link to="/courtlist">
                            Courts
                        </Link>
                    </div>
                    <div className="nav-item">
                        <button className="smaller-btn"
                            onClick={() => {
                                logout().then(() => {
                                    setLoggedInUser(null);
                                });
                            }}
                        >
                            Logout
                        </button>
                    </div>
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
