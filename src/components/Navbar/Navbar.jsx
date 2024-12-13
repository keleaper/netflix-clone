import React from 'react';
import "./Navbar.css";
import logo from "../../assets/logo.png"; // can import logo to implement with {logo}
import search_icon from "../../assets/search_icon.png";
import bell_icon from "../../assets/bell_icon.png";
import netflix_avatar from "../../assets/netflix_avatar.png";
import caret_icon from "../../assets/caret_icon.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Netflix logo" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search_icon} alt="search icon" className="icons" />
          <p>Kids</p>
        <img src={bell_icon} alt="bell icon" className="icons" />
        <div className="navbar-profile">
          <img src={netflix_avatar} alt="" className="profile" />
          <img src={caret_icon} alt="" className="icons" />
          <div className="dropdown">
            <p>Sign out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
