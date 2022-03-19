import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Slider.css';
import banner from '../../../Images/banner1.jpg';

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
                src={banner}
                alt="First slide"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block single-slide-img w-100"
                src={banner}
                alt="Second slide"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block single-slide-img w-100"
                src={banner}
                alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;