import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const CourseDetails = () => {
  const [row, setRow] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://varendra-it.onrender.com/api/v1/vit/course/${id}`, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        setRow(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(row);
  const {
    image,
    title,
    courseCuricullam,
    courseDuration,
    description,
    instructorName,
    price,
    projects,
    whyCourse,
  } = row;
  return (
    <div className="bg-color text-white py-5">
      <Container>
        <div className="row">
          <div className="col-md-6 details-left-img">
            <img src={image} alt="" />
          </div>
          <div className="col-md-6 ps-md-5">
            <h1 className="fw-bold mt-4">{title}</h1>
            <div className="d-flex justify-content-between my-4">
              <div className="course-details-small-duration-card">
                <p>কোর্সের মেয়াদ</p>
                <h3 className="fw-bold">{courseDuration} মাস</h3>
              </div>
              <div className="course-details-small-duration-card">
                <p>ক্লাস</p>
                <h3 className="fw-bold">{row.class}</h3>
              </div>
              <div className="course-details-small-duration-card">
                <p>প্রজেক্ট</p>
                <h3 className="fw-bold">{projects}+</h3>
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
                <p>ইন্সট্রাক্টরের নামঃ {instructorName}</p>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-5">
              <Button className="text-center">
                <Link to="/course/confirm" className="enroll-confirm-btn">
                  <h4 className="mt-2">ভর্তি নিশ্চিত করুন</h4>
                </Link>
              </Button>
              <h3>কোর্স ফিঃ {price}</h3>
            </div>
          </div>

          <div className="col-md-6 my-4">
            <h2 className="fw-bold">কোর্স ওভারভিউ</h2>
            <p className="course-description">{description}</p>

            <h2>কেন {title} শিখবেন?</h2>
            <p className="course-description">{whyCourse}</p>
          </div>
          <div className="col-md-6 my-4 ps-md-5">
            <h2 className="fw-bold ">কোর্স কারিকুলাম</h2>
            {courseCuricullam ? (
              <>
                {courseCuricullam.map((data) => (
                  <p className="mt-3">
                    <span className="me-2">
                      <i class="far fa-square curiculam-icon-customize"></i>
                    </span>
                    {data}
                  </p>
                ))}
              </>
            ) : null}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CourseDetails;
