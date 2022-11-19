import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "./Slider.css";
import banner1 from "../../../Images/slider-banner.png";
import banner2 from "../../../Images/banner2.jpeg";

const Slider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel className="slider" activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block single-slide-img w-100"
          src={banner1}
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block single-slide-img w-100"
          src={banner2}
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
