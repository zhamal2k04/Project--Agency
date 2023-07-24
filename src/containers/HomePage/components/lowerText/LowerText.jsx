import React from 'react';
import "./LowerText.css";
import dot from "../../../../components/Images/dot.png"

const LowerText = () => {
  return (
    <div className='lowerText-container'>
        <div className="leftContainer">
            <h1>Provide Solution by<br/>Our Expert</h1>
            <p>Lorem Ipsum is simply dummy text<br/>of the printing and typesetting.</p>
            <ul>
                <li>Talk more about your project</li>
                <li>We help businesses grow fast</li>
                <li>Change the way for business.</li>
            </ul>
            <span id='readNow'>
                <p>Read Now →</p>
            </span>
        </div>
        <div className="rightContainer">
            <h1>All Seo and Online<br/>Marketing Needs</h1>
            <p>Lorem Ipsum is simply dummy text<br/>of the printing and typesetting.</p>
            <ul>
            <li>Talk more about your project</li>
                <li>We help businesses grow fast</li>
                <li>Change the way for business.</li>
            </ul>
            <span id='readNow'>
                <p>Read Now →</p>
            </span>
        </div>
    </div>
  )
}

export default LowerText;