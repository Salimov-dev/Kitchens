import React from "react";
import "./quiz-1-card.css";

const Quiz1Card = ({ imgSrc, name, label, onChange, value, item, data }) => {
  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value });
  };

  return (
    <label
      htmlFor={item.name}
      className={
        "quiz-1__card " +
        (data.kitchenForm === item.name ? "quiz-1__card_active" : "")
      }
    >
      <div className="quiz-1__radio-field">
        <input
          className="quiz-1__radio-button"
          type="radio"
          name={name}
          id={item.name}
          onChange={handleChange}
          value={value}
        />
        <span className="quiz-1__radio-custom"></span>
        <span>{label}</span>
      </div>
      <div className="quiz-1__image-container">
        <img src={imgSrc} alt="item.name" className="quiz-1__image"/>
      </div>
      
    </label>
  );
};

export default Quiz1Card;
