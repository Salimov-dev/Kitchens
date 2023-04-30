import React from "react";
import "./quiz-3.css";
import PagesNumber from "../components/pages-number/pages-number";
import PrevNextBlock from "../components/prev-next-block/prev-next-block";
import Quiz3Card from "../components/quiz-3-card/quiz-3-card";

const Quiz3 = ({
  page,
  onPrevPage,
  onNextPage,
  options,
  onChange,
  data,
  setData,
  isEmpty,
}) => {
  return (
    <div className="quiz-3">
      <div className="quiz-3__container">
        <div className="quiz-3__title">
          <span>
            Выберите
            <span style={{ color: "var(--appYellow)" }}> бытовую технику</span>,
            которая будет установлена на кухне
          </span>
          <PagesNumber page={page} />
        </div>
        <span className="quiz-3__subtitle">Выберите один или несколько вариантов</span>
        <div className="quiz-3__choose-variant">
          {options.map((item) => (
            <Quiz3Card
              key={item.name}
              imgSrc={item.image}
              name={item.name}
              label={item.value}
              value={item.value}
              onChange={onChange}
              item={item}
              data={data}
              setData={setData}
              isEmpty={isEmpty}
            />
          ))}
        </div>
        <PrevNextBlock
          onPrevPage={onPrevPage}
          onNextPage={onNextPage}
          isChoosen={
            data.oven !== isEmpty ||
            data.fridge !== isEmpty ||
            data.dishwasher !== isEmpty ||
            data.stove !== isEmpty
          }
        />
      </div>
    </div>
  );
};

export default Quiz3;
