import React from "react";
import "./group-list.css";

const GroupList = ({ items, onItemSelect, selectedItem, defaultActive }) => {
  const defaultActiveItem =
    selectedItem === undefined ? defaultActive : selectedItem;

  return (
    <div className="group-list">
      <ul className="group-list__ul">
        {Object.keys(items).map((item) => (
          <li
            className={
              "group-list__li" +
              (items[item] === defaultActiveItem ? " active" : "")
            }
            key={items[item]._id}
            onClick={() => onItemSelect(items[item])}
          >
            {items[item].name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GroupList;
