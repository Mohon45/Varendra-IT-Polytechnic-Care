import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Slider.css';

const Slider = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    return (
        <Carousel className='slider' activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                className="d-block single-slide-img w-100"
                src='https://i.ibb.co/DryPckc/slider-banner.png'
                alt="First slide"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block single-slide-img w-100"
                src='https://i.ibb.co/c1V3mVh/banner2.png'
                alt="Second slide"
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;