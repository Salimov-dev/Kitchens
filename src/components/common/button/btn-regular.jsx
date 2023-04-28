import React from "react";
import "./button.css";

const ButtonRegular = ({ text, fill, options }) => {
  return (
    <button
      className={"btn-regular " + (fill ? "btn-regular-yellow-color" : "btn-regular-empty-color")}
      style={options}
    >
      {text}
    </button>
  );
};

export default ButtonRegular;
