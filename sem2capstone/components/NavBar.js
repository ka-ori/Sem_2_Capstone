import React from 'react'
import "./NavBar.css"
import logo from "../assets/Charity Logo.png"
function NavBar() {
  return (
    <div className="navbar">
    <img src = "https://www.shutterstock.com/image-vector/shake-hands-love-icon-vector-600nw-2475810585.jpg" alt ="" className="logo" height ="40px" />
    <ul>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Blog</li>
    </ul>
    <button className = "login">
        Login
    </button>
    <button className="SignUp">Sign Up</button>
        </div>
  )
}

export default NavBar