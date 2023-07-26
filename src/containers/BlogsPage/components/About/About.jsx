import React from 'react'
import "./About.css"

const AboutSection = () => {
  return (
    <div className='about-container'>
        <div className="aboutLeft-container">

        </div>
        <div className="aboutRight-container">
            <div className="MainText">
                <h2>About</h2>
                <h1>Boosts Your Website Traffic!</h1>
                <p>Lorem Ipsum is simply dummy text of the printing.Lorem Ipsum is simply dummy text of the printing.</p>
            </div>
            <div className="LowerText">
                <div className="NumsHolder">
                    <div className="projecstNum">
                        <h1>82</h1>
                        <p>Projects</p>
                    </div>
                    <div className="clientsNum">
                        <h1>36</h1>
                        <p>Clients</p>
                    </div>
                </div>
                <span>
                    <p>Read Now →</p>
                </span>
            </div>
            
        </div>
    </div>
  )
}

export default AboutSection;