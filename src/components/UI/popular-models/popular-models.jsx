import React from "react";
import ButtonRegular from "../../common/button/btn-regular";
import "./popular-models.css";
import { catalog } from "../../../mock-data/catalog";
import KitchenCard from "../../common/card/kitchen-card/kitchen-card";

const PopularModels = () => {
  return (
    <section className="popular-models">
      <div className="container popular-models__container">
        <h2>Популярные модели</h2>
        <div className="popular-models__cards-wprapper">
          {catalog.map((item) => (
            <KitchenCard key={item._id} item={item} />
          ))}
        </div>
        <ButtonRegular
          text="Смотреть все товары"
          options={{
            background:
              "linear-gradient(269.89deg, #99CB38 0.07%, #C0F35B 99.89%)",
            boxShadow: "10px 10px 20px rgba(255, 216, 111, 0.4)",
          }}
        />
      </div>
    </section>
  );
};

export default PopularModels;
