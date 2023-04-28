import React from "react";
import ButtonRegular from "../../../common/button/btn-regular";
import "./calculate-feedback-form.css";
import KitchenSchema from "../../../../assets/images/choose-by-style/kitchen-schema.png";
import TextField from "../../../common/form/text-field/text-field";
import AttachIcon from "../../../../assets/images/attach-icon.png";

const CalculateFeedbackForm = () => {
  return (
    <div className="calculate-feedback-form__container">
      <div className="calculate-feedback-form__content">
        <div>
          Есть замер или эскиз кухни, или просто нашли фото кухни в интернете
          которая Вам нравится?
        </div>
        <div>
          Отправьте его нам и мы посчитаем стоимость с учетом Ваших пожеланий!
        </div>
        <div className="calculate-feedback-form__footer">
          <div className="calculate-feedback-form__footer-left">
            <TextField placeholder="Ваше имя" />
            <div className="calculate-feedback-form__attach-block">
              <img src={AttachIcon} alt="" />
              <div>Вы можете приложить эскиз или фото</div>
            </div>
          </div>

          <div className="calculate-feedback-form__footer-right">
            <TextField />
            <div className="calculate-feedback-form__footer-button">
              <ButtonRegular text="Рассчитать стоимость" fill="true" />
              <span>
                Нажимая кнопку “Рассчитать стоимость”, вы соглашаетесь с
                условиями Политики конфиденциальности
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="choose-by-style__kitchen-schema">
        <img
          src={KitchenSchema}
          alt=""
          className="choose-by-style__kitchen-schema-img"
        />
      </div>
    </div>
  );
};

export default CalculateFeedbackForm;
