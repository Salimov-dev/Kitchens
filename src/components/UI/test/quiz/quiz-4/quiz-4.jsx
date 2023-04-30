import React from "react";
import "./quiz-4.css";
import PagesNumber from "../components/pages-number/pages-number";
import PrevNextBlock from "../components/prev-next-block/prev-next-block";
import QuizFourRadio from "../components/quiz-4-radio/quiz-4-radio";

const Quiz4 = ({
  page,
  onPrevPage,
  onNextPage,
  data,
  onChange,
  options,
}) => {
  return (
    <div className="quiz-4">
      <div className="quiz-4__container">
        <div className="quiz-4__title">
          <span>
            Укажите планируемый
            <span style={{ color: "var(--appYellow)" }}> бюджет </span>
            кухни
          </span>
          <PagesNumber page={page} />
        </div>
        <div className="quiz-4__choose-variant">
          {options.map((item) => (
            <QuizFourRadio
              key={item.name}
              name="budget"
              value={item.value}
              onChange={onChange}
              item={item}
              data={data}
            />
          ))}
        </div>
        <PrevNextBlock onPrevPage={onPrevPage} onNextPage={onNextPage} isChoosen={data.budget.length > 0}/>
      </div>
    </div>
  );
};

export default Quiz4;
