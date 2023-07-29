import React from 'react'
import "./MyNavbar.css"
import bgImg from "../Images/logo.png";
import { Link } from 'react-router-dom';
import {FaUserAlt} from "react-icons/fa"
const MyNavbar = () => {
  return (
    <div className='navbar-container'>
        <img src={bgImg} alt="bgImg" />
        <ul>
            <Link to={"/home"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/blog"}>Blog</Link>
            <Link to={"/sale"}>Sale</Link>
            <Link to={"/login"}><FaUserAlt className='relative items-center justify-center'/></Link>
        </ul>
    </div>
  )
}

export default MyNavbar;