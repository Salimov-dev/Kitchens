import React, { Children, cloneElement, useEffect, useState } from "react";
import "./carousel.css";
import CarrouselArrow from "../../../assets/images/carousel-arrow.svg";

const PAGE_WIDTH = 1170;
// const PAGE_WIDTH = "33.33%";

const Carousel = ({ children }) => {
  const [pages, setPages] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    setPages(
      Children.map(children, (child) => {
        return cloneElement(child, {
          style: {
            height: "100%",
            // minWidth: `${PAGE_WIDTH}`,
            // minWidth: `${PAGE_WIDTH}px`,
            // minWidth: "33.33%",
            // maxWidth: `${PAGE_WIDTH}`,
            // maxWidth: `${PAGE_WIDTH}px`,
            // maxWidth: "33.33%",
          },
        });
      })
    );
  }, []);

  const handlePreviousClick = () => {
    setOffset((currentSet) => {
      let newOffset = currentSet - PAGE_WIDTH;
        console.log("newOffset", newOffset);
      const maxOffset = -(PAGE_WIDTH * (pages.length/3 - 1));
        console.log("maxOffset", maxOffset);
      return Math.max(maxOffset, newOffset);
    });
  };
  const handleNextClick = () => {
    setOffset((currentSet) => {
      let newOffset = currentSet + PAGE_WIDTH;
        console.log("newOffset", newOffset);

      return Math.min(newOffset, 0);
    });
  };

  return (
    <div className="main-container">
      <img
        src={CarrouselArrow}
        alt=""
        className="arrow-prev"
        onClick={handlePreviousClick}
      />
      <div className="window">
        <div
          className="all-pages-container"
          style={{ transform: `translateX(${offset}px)` }}
        >
          {pages}
        </div>
      </div>
      <img
        src={CarrouselArrow}
        alt=""
        className="arrow-next"
        onClick={handleNextClick}
      />
    </div>
  );
};

export default Carousel;
