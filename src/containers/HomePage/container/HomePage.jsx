import React from 'react'
import "./HomePage.css"
import MainCard from '../components/mainCard/mainCard'
import SocialLinks from '../components/SocialLinks/socialLinks'
import SolutionCard from '../components/solutionCard/solutionCard'

const HomePage = () => {
  return (
    <div className='homepage-container'>
        <MainCard/>
        <SocialLinks/>
        <SolutionCard/>
    </div>
  )
}

export default HomePage;