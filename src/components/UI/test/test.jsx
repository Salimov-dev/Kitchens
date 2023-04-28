import React from "react";
import "./test.css";
import Gift from "../../../assets/images/Gift.svg";
import AdvantagesCard from "../../common/card/advantages-card/advantages-card";
import Payments from "../../../assets/images/advantages-card/payment.svg";
import Discount from "../../../assets/images/advantages-card/discount.svg";
import Facades from "../../../assets/images/advantages-card/facades.svg";
import Design from "../../../assets/images/advantages-card/design.svg";
import Quiz from "./quiz/quiz";

const Test = () => {
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

        <div className="test__quiz-container"><Quiz /></div>
        <div>
          <span style={{ color: "rgba(153, 203, 56, 1)" }}>Кухни Микс</span> -
          это :
        </div>
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
