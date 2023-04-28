import React, { useRef, useState } from "react";
import "./our-work.css";
// import Carousel from "../../common/carousel/carousel";
import { ownWorks } from "../../../mock-data/own-works";
import CarrouselArrow from "../../../assets/images/carousel-arrow.svg";

const OurWork = () => {
  const [isDragStart, setIsDragStart] = useState(false);
  const [prevPageX, setPrevPageX] = useState(0);
  const [prevScrollLeft, setPrevScrollLeft] = useState(null);
  const carousel = useRef();

  const handleDraggStart = (e) => {
    setIsDragStart(true);
    setPrevPageX(e.pageX);
    setPrevScrollLeft(carousel.current.scrollLeft);
  };

  const handleDraggStop = () => {
    setIsDragStart(false);
  };

  const handleDraggImage = (e) => {
    if (!isDragStart) return;
    e.preventDefault();
    let positionDiff = e.pageX - prevPageX;
    carousel.current.scrollLeft = prevScrollLeft - positionDiff;
  };

  const handlePreviousClick = () => {
    console.log("handlePreviousClick");
  };
  const handleNextClick = () => {
    console.log("handleNextClick");
  };

  return (
    <div className="our-work">
      <div className="container our-work__container">
        <span>
          Наши <span style={{ color: "white" }}>работы</span>
        </span>

        <div className="carousel__wrapper">
          <div
            ref={carousel}
            className="carousel"
            onMouseDown={(e) => handleDraggStart(e)}
            onMouseUp={handleDraggStop}
            onMouseMove={(e) => handleDraggImage(e)}
          >
            <img
              src={CarrouselArrow}
              alt=""
              className="carousel__arrow carousel__arrow-prev"
              onClick={handlePreviousClick}
            />
            {ownWorks.map((el) => (
              <img
                className="our-work__carousel-img"
                src={el.image}
                alt="фото кухни"
                key={el._id}
              />
            ))}
            <img
              src={CarrouselArrow}
              alt=""
              className="carousel__arrow carousel__arrow-next"
              onClick={handleNextClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWork;
