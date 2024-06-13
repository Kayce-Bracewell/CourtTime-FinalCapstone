import { useState } from "react";
import "./ProfileView.css";
import placeholderImage from "../../assets/placeholder-profile-image.jpg";
import { updateUserProfile } from "../../managers/userManager";
import { tryGetLoggedInUser } from "../../managers/authManager";

export const ProfileView = ({ loggedInUser }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedProfile, setEditedProfile] = useState({
        firstName: loggedInUser.firstName,
        lastName: loggedInUser.lastName,
        userName: loggedInUser.userName,
        address: loggedInUser.address,
        email: loggedInUser.email,
        phoneNum: loggedInUser.phoneNum
    });

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedProfile({ ...editedProfile, [name]: value });
    };

    const handleSave = () => {
        updateUserProfile(loggedInUser.id, editedProfile).then(() => setIsEditing(false))
        tryGetLoggedInUser().then((user) => setLoggedInUser(user))
        console.log("Saving profile...", editedProfile);
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
                <button id="edit-profile-btn" onClick={handleSave}>Save</button>
            ) : (
                <button id="edit-profile-btn" onClick={handleEditToggle}>Edit Profile</button>
            )}
        </div>
    );
};
