import React from 'react'
import "./SalePage.css"
import PopCategories from '../components/PopularCategory/Categories'
import ScheduleEvents from '../components/ScheduleEvents/ScheduleEvents'


const SalePage = () => {
  return (
    <div className='salePage-container'>
        <PopCategories/>
        <ScheduleEvents/>
    </div>
  )
}

export default SalePage