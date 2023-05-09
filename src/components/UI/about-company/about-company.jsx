import React from "react";
import "./about-company.css";
import WithoutOverpayment from "../../../assets/images/header-section/without-overpayment.png";
import FreeDesign from "../../../assets/images/header-section/free-design.png";
import Facades500 from "../../../assets/images/header-section/500-facades.png";
import TimingWork from "../../../assets/images/header-section/timing.png";
import Gift from "../../../assets/images/header-section/gift.png";
import CompanyAdvantage from "./advantage";
import ButtonRegular from "../../common/button/btn-regular";
import { Link } from "react-scroll";

const AboutCompany = () => {
  return (
    <section className="about-company" id="manufacturer">
      <div className="about-company__image-container"></div>
      <div className="container about-company__container">
        <div className="about-company__info-block">
          <div className="about-company__info-block-header">
            <h1>Кухни в Нижневартовске от производителя -</h1>
            <h1>недорого и надёжно!</h1>
            <p>
              Изготовим и доставим кухонный гарнитур в Излучинск, Мегион,
              Стрежевой, Лангепас, Радужный и другие города ХМАО
            </p>
          </div>
          <div className="about-company__info-block-main">
            <CompanyAdvantage
              img={WithoutOverpayment}
              alt="1"
              text="Рассрочка без переплаты!"
            />
            <CompanyAdvantage
              img={FreeDesign}
              alt="2"
              text="Бесплатный замер и дизайн проект"
            />
            <CompanyAdvantage
              img={Facades500}
              alt="3"
              text="Более 500 цветов фасадов"
            />
            <CompanyAdvantage
              img={TimingWork}
              alt="4"
              text={
                <p>
                  <strong>Соблюдение сроков изготовления</strong>
                  <br /> Если не выполним в срок – мы заплатим Вам неустойку
                </p>
              }
            />
          </div>
          <div className="about-company__info-block-footer">
            <div className="about-company__footer-btn">
              <ButtonRegular
                text="Рассчитать стоимость"
                fill="true"
                fillColor="var(--appYellow)"
                options={{ width: "100%" }}
              />
            </div>
            <Link className="about-company__gift" to="quiz" span="true" smooth={true}>
              <img src={Gift} alt="Подарок" />
              <p>
                <strong>
                  Пройдите тест из 5 вопросов и получите дизайн проект, и расчет
                  стоимость кухни
                </strong>{" "}
                <br /> + гарантированный подарок при заказе кухни!
              </p>
            </Link>
          </div>
        </div>
        <div className="about-company__rightSide"></div>
      </div>
    </section>
  );
};

export default AboutCompany;
