import React from 'react'
import "./ScheduleEvents.css"
import iconNext from "../../../../components/Images/iconNext.png"

const ScheduleEvents = () => {
  return (
    <div className='scheduleEvents-container'>
        <span><h1>Schedule Events</h1></span>
        <div className="scheduleHandler">
                <div className="Card">
                    <div className="date">
                        <h1>24</h1>
                        <p>May, 2023</p>
                    </div>
                    <div className="category">
                        <h1>Social Media Strategies</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className="icon">
                        <img src={iconNext} alt="iconNext" />
                    </div>
                </div>
                <div className="Card">
                    <div className="date">
                        <h1>28</h1>
                        <p>May, 2023</p>
                    </div>
                    <div className="category">
                        <h1>Social Media Strategies</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className="icon">
                        <img src={iconNext} alt="iconNext" />
                    </div>
                </div>
                <div className="Card">
                    <div className="date">
                        <h1>02</h1>
                        <p>May, 2023</p>
                    </div>
                    <div className="category">
                        <h1>Social Media Strategies</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className="icon">
                        <img src={iconNext} alt="iconNext" />
                    </div>
                </div>
        </div>
    </div>
  )
}

export default ScheduleEvents