import React from 'react'
import "../mainCard/mainCard.css"
import playerImg from "../../../../components/Images/player.png"

const MainCard = () => {
  return (
    <div className='mainCard-container'>
        <div className="mainTitle">
            <div className="topText">
                <p>WE'RE MODERN BUSINESS</p>
                <h1>Design Makes<br />Anything Possible</h1>
            </div>
            <div className="bottomText">
                <button>Get in Touch</button>
                <img src={playerImg} alt="playerImg" />
                <h1>Watch Video</h1>
            </div>  
        </div>
    </div>
  )
}

export default MainCard;