import React from 'react'
import "./MyNavbar.css"
import bgImg from "../Images/logo.png";
import { Link } from 'react-router-dom';

const MyNavbar = () => {
  return (
    <div className='navbar-container'>
        <img src={bgImg} alt="bgImg" />
        <ul>
            <Link to={"/home"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/blog"}>Blog</Link>
            <Link to={"/sale"}>Sale</Link>
        </ul>
    </div>
  )
}

export default MyNavbar;