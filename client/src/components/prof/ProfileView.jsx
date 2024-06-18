import { useState } from "react";
import "./ProfileView.css";
import placeholderImage from "../../assets/placeholder-profile-image.jpg";
import { updateUserProfile } from "../../managers/userManager";
import { deleteUser, tryGetLoggedInUser } from "../../managers/authManager";
import { useNavigate } from "react-router-dom";

export const ProfileView = ({ loggedInUser, setLoggedInUser }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedProfile, setEditedProfile] = useState({
        firstName: loggedInUser.firstName,
        lastName: loggedInUser.lastName,
        userName: loggedInUser.userName,
        address: loggedInUser.address,
        email: loggedInUser.email,
        phoneNum: loggedInUser.phoneNum
    });

    const navigate = useNavigate();

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedProfile({ ...editedProfile, [name]: value });
    };

    const handleSave = () => {
        updateUserProfile(loggedInUser.id, editedProfile)
            .then(() => tryGetLoggedInUser())
            .then((user) => {
                setLoggedInUser(user);
                setIsEditing(false);
            })
            .catch((error) => console.error("Error updating profile:", error));
    };

    const handleDelete = (userId) => {
        deleteUser(userId)
            .then(() => navigate("/login"))
            .catch((error) => console.error("Error deleting profile:", error));
    };

    return (
        <div id="profile-container">
            <h2>Profile</h2>
            <div id="profile-image-container">
                <img src={loggedInUser.image ? loggedInUser.image : placeholderImage} alt="Profile" />
            </div>
            <div className="profile-section">
                <div className="profile-subsection">
                    <p className="profile-prepend">Name:</p>
                    {isEditing ? (
                        <>
                            <input
                                type="text"
                                name="firstName"
                                value={editedProfile.firstName || ""}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                name="lastName"
                                value={editedProfile.lastName || ""}
                                onChange={handleChange}
                            />
                        </>
                    ) : (
                        <h4 id="profile-name">{loggedInUser.firstName + " " + loggedInUser.lastName}</h4>
                    )}
                </div>
                <div className="profile-subsection">
                    <p className="profile-prepend">Username:</p>
                    {isEditing ? (
                        <input
                            type="text"
                            name="userName"
                            value={editedProfile.userName || ""}
                            onChange={handleChange}
                        />
                    ) : (
                        <h4>{loggedInUser.userName}</h4>
                    )}
                </div>
                <div className="profile-subsection">
                    <p className="profile-prepend">Address:</p>
                    {isEditing ? (
                        <input
                            type="text"
                            name="address"
                            value={editedProfile.address || ""}
                            onChange={handleChange}
                        />
                    ) : (
                        <h4>{loggedInUser.address}</h4>
                    )}
                </div>
                <div className="profile-subsection">
                    <p className="profile-prepend">Email:</p>
                    {isEditing ? (
                        <input
                            type="email"
                            name="email"
                            value={editedProfile.email || ""}
                            onChange={handleChange}
                        />
                    ) : (
                        <h4>{loggedInUser.email}</h4>
                    )}
                </div>
                <div className="profile-subsection">
                    <p className="profile-prepend">Phone:</p>
                    {isEditing ? (
                        <input
                            type="tel"
                            name="phoneNum"
                            value={editedProfile.phoneNum || ""}
                            onChange={handleChange}
                        />
                    ) : (
                        <h4>{loggedInUser.phoneNum}</h4>
                    )}
                </div>
            </div>
            {isEditing ? (
                <div id="profile-btn-container">
                    <button id="edit-profile-btn" onClick={handleSave}>Save Edit</button>
                    <button id="delete-profile-btn" onClick={() => handleDelete(loggedInUser.identityUserId)}>Delete Profile</button>
                </div>
            ) : (
                <button id="edit-profile-btn" onClick={handleEditToggle}>Edit Profile</button>
            )}
        </div>
    );
};
