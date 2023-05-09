import React from "react";
import "./quiz-5.css";
import PagesNumber from "../components/pages-number/pages-number";
import Gift from "../../../../../assets/images/quiz/quiz-5/Gift.svg";
import ButtonRegular from "../../../../common/button/btn-regular";
import TextField from "../../../../common/form/text-field/text-field";

const Quiz5 = ({ page, onPrevPage, onNextPage }) => {
  return (
    <div className="quiz-5">
      <div className="quiz-5__container">
        <div className="quiz-5__image">
          <img src={Gift} alt="" />
          <span>
            Мы уже скоро
            <span style={{ color: "var(--appYellow)" }}> составим проект </span>
            вашей кухни и{" "}
            <span style={{ color: "var(--appYellow)" }}>
              посчитаем стоимость.
            </span>
          </span>
          <span>
            а так же
            <span style={{ color: "var(--appYellow)" }}> приготовим </span>вам
            <span style={{ color: "var(--appYellow)" }}> подарок</span>
          </span>
        </div>
        <div className="quiz-5__content">
          <div className="quiz-5__title">
            <PagesNumber page={page} />
          </div>
          <div className="quiz-5__feedback">
            <span>осталось только узнать, как нам с вами связаться</span>
            <TextField type="text" placeholder="E-mail" />
            <TextField type="text" placeholder="Имя" />
            <TextField type="text" placeholder="Телефон" />
            <ButtonRegular text="Получить расчет" fill={true} />
            <span>
              Нажимая кнопку “Получить расчёт”, вы соглашаетесь с условиями
              Политики конфиденциальности
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz5;
