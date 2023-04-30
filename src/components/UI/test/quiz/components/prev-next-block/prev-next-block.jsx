import React from "react";
import "./prev-next-block.css";
import ButtonRegular from "../../../../../common/button/btn-regular";

const PrevNextBlock = ({ onPrevPage, onNextPage, isChoosen }) => {
  return (
    <div className="prev-next-block">
      <div onClick={onPrevPage}>←</div>
      <ButtonRegular
        text="Далее"
        fill={true}
        optionText="→"
        onClick={onNextPage}
        disabled={!isChoosen}
      />
    </div>
  );
};

export default PrevNextBlock;
