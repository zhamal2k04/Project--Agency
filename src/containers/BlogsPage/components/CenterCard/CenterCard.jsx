import React from 'react'
import "./CenterCard.css"
import icon_1 from "../../../../components/Images/icon-1.png"
import icon_2 from "../../../../components/Images/icon-2.png"
import icon_3 from "../../../../components/Images/icon-3.png"

const CenterCard = () => {
  return (
    <div className='centerCard-container'>
        <span><h1>Popular Categories</h1></span>
        <div className="categoriesHolder">
            <div className="card">
                <img src={icon_1} alt="icon_1" />
                <h1>Design</h1>
                <p>Lorem Ipsum is simply dummy.Lorem Ipsum is simply dummy.</p>
                <h2>13 May, 2023</h2>
            </div>
            <div className="card">
                <img src={icon_2} alt="icon_2" />
                <h1>Design</h1>
                <p>Lorem Ipsum is simply dummy.Lorem Ipsum is simply dummy.</p>
                <h2>13 May, 2023</h2>

            </div>
            <div className="card">
                <img src={icon_3} alt="icon_3" />
                <h1>Design</h1>
                <p>Lorem Ipsum is simply dummy.Lorem Ipsum is simply dummy.</p>
                <h2>13 May, 2023</h2>

            </div>
        </div>
    </div>
  )
}

export default CenterCard