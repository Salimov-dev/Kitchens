import React from "react";
import "./text-field.css";

const TextField = ({ placeholder }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="text-field__input"
    />
  );
};

export default TextField;
