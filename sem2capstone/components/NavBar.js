'use client'
import React, { useState } from "react";
import "./NavBar.css";
import Link from "next/link";

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
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href='/Services'>Services</Link></li>
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
