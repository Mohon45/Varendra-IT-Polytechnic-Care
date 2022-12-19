import React from "react";
import { Container } from "react-bootstrap";
import Slider from "../Header/Slider/Slider";
import "./Home.css";
import SortBio from "./SortBio/SortBio";
import About from "./About/About";
import Partners from "./Partners/Partners";
import Ceo from "./Ceo/Ceo";
import HomeCourse from "./HomeCourse/HomeCourse";
import Review from "./Review/Review";

const Home = () => {
  return (
    <div className="bg-color">
      <Slider />
      <div className="home-header">
        <Container>
          <SortBio />
          <HomeCourse />
          <About />
          <Partners />
          <Review />
          <Ceo />
        </Container>
      </div>
    </div>
  );
};

export default Home;
