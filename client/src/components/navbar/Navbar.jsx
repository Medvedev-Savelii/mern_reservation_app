import React from "react";
import "./navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const goHome = () => navigate("/", "replace: true");

  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo" onClick={goHome}>
          RusBooking
        </span>
        <div className="navItem">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
