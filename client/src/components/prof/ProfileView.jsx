import "./ProfileView.css"
import placeholderImage from "../../assets/placeholder-profile-image.jpg"

export const ProfileView = ({ loggedInUser }) => {

    return (
        <div id="profile-container">
            <h2>Profile</h2>
            <div id="profile-image-container">
                <img src={loggedInUser.image ? loggedInUser.image : placeholderImage} />
            </div>
            <div className="profile-section">
                <div className="profile-subsection">
                    <p className="profile-prepend">Name:</p>
                    <h4 id="profile-name">{loggedInUser.firstName + " " + loggedInUser.lastName}</h4>
                </div>
                <div className="profile-subsection">
                    <p className="profile-prepend">Username:</p>
                    <h4>{loggedInUser.userName}</h4>
                </div>
                <div className="profile-subsection">
                    <p className="profile-prepend">Address:</p>
                    <h4>{loggedInUser.address}</h4>
                </div>
                <div className="profile-subsection">
                    <p className="profile-prepend">Email:</p>
                    <h4>{loggedInUser.email}</h4>
                </div>
                <div className="profile-subsection">
                    <p className="profile-prepend">Phone:</p>
                    <h4>{loggedInUser.phoneNum}</h4>
                </div>
            </div>
            <button id="edit-profile-btn">Edit Profile</button>
        </div>
    )
}