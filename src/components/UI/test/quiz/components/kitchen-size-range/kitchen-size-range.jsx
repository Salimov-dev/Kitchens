import React, { useRef } from "react";
import "./kitchen-size-range.css";

const KitchenSizeRange = ({ data, onChange, title, min, max, name }) => {
  const inputFiled = useRef();

  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value });
  };

  const changeSizeProgress = () => {
    return (data / inputFiled.current?.max) * 100;
  };

  return (
    <div className="input-range__container">
      <div className="input-range">
        <div className="input-range__title">
          <span>{title}</span>
          <div>{data}</div>
        </div>
      </div>
      <div className="input-range__input-field-container">
        <input
          ref={inputFiled}
          className="input-range__input-field"
          name={name}
          id={name}
          value={data}
          type="range"
          min={min}
          max={max}
          step="10"
          onChange={handleChange}
        />
        <div
          className="input-range__progress"
          style={{ width: `${changeSizeProgress()}%` }}
        ></div>
      </div>
    </div>
  );
};

export default KitchenSizeRange;
