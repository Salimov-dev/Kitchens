import React, { useState } from "react";
import "./quiz-3-card.css";

const Quiz3Card = ({
  imgSrc,
  name,
  label,
  onChange,
  value,
  item,
  data,
  setData,
  isEmpty,
}) => {
  const [selectedNumber, setSelectedNumber] = useState(1);
  // const isActive = document.querySelector('.quiz-3__card.quiz-3__card_active') !== null
  // const isActive = document.querySelector(".quiz-3__card").classList?.contains("quiz-3__card_active")
  // console.log("isActive", isActive);

  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value });
  };

  const handleCanselShoose = ({ target }) => {
    if (data[item.name] !== isEmpty) {
      setData((prevState) => ({ ...prevState, [item.name]: isEmpty }));
    } else {
      document.querySelector(".quiz-3__radio-custom::before");
      return handleChange({ target });
    }
  };

  return (
    <div className="quiz-3__card-container">
      <label
        htmlFor={item.name}
        className={
          "quiz-3__card " +
          (data[item.name] === item.value ? "quiz-3__card_active" : "no-pseudo")
        }
      >
        <div className="quiz-3__radio-field ">
          <input
            onClick={(e) => handleCanselShoose(e)}
            className="quiz-3__radio-button"
            type="radio"
            name={name}
            id={item.name}
            onChange={handleChange}
            value={value}
          />
          <span className="quiz-3__radio-custom">
            {/* <span>{selectedNumber}</span> */}
          </span>
        </div>
        <div className="quiz-3__image-container">
          <img src={imgSrc} alt="item.name" className="quiz-3__image" />
        </div>
      </label>
      <span className="quiz-3__radio-subtitle">{label}</span>
    </div>
  );
};

export default Quiz3Card;
