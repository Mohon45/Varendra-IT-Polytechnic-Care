import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HomeCourse = () => {
  const [row, setRow] = useState([]);
  useEffect(() => {
    axios
      .get("https://varendra-it.onrender.com/api/v1/vit/all-course", {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        setRow(res.data.data.splice(0, 3));
        console.log(res.data.data.splice(0, 3));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <div className="pb-2">
        <h1 className="text-white text-center fw-bold question-title pt-5 pb-3">
          আমাদের কোর্সসমূহ
        </h1>

        <div>
          <div className="container pt-5">
            <div className="row">
              {row.map((item) => (
                <div className="col-md-4 pb-4 " key={item._id}>
                  <Link
                    to={`/course/details/${item._id}`}
                    className="card-link-custom"
                    alt="office-application"
                  >
                    <div className="card card-custom hover-effect text-white">
                      <div className="view overlay">
                        <img
                          className="card-img-top w-100"
                          src={item.image}
                          alt="card-img"
                        />
                      </div>
                      <div className="card-body">
                        <h4 className="fw-bold">{item.title}</h4>
                        <div className="d-flex justify-content-between mt-3">
                          <div>
                            <i className="fas fa-star color-custom"></i>
                            <i className="fas fa-star color-custom"></i>
                            <i className="fas fa-star color-custom"></i>
                            <i className="fas fa-star color-custom"></i>
                            <i className="fas fa-star-half-alt color-custom"></i>
                            <span>(4.5)</span>
                          </div>
                          <p>কোর্সের মেয়াদঃ {item.courseDuration} মাস</p>
                        </div>
                        <div className="card-fee-custom d-flex justify-content-between align-items-center mt-3">
                          <h5>কোর্স ফিঃ {item.price}৳</h5>
                          <p className="btn btn-design px-3">এনরোল করুন</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
            <div className="row more-top mt-3">
              <div className="col-md-3 col-sm-12 more-course  text-center">
                <Link
                  to="/courses"
                  className="d-flex justify-content-evenly align-items-center text-white"
                >
                  <h3 className="mt-2 p-0">আরো কোর্সসমূহ</h3>
                  <i className="fas fa-arrow-right fa-2x p-0"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCourse;
