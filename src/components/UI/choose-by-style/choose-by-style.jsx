import React, { useState } from "react";
import "./choose-by-style.css";
import { kitchensByStyle, styles } from "../../../mock-data/kitchens-by-style";
import KitchenByStyleCard from "../../common/card/kitchen-by-style-card/kitchen-by-style-card";
import GroupList from "../../common/group-list/group-list";

import CalculateFeedbackForm from "./feedback-form/calculate-feedback-form";

const ChooseByStyle = () => {
  const [selectedStyle, setSelectedStyle] = useState(styles.econom);

  const filteredStyles = selectedStyle
    ? kitchensByStyle.filter((el) => el.style._id === selectedStyle._id)
    : kitchensByStyle;

  const handleSelect = (item) => {
    setSelectedStyle(item);
  };

  return (
    <div className="choose-by-style">
      <div className="container choose-by-style__container">
        <div className="choose-by-style__heading">
          <h2>Выбор</h2>
          <h2>кухни по стилям</h2>
        </div>
        <div className="choose-by-style__subtitle">
          Красивые, удобные и современные, кухни на заказ помогают создавать
          атмосферу уюта и комфорта в помещении. Вы хотите воплотить в жизнь
          мечты об удобном гарнитуре? Мы готовы вам в этом помочь.
        </div>
        <div className="choose-by-style__filtering-block">
          <div className="choose-by-style__group-text">Выберите стиль:</div>
          <div className="choose-by-style__group-list">
            <GroupList
              items={styles}
              defaultActive={styles.econom}
              onItemSelect={handleSelect}
              selectedItem={selectedStyle}
            />
          </div>
        </div>
        <div className="choose-by-style__card-wrapper">
          {filteredStyles.map((item) => (
            <KitchenByStyleCard item={item} key={item._id} />
          ))}
        </div>
        <CalculateFeedbackForm />
      </div>
    </div>
  );
};

export default ChooseByStyle;
