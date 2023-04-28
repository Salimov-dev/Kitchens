import React from "react";
import "./advantage.css";

const CompanyAdvantage = ({ img, alt, text }) => {
  return (
    <div className="about-company__advantage">
      <img src={img} alt={alt} />
      {text}
    </div>
  );
};

export default CompanyAdvantage;
