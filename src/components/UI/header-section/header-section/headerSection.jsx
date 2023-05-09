import React, { useState } from "react";
import "./headerSection.css";
import ButtonRegular from "../../../common/button/btn-regular";
import Logo from "../../../../assets/images/logo.png";
import AdressPhone from "../adress-phone/adressPhone";
import { navbarItems } from "../../../../mock-data/navbar-items";
import { Link } from "react-scroll";
import { Twirl as Hamburger } from "hamburger-react";
import CallIcon from "../../../../assets/images/header-section/call-yellow.svg";
import { useResize } from "../../../hooks/useResize";

const HeaderSection = () => {
  const [isOpen, setOpen] = useState(false);
  const { isScreenLg } = useResize();

  const handleCloseNavbar = () => {
    setOpen(false)
  }

  return (
    <div className="header-section">
      <AdressPhone />
      <div className="container header-section-container">
        {isOpen && (
          <div className="header-section__navbar-mobile">
            <a href="#">
              <img
                src={Logo}
                alt="Лого"
                className="header-section__logo-mobile"
              />
            </a>

            <ul className="header-section__nav-mobile">
              {navbarItems.map((item) => (
                <li key={item._id}>
                  <Link onClick={handleCloseNavbar} to={item._id} span="true" smooth={true}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="address-phone__mobile">
              <div className="address-phone__mobile-phone">
                <img
                  src={CallIcon}
                  alt=""
                  className="address-phone__call-icon-mobile"
                />
                <span>+7 (3466) 68-15-98</span>
              </div>
              <ButtonRegular text="Заказать звонок" fill={true} />
              <span>
                г. Нижневартовск, ул. Индустриальная, д.7 стр. 1 ТЦ “ВДНХ”, 2
                этаж, бутик № 20а
              </span>
            </div>
          </div>
        )}

        <div className="header-section__header">
          <a href="#">
            <img src={Logo} alt="Лого" className="header-section__logo" />
          </a>

          <div className="header-section__navbar-container">
            {isScreenLg && (
              <ul className="header-section__navbar">
                {navbarItems.map((item) => (
                  <li key={item._id}>
                    <Link to={item._id} span="true" smooth={true}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
          {isScreenLg ? (
            <ButtonRegular text="Заказать звонок" />
          ) : (
            <div className="header-section__navbar-hamburger">
              <Hamburger toggled={isOpen} toggle={setOpen} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
