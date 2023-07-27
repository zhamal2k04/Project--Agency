import React from 'react'
import "./ProfTeam.css"
import team_1 from "../../../../components/Images/team-1.png"
import team_2 from "../../../../components/Images/team-2.png"


const ProfTeam = () => {
  return (
    <div className='profTeam-container'>
        <span><h1>Professional Team</h1></span>
       <div className="SectionsHandler">
            <div className="SectionLeft">
                <img src={team_1} alt="team1Img" />
                <h1>Blade Reeves</h1>
                <p>Graphic Design</p>
            </div>
            <div className="SectionRight">
                <img src={team_2} alt="team2Img" />
                <h1>Blade Reeves</h1>
                <p>Graphic Design</p>
            </div>
        </div>
    </div>
  )
}

export default ProfTeam