import React from "react";
import "./quiz-4-radio.css";

const QuizFourRadio = ({ value, onChange, item, name, data }) => {
    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
      };
  return (
    <label htmlFor={item.name} className="quiz-4__radio-label">
      <input
        className="quiz-4__radio-button"
        type="radio"
        id={item.name}
        name={name}
        onChange={handleChange}
        value={value}
      />
      <span className="quiz-4__radio-custom"></span>
      <span className="quiz-4__radio-custom-text">{item.value}</span>
    </label>
  );
};

export default QuizFourRadio;
