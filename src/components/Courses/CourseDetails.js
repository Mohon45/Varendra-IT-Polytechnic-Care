import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const CourseDetails = () => {
  return (
    <div className="bg-color text-white py-5">
      <Container>
        <div className="row">
          <div className="col-md-6 details-left-img">
            <img src="https://i.ibb.co/k68FzTP/app-development.jpg" alt="" />
          </div>
          <div className="col-md-6 ps-md-5">
            <h1 className="fw-bold mt-4">অ্যাপ ডেভেলপমেন্ট</h1>
            <div className="d-flex justify-content-between my-4">
              <div className="course-details-small-duration-card">
                <p>কোর্সের মেয়াদ</p>
                <h3 className="fw-bold">৬ মাস</h3>
              </div>
              <div className="course-details-small-duration-card">
                <p>ক্লাস</p>
                <h3 className="fw-bold">৫০</h3>
              </div>
              <div className="course-details-small-duration-card">
                <p>প্রজেক্ট</p>
                <h3 className="fw-bold">২০+</h3>
              </div>
            </div>
            <div className="d-flex justify-content-between mt-5">
              <div style={{ fontSize: "1.3rem" }}>
                <i className="fas fa-star color-custom"></i>
                <i className="fas fa-star color-custom"></i>
                <i className="fas fa-star color-custom"></i>
                <i className="fas fa-star color-custom"></i>
                <i className="fas fa-star-half-alt color-custom"></i>
                <span>(৪০০ রিভিউস)</span>
              </div>
              <div className="instructor-name">
                <p>ইন্সট্রাক্টরের নামঃ md. Mohon</p>
              </div>
            </div>
            <Button className="text-center mx-auto">
              <Link to="/course/confirm" className="enroll-confirm-btn">
                <h4 className="mt-2">ভর্তি নিশ্চিত করুন</h4>
              </Link>
            </Button>
          </div>

          <div className="col-md-6 my-4">
            <h2 className="fw-bold">কোর্স ওভারভিউ</h2>
            <p className="course-description">
              Et elitr consetetur sit justo diam stet eos. Diam voluptua sit et
              duo, kasd ipsum dolores dolor est invidunt sanctus at. Ut voluptua
              ipsum et amet erat, nonumy elitr at invidunt sea aliquyam sea
              labore lorem ea, lorem tempor nonumy dolores sed ipsum rebum. Vero
              erat kasd takimata sanctus nonumy. Et elitr consetetur sit justo
              diam stet eos. Diam voluptua sit et duo, kasd ipsum dolores dolor
              est invidunt sanctus at. Ut voluptua ipsum et amet erat, nonumy
              elitr at invidunt sea aliquyam sea labore lorem ea, lorem tempor
              nonumy dolores sed ipsum rebum. Vero erat kasd takimata sanctus
              nonumy,.
            </p>
          </div>
          <div className="col-md-6 my-4 ps-md-5">
            <h2 className="fw-bold ">কোর্স কারিকুলাম</h2>
            <p>
              <span className="me-2">
                <i class="far fa-square curiculam-icon-customize"></i>
              </span>
              Professional Presentation, Raster To Vector, Invoice Template
              Design, Letterhead Design, Brochure Layout, Logo Design, Desk &
              Wall Calendar Design, Product Packaging ,Certificate Template
              Design, T-Shirt Design, Resume & Cover Letter Design, Landscape
              Design, Image Clipping
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CourseDetails;
