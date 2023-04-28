import React from "react";
import "./headerSection.css";
import ButtonRegular from "../../../common/button/btn-regular";
import Logo from "../../../../assets/images/logo.png";
import AdressPhone from "../adress-phone/adressPhone";
import { navbarItems } from "../../../../mock-data/navbar-items";

const HeaderSection = () => {
  return (
    <div className="header-section">
      <AdressPhone />
      <div className="container">
        <div className="header-section__header">
          <a href="#">
            <img src={Logo} alt="Лого" className="header-section__logo" />
          </a>

          <div className="header-section__navbar-container">
            <ul className="header-section__navbar">
              {navbarItems.map((item) => (
                <li key={item._id}>{item.name}</li>
              ))}
            </ul>
          </div>
          <ButtonRegular text="Заказать звонок" />
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
