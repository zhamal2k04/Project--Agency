import React from 'react'
import "./MainCenterCard.css"
import amanda from "../../../../components/Images/amanda.jpg"
import LeafLet from '../LocationCard/LocationCard'

const MainCenterCard = () => {
  return (
    <div className='mainCenterCard-container'>
        <h1>Contact Us !</h1>
        <div className="componentsHandler">
            <div className="leftComponent">
                <h1>Get in touch with us</h1>
                <div className="text-help">
                    <img src={amanda} alt="/photo" />
                    <span>
                        <p>Hi, I'm Amanda. Need help? Use the form below or email me at hello@california-golfclub.org.</p>
                    </span>
                </div>
                <form>
                    <label>Name</label>
                    <input type="text" name='name' id='name' placeholder='Rachel Joe'/>
                    <label>Email</label>
                    <input type="email" name='email' id='email' placeholder='Rachel@domain.com'/>
                    <label>Message</label>
                     <textarea name="comment" id="comment" placeholder='Type your query here'></textarea>
                    <input type="submit" value={'Send my message'} id='submit'/>
                </form>
            </div>
            <div className="rightComponent">
                <LeafLet/>
            </div>
        </div>
    </div>
  )
}

export default MainCenterCard