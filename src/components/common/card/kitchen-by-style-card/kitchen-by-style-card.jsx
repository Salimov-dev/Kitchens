import React from "react";
import "./kitchen-by-style-card.css"
import openIcon from "../../../../assets/images/search-on-yellow.png";

const KitchenByStyleCard = ({ item }) => {
  return (
    <div className="kitchen-by-style-card">
      <img src={item.image} alt="" className="kitchen-by-style-card__image"/>
      <img src={openIcon} alt="" className="kitchen-by-style-card__open-icon"/>
    </div>
  );
};

export default KitchenByStyleCard;
