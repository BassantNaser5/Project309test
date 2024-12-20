import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./profile.css";
import image from "../images/573a46c7818f8cca76e394ac5af72542.jpg";
import { FaArrowLeft } from "react-icons/fa";

const Profile = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  useEffect(() => {

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (currentUser) {
 
      setUserData({
        name: currentUser.name || "No name",    
        email: currentUser.email || "No email", 
        phone: currentUser.password || "No phone",  
        address: currentUser.address || "No address", 
      });
    }
  }, []);

  return (
    <div className="profile">
      <div className="profile-header">
        <FaArrowLeft
          className="back-icon"
          onClick={() => navigate("/product")}
        />
        <div className="profile-img-box">
          <img className="profile-img" src={image} alt="Profile" />
        </div>
        <div className="profile-header-text">
          <p>{userData.name}</p>
        </div>
      </div>
      <div className="profile-input-box">
        <div className="profile-input">
          <p>Username:</p>
          <input type="text" value={userData.name} readOnly />
        </div>
        <div className="profile-input">
          <p>Email:</p>
          <input type="email" value={userData.email} readOnly />
        </div>
        <div className="profile-input">
          <p>Phone:</p>
          <input type="phone" value={userData.password} readOnly />
        </div>
        <div className="profile-input">
          <p>Address:</p>
          <input type="text" value={userData.address} readOnly />
        </div>
      </div>
      <div className="profile-btns">
        <Link to={"/profile/edit"}>
          <button className="Profilebutton1">Edit Profile</button>
        </Link>
        <Link to={"/product"}>
          <button className="Profilebutton2">Cancel</button>
        </Link>
      </div>
    </div>
  );
};

export default Profile;