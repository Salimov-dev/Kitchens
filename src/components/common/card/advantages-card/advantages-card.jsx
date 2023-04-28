import React from "react";
import "./advantages-card.css";

const AdvantagesCard = ({ icon, title, subtitle }) => {
  return (
    <div className="advantages-card__wrapper">
      <img src={icon} alt="" />
      <span>{title}</span>
      <span>{subtitle}</span>
    </div>
  );
};

export default AdvantagesCard;
