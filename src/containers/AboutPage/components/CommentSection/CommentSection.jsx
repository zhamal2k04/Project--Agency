import React from 'react'
import "./CommentSection.css"
import fiveStar from "../../../../components/Images/fiveStar.png"

const CommentSection = () => {
  return (
      <div className="commentSection">
            <span><h1>What People Say</h1></span>
                <div className="sectionHandler">
                    <div className="leftSection">
                        <img src={fiveStar} alt="fiveStar" />
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                        <h1>Sandra Robert</h1>
                        <span><p>YouTube</p></span>
                    </div>
                    <div className="rightSection">
                    <img src={fiveStar} alt="fiveStar" />
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                        <h1>Oliver Charlotte</h1>
                        <span><p>Twitch</p></span> 
                    </div>
                </div>
        </div>
  )
}

export default CommentSection