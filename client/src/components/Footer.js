import React from "react";
import "../style.css";

function Footer() {
  return (
    <div className="footer-container">
      <p>&copy; Copyright {new Date().getFullYear()} </p>
    </div>
  );
}

export default Footer;
