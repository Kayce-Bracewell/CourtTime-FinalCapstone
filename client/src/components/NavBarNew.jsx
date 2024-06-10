import { Link } from "react-router-dom";

export const NavBar = ({ loggedInUser, setLoggedInUser }) => {
    return (
        <div className="navbar">
            <div className="nav-item">
                <Link to="/">
                    <label>🎾Court Time</label>
                </Link>
            </div>
            {loggedInUser ? (
                <>
                    <div className="nav-item">
                        <Link to="/courtlist">
                            <label>Courts</label>
                        </Link>
                    </div>
                    <div className="nav-item">
                        <button
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
                        <button>Login</button>
                    </Link>
                </div>
            )}
        </div>
    );
};
