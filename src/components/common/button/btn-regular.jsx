import React from "react";
import "./button.css";

const ButtonRegular = ({
  text,
  fill,
  options,
  onClick,
  optionText,
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      className={
        "btn-regular " +
        (fill ? "btn-regular-yellow-color" : "btn-regular-empty-color")
      }
      style={options}
      disabled={disabled}
    >
      {text} {optionText}
    </button>
  );
};

export default ButtonRegular;
