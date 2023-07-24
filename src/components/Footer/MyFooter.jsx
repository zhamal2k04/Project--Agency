import React from 'react'
import "./MyFooter.css"
import bgImg2 from "../Images/footer-bg.png"
import facebook from "../Images/facebook.png";
import instagram from "../Images/instagram.png";
import linkedin from "../Images/LinkedIn.png";
import twitter from "../Images/twitter.png";

const MyFooter = () => {
  return (
    <div className='footer-container'>
        <div className="footerLinkHolder">
          <div className="firstLinks">
              <img src={bgImg2} alt="bgImg" />
              <p>65 E.Forest Hills,<br />New York 11209</p>
              <ul>
                <li><img src={facebook} alt="logoFacebook" /></li>
                <li><img src={instagram} alt="logoInstagram" /></li>
                <li><img src={linkedin} alt="logoLinkedIn" /></li>
                <li><img src={twitter} alt="logoTwitter" /></li>
              </ul>
          </div>
          <div className="secondaryLinks">
              <h1>Contact Info</h1>
              <section>
              <p>Call us:<br/>+01 ( 234 ) 567-891</p>
              <p>Email us:<br />support@mail.com</p>
              </section>
              
          </div>
          <div className="thirdLinks">
              <h1>More Links</h1>
              <ul>
                <li>Help Center</li>
                <li>My Account</li>
                <li>Contact</li>
                <li>Privacy</li>
              </ul>
          </div>
        </div>
        <hr style={{border: '2px solid lightgray', borderRadius: '10px'}}/>
      <div className="footerEnd">
          <p>@2021 Maool Inc. All Rights Reserved.</p>
          <p>©Copyright</p>
      </div>
    </div>
  )
}

export default MyFooter