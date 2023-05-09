import React, { useRef, useState } from "react";
import "./our-work.css";
// import Carousel from "../../common/carousel/carousel";
import { ownWorks } from "../../../mock-data/own-works";
import CarrouselArrow from "../../../assets/images/carousel-arrow.svg";

const OurWork = () => {
  const [isDragStart, setIsDragStart] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [prevPageX, setPrevPageX] = useState(0);
  const [prevScrollLeft, setPrevScrollLeft] = useState(null);
  const carousel = useRef();
  const OneREM = 14;

  const firstImage = carousel.current?.querySelectorAll("img")[1];
  let firstImageWidth = firstImage?.clientWidth + OneREM;
  let positionDiff;
  // const scrollWidth =
  //   carousel.current?.scrollWidth - carousel.current?.clientWidth;

  // console.log("carousel.current?.scrollLeft", carousel.current?.scrollLeft);
  // console.log("scrollWidth", scrollWidth);
  // console.log(  carousel.current?.scrollLeft === scrollWidth);

  const handleDraggStart = (e) => {
    setIsDragStart(true);
    setPrevPageX(e.pageX || e.touches[0].pageX);
    setPrevScrollLeft(carousel.current.scrollLeft);
  };

  const handleDraggImage = (e) => {
    if (!isDragStart) return;
    // e.preventDefault();
    setIsDragging(true);
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.current.scrollLeft = prevScrollLeft - positionDiff;
  };

  // const autoSlide = () => {
  //   if (
  //     carousel.current.scrollLeft ===
  //     carousel.current.scrollLeft - carousel.current.clientWidth
  //   )
  //     return;
  //   positionDiff = Math.abs(positionDiff);

  //   let valDifference = firstImageWidth - positionDiff;

  //   if (carousel.current.scrollLeft > prevScrollLeft) {
  //     return (carousel.current.scrollLeft +=
  //       positionDiff > firstImageWidth / 3 ? valDifference : -positionDiff);
  //   }
  //   carousel.current.scrollLeft -=
  //     positionDiff > firstImageWidth / 3 ? valDifference : -positionDiff;
  // };

  const handleDraggStop = () => {
    setIsDragStart(false);
    if (!isDragging) return;
    setIsDragging(false);
    // autoSlide();
  };

  const handlePreviousClick = () => {
    carousel.current.scrollLeft -= firstImageWidth;
  };
  const handleNextClick = () => {
    carousel.current.scrollLeft += firstImageWidth;
  };

  return (
    <div className="our-work" id="portfolio">
      <div className="container our-work__container">
        <span>
          Наши <span style={{ color: "var(--appYellow)" }}>работы</span>
        </span>

        <div className="carousel__wrapper">
          <div
            ref={carousel}
            className={"carousel" + (isDragging ? " carousel__dragging" : "")}
            onMouseDown={(e) => handleDraggStart(e)}
            onTouchStart={(e) => handleDraggStart(e)}
            onMouseMove={(e) => handleDraggImage(e)}
            onTouchMove={(e) => handleDraggImage(e)}
            onMouseLeave={handleDraggStop}
            onTouchEnd={handleDraggStop}
            onMouseUp={handleDraggStop}
          >
            <img
              src={CarrouselArrow}
              alt=""
              className="carousel__arrow carousel__arrow-prev"
              // className={
              //   "carousel__arrow carousel__arrow-prev" +
              //   (carousel.current?.scrollLeft < 290 ? " display-none" : "")
              // }
              onClick={handlePreviousClick}
            />
            {ownWorks.map((el) => (
              <img
                draggable="false"
                className="our-work__carousel-img"
                src={el.image}
                alt="фото кухни"
                key={el._id}
              />
            ))}
            <img
              src={CarrouselArrow}
              alt=""
              // className={
              //   "carousel__arrow carousel__arrow-next" +
              //   (carousel.current?.scrollLeft === scrollWidth
              //     ? " display-none"
              //     : "")
              // }
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
