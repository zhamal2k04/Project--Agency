import React from 'react'
import "./MyNavbar.css"
import bgImg from "../Images/logo.png";

const MyNavbar = () => {
  return (
    <div className='navbar-container'>
        <img src={bgImg} alt="bgImg" />
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Blog</li>
            <li>Sale</li>
        </ul>
    </div>
  )
}

export default MyNavbar;