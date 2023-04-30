import React from "react";
import "./quiz-0.css";
import ButtonRegular from "../../../../common/button/btn-regular";
import PagesNumber from "../components/pages-number/pages-number";

const Quiz0 = ({onNextPage, page}) => {
  return (
    <div className="quiz-0">
      <div className="quiz-0__image"></div>
      <div className="quiz-0__content">
        <PagesNumber page={page}/>
        <hr />
        <span>
          Ответьте на 5 вопросов и получите дизайн проект и расчет стоимости
          кухни
        </span>
        <span>
          <span style={{ color: "var(--appYellow)" }}>+</span> гарантированый
          подарок при заказе кухни!
        </span>
        <ButtonRegular text="Узнать стоимость" fill={true} onClick={onNextPage}/>
      </div>
    </div>
  );
};

export default Quiz0;
