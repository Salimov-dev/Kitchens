import React from "react";
import "./kitchen-card.css";

const KitchenCard = ({ item }) => {
  return (
    <div className="kitchen-card__container">
      <div className="kitchen-card__image-container">
        <img src={item.images.img01} alt="" className="kitchen-card__image" />
      </div>
      <div className="kitchen-card__main">
        <div className="kitchen-card__title">{item.titles.title}</div>
        <div className="kitchen-card__sub-title">{item.titles.subTitle}</div>
        <div className="kitchen-card__footer">
          <div className="kitchen-card__price">
            <div className="kitchen-card__prev-price">
              {item.price.prevPrice + " ₽"}
            </div>
            <div className="kitchen-card__new-price">
              {item.price.newPrice + " ₽"}{" "}
            </div>
          </div>
          <button className="kitchen-card__add-button">+</button>
        </div>
      </div>
    </div>
  );
};

export default KitchenCard;
