import React from 'react'
import "./solutionCard.css"
import cardbgImg from "../../../../components/Images/bgImg.png"

const SolutionCard = () => {
  return (
    <div className='solutionCard-container'>
        <div className="left-container">
            <img src={cardbgImg} alt="cardBgimg" />
        </div>
        <div className="right-container">
            <p>About</p>
            <h1>The Best Solution<br/>For Your Company</h1>
            <p>Lorem Ipsum is simply<br/>dummy text of the printing.</p>
            <span>
                <p>Read Now →</p>
            </span>
        </div>
    </div>
  )
}

export default SolutionCard;