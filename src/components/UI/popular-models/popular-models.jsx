import React from "react";
import "./popular-models.css";
import { catalog } from "../../../mock-data/catalog";
import KitchenCard from "../../common/card/kitchen-card/kitchen-card";
import { useResize } from "../../hooks/useResize";

const PopularModels = () => {
  const {isScreenXSm} = useResize()
  console.log("isScreenXSm", isScreenXSm);
  const catalogSlice = catalog.slice(0,3)
  return (
    <section className="popular-models" id="popular-models">
      <div className="container popular-models__container">
        <h2>Популярные модели</h2>
        <div className="popular-models__cards-wprapper">
          {catalog.map((item) => (
            <KitchenCard key={item._id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularModels;
