import React from "react";
import "./quiz-1.css";
import PagesNumber from "../components/pages-number/pages-number";
import PrevNextBlock from "../components/prev-next-block/prev-next-block";
import Quiz1Card from "../components/quiz-1-card/quiz-1-card";

const Quiz1 = ({ page, onPrevPage, onNextPage, onChange, value, options, data }) => {
  return (
    <div className="quiz-1">
      <div className="quiz-1__container">
        <div className="quiz-1__title">
          <span>
            Какое{" "}
            <span style={{ color: "var(--appYellow)" }}>
              расположение кухни
            </span>{" "}
            вас интересует
          </span>
          <PagesNumber page={page} />
        </div>
        <div className="quiz-1__choose-variant">
          {options.map((item) => (
            <Quiz1Card
              key={item.value}
              imgSrc={item.image}
              name="kitchenForm"
              label={item.value}
              value={item.value}
              onChange={onChange}
              item={item}
              data={data}
            />
          ))}
        </div>
        <PrevNextBlock onPrevPage={onPrevPage} onNextPage={onNextPage} isChoosen={data.kitchenForm}/>
      </div>
    </div>
  );
};

export default Quiz1;
