import React from 'react'
import "./HomePage.css"
import MainCard from '../components/mainCard/mainCard'
import SocialLinks from '../components/SocialLinks/socialLinks'
import SolutionCard from '../components/solutionCard/solutionCard'
import LowerText from '../components/lowerText/LowerText'

const HomePage = () => {
  return (
    <div className='homepage-container'>
        <MainCard/>
        <SocialLinks/>
        <SolutionCard/>
        <LowerText/>
    </div>
  )
}

export default HomePage;