import React from "react";
import "./NewsSection.css";
import newsImg from "../../../../components/Images/newsImg.png";
import newsImg2 from "../../../../components/Images/newsImg2.png";

const NewsSection = () => {
  return (
    <div className="newsSection">
        <span><h1>Popular News</h1></span>
      <div className="sectionsHandler">
        <div className="sectionLeft">
          <img src={newsImg} alt="newsImg" />
          <p>13 May, 2023</p>
          <h1>Teamwork as a team is the best way to</h1>
          <span>
            <p>
              Lorem Ipsum is simply dummy text of the printing.Lorem Ipsum is
              simply dummy text of the printing.
            </p>
          </span>
        </div>
        <div className="sectionRight">
          <img src={newsImg2} alt="newsImg" />
          <p>13 May, 2023</p>
          <h1>How to surviving on the great industry age</h1>
          <span>
            <p>
              Lorem Ipsum is simply dummy text of the printing.Lorem Ipsum is
              simply dummy text of the printing.
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
