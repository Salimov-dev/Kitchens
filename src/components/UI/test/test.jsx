import React, { useState } from "react";
import "./test.css";
// mockdata
import { quizOneOptionsArray } from "../../../mock-data/quiz-one-options-array";
import { quizFourOptionsArray } from "../../../mock-data/quiz-four-options-array";
import { quizThreeOptionsArray } from "../../../mock-data/quiz-three-options-array";
// images
import Gift from "../../../assets/images/Gift.svg";
import AdvantagesCard from "../../common/card/advantages-card/advantages-card";
import Payments from "../../../assets/images/advantages-card/payment.svg";
import Discount from "../../../assets/images/advantages-card/discount.svg";
import Facades from "../../../assets/images/advantages-card/facades.svg";
import Design from "../../../assets/images/advantages-card/design.svg";
// components
import Quiz0 from "./quiz/quiz-0/quiz-0";
import Quiz1 from "./quiz/quiz-1/quiz-1";
import Quiz2 from "./quiz/quiz-2/quiz-2";
import Quiz3 from "./quiz/quiz-3/quiz-3";
import Quiz4 from "./quiz/quiz-4/quiz-4";
import Quiz5 from "./quiz/quiz-5/quiz-5";

const Test = () => {
  const [pageQuiz, setPagQuiz] = useState(5);
  const isEmpty = "нет";
  const [data, setData] = useState({
    kitchenForm: "",
    kitchenSizeA: "0",
    kitchenSizeB: "0",
    kitchenSizeC: "0",
    oven: isEmpty,
    fridge: isEmpty,
    dishwasher: isEmpty,
    stove: isEmpty,
    budget: "",
  });
  // console.log("data", data);

  const handleChange = (target) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const togglePrevPageQuiz = () => {
    setPagQuiz((prevState) => prevState - 1);
  };
  const toggleNextPageQuiz = () => {
    setPagQuiz((prevState) => prevState + 1);
  };

  return (
    <div className="test">
      <div className="container test__container">
        <div className="test__header">
          <div className="test__title">
            <div>
              Пройдите тест за 1 минуту и{" "}
              <span style={{ color: "var(--appYellow)" }}>
                узнайте стоимость
              </span>{" "}
              вашей
            </div>
            <div>будущей кухни прямо сейчас</div>
          </div>
          <div className="test__gift">
            <img src={Gift} alt="" />
            <span>И получите один из подарков при заказе кухни.</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="test__quiz-container">
          {pageQuiz === 0 && (
            <Quiz0 page={pageQuiz} onNextPage={toggleNextPageQuiz} />
          )}
          {pageQuiz === 1 && (
            <Quiz1
              page={pageQuiz}
              onNextPage={toggleNextPageQuiz}
              onPrevPage={togglePrevPageQuiz}
              onChange={handleChange}
              value={data.kitchenForm}
              options={quizOneOptionsArray}
              data={data}
            />
          )}
          {pageQuiz === 2 && (
            <Quiz2
              page={pageQuiz}
              onNextPage={toggleNextPageQuiz}
              onPrevPage={togglePrevPageQuiz}
              onChange={handleChange}
              data={data}
            />
          )}
          {pageQuiz === 3 && (
            <Quiz3
              page={pageQuiz}
              onNextPage={toggleNextPageQuiz}
              onPrevPage={togglePrevPageQuiz}
              options={quizThreeOptionsArray}
              onChange={handleChange}
              data={data}
              setData={setData}
              isEmpty={isEmpty}
            />
          )}
          {pageQuiz === 4 && (
            <Quiz4
              page={pageQuiz}
              onNextPage={toggleNextPageQuiz}
              onPrevPage={togglePrevPageQuiz}
              onChange={handleChange}
              data={data}
              options={quizFourOptionsArray}
            />
          )}
          {pageQuiz === 5 && (
            <Quiz5
              page={pageQuiz}
              onNextPage={toggleNextPageQuiz}
              onPrevPage={togglePrevPageQuiz}
            />
          )}
        </form>

        <div className="test__advantages">
          <AdvantagesCard
            icon={Payments}
            title="рассрочка без переплаты"
            subtitle="Мы не делаем наценок. Наши цены заморожены с 2015 года"
          />
          <AdvantagesCard
            icon={Discount}
            title="СКИДКИ"
            subtitle="При заказе кухни матовая столешница 26 мм - в подарок!"
          />
          <AdvantagesCard
            icon={Facades}
            title="БОЛЕЕ 500 ЦВЕТОВ ФАСАДОВ"
            subtitle="Цветовые решения на любой вкус"
          />
          <AdvantagesCard
            icon={Design}
            title="БЕСПЛАТНЫЙ ЗАМЕР И ДИЗАЙН ПРОЕКТ"
            subtitle="Бесплатный дизайн проект кухни за 1 день"
          />
        </div>
      </div>
    </div>
  );
};

export default Test;
