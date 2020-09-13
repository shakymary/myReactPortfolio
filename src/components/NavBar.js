import React from "react";
import "../style.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar-container">
      <Link to="/">
        <h5>Home</h5>
      </Link>
      <Link to="/about">
        <h5>About</h5>
      </Link>
      <Link to="/skills">
        <h5>Skills</h5>
      </Link>
      <Link to="/porfolio">
        <h5>Portfolio</h5>
      </Link>
      <Link to="/contact">
        <h5>Contact</h5>
      </Link>
    </div>
  );
}

export default NavBar;
