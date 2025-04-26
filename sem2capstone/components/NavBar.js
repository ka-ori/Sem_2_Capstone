'use client'
import React, { useState } from "react";
import "./NavBar.css";

function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="charityName">
        CHARITY NAME
      </div>

      <div className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Blog</li>
        </ul>
        <div className="auth-buttons">
          <div className="login">Login</div>
          <div className="SignUp">Sign Up</div>
        </div>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
  );
}

export default NavBar;
