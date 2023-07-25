import React from 'react';
import "./LowerCard.css";
import rightContainerImg from "../../../../components/Images/rightContainerImg.png"

const LowerCard = () => {
  return (
    <div className='lowerCard-container'>
        <div className="lowerCard_leftContainer">
            <h2>Features</h2>
            <h1>Contact Me To Get<br/>Your Work Done</h1>
            <p>Lorem Ipsum is simply dummy<br/>text of the printing.</p>
            <span id='readNow'>
                <p>Read Now →</p>
            </span>
        </div>
        <div className="lowerCard_rightContainer">
            <img src={rightContainerImg} alt="CardImg" />
        </div>
    </div>
  )
}

export default LowerCard;