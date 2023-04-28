import React from "react";
import "./quiz-1.css";
// import Image from "../../../../../assets/images/quiz/quiz-1/quiz-1.png";
import ButtonRegular from "../../../../common/button/btn-regular";

const Quiz1 = () => {
  return (
    <div className="quiz-1">
      <div className="quiz__image"></div>
      <div className="quiz__content">
        <span>
          <span style={{ color: "var(--appYellow)" }}>0</span>/5
        </span>
        <hr />
        <span>
          Ответьте на 5 вопросов и получите дизайн проект и расчет стоимости
          кухни
        </span>
        <span>
          <span style={{ color: "var(--appYellow)" }}>+</span> гарантированый
          подарок при заказе кухни!
        </span>
        <ButtonRegular text="Узнать стоимость" fill={true} />
      </div>
    </div>
  );
};

export default Quiz1;
