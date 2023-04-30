import React from "react";
import "./consultations.css";
import TextField from "../../common/form/text-field/text-field";
import ButtonRegular from "../../common/button/btn-regular";
import Kitchen from "../../../assets//images//consultations//kitchen-consultations.png";

const Consultations = () => {
  return (
    <section className="consultations">
      <div className="container consultations__container">
        {/* <div className="consultations__image"></div> */}
        <div className="consultations__content">
          <h2>
            <span style={{ color: "var(--appYellow)" }}>Проконсультируем</span>{" "}
            по любым вопросам
          </h2>
          <div className="consultations__content-contacts">
            <TextField placeholder="Ваше имя" />
            <TextField placeholder="Телефон" />
          </div>
          <TextField placeholder="Кратко опишите Ваш вопрос" />
          <div className="consultations__content-footer">
            <ButtonRegular text="Получить консультацию" fill={true} />
            <span>
              Нажимая кнопку "Получить консультацию" вы даете согласие на
              обработку персональных данных в соответствии с политикой
              конфиденциальности
            </span>
          </div>
        </div>
        <div className="consultations__image-container">
          <img src={Kitchen} alt="" className="consultations__kitchen" />
        </div>
      </div>
    </section>
  );
};

export default Consultations;
