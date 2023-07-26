import React from 'react'
import "./LowCard.css"
import blackPlayer from "../../../../components/Images/black-player.png"

const LowCard = () => {
  return (
    <div className='lowCard-container'>
        <h1>Watch Video</h1>
        <img src={blackPlayer} alt="blackPlayer" />
    </div>
  )
}

export default LowCard