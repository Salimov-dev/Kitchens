import React from "react";
import "./adressPhone.css";
import { ReactComponent as GeoTagIcon } from "../../../../assets/images/header-section/geo-tag.svg";
import { ReactComponent as CallIcon } from "../../../../assets/images/header-section/call.svg";

const AdressPhone = () => {
  return (
    <div className="address-phone">
      <div className="container address-phone__container">
        <div className="address-phone__address">
          <GeoTagIcon className="address-phone__geo-tag-icon" />
          <p>
            г. Нижневартовск, ул. Индустриальная, д.7 стр. 1 ТЦ “ВДНХ”, 2 этаж,
            бутик № 20а
          </p>
        </div>
        <div className="address-phone__phone">
          <CallIcon className="address-phone__call-icon" />
          <p>+7 (3466) 68-15-98</p>
        </div>
      </div>
    </div>
  );
};

export default AdressPhone;
