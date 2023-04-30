import React from "react";
import "./quiz-2.css";
import PagesNumber from "../components/pages-number/pages-number";
import PrevNextBlock from "../components/prev-next-block/prev-next-block";
import Kitchenabc from "../../../../../assets/images/quiz/quiz-2/kitchen-abc.png";
import KitchenSizeRange from "../components/kitchen-size-range/kitchen-size-range";

const Quiz2 = ({ page, onPrevPage, onNextPage, onChange, data }) => {
  return (
    <div className="quiz-1">
      <div className="quiz-1__container">
        <div className="quiz-1__title">
          <span>
            Введите
            <span style={{ color: "var(--appYellow)" }}>размер</span> кухни
          </span>
          <PagesNumber page={page} />
        </div>
        <div className="quiz-2__choose-variant">
          <div className="quiz-2__image-container">
            <img src={Kitchenabc} alt="" />
          </div>
          <div className="quiz-2__quiz">
            <div className="quiz-2__quiz-container">
              <KitchenSizeRange
                data={data.kitchenSizeA}
                name="kitchenSizeA"
                onChange={onChange}
                title="Сторона А (см)"
                min="0"
                max="900"
              />
              <KitchenSizeRange
                data={data.kitchenSizeB}
                name="kitchenSizeB"
                onChange={onChange}
                title="Сторона Б (см)"
                min="0"
                max="600"
              />
              <KitchenSizeRange
                data={data.kitchenSizeC}
                name="kitchenSizeC"
                onChange={onChange}
                title="Сторона С (см)"
                min="0"
                max="600"
              />
            </div>
          </div>
        </div>
        <PrevNextBlock
          onPrevPage={onPrevPage}
          onNextPage={onNextPage}
          isChoosen={
            data.kitchenSizeA > 0 &&
            data.kitchenSizeB > 0 &&
            data.kitchenSizeC > 0
          }
        />
      </div>
    </div>
  );
};

export default Quiz2;
