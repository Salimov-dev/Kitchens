import React from "react";
import "./footer.css";
import Logo from "../../../assets/images/logo.png";
import Email from "../../../assets/images/footer/e-mail.svg";
import Phone from "../../../assets/images/footer/phone.svg";
import Vk from "../../../assets/images/footer/vk.svg";
import Ok from "../../../assets/images/footer/ok.svg";

const Footer = () => {
  return (
    <div className="footer" id="contacts">
      <div className="container footer__container">
        <div className="footer__company footer__flex-box">
          <img src={Logo} alt="logo" />
          <div>
            <span>г. Нижневартовск,</span>
            <span>ул. Индустриальная, д.7 стр. 1</span>
            <span>ТЦ “ВДНХ”, 2 этаж,</span>
            <span>бутик № 20а</span>
          </div>
        </div>
        <div className="footer__pages footer__flex-box">
          <span>Разделы :</span>
          <span>Каталог товаров</span>
          <span>Кухонные модули</span>
          <span>Декоры МДФ/Лдсп</span>
          <span>Готовые решения</span>
        </div>
        <div className="footer__contacts footer__flex-box">
          <span>Контакты :</span>
          <div>
            <img src={Email} alt="Email" />
            <span>uhninv@mail.ru</span>
          </div>
          <div>
            <img src={Phone} alt="Phone footer__flex-box" />
            <span>8 (3466) 68-20-15</span>
          </div>
          <span>8 (3466) 68-15-98</span>
        </div>
        <div className="footer__social footer__flex-box">
        <span>Социальные сети :</span>
          <div>
            <img src={Vk} alt="Vk" />
            <span>vk.com/kuhninv</span>
          </div>
          <div>
            <img src={Ok} alt="Ok" />
            <span>ok.ru/kuhninv</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
