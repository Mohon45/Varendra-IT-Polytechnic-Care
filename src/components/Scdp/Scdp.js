import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Scdp = () => {
  return (
    <div className="bg-color text-white">
      <Container>
        <div className="py-3">
          <div>
            <div className="container pt-5">
              <div className="row">
                <div className="col-md-4 pb-4 ">
                  <Link
                    to="/course/details/1"
                    className="card-link-custom"
                    alt="office-application"
                  >
                    <div className="card card-custom hover-effect text-white">
                      <div className="view overlay">
                        <img
                          className="card-img-top w-100"
                          src="https://i.ibb.co/k68FzTP/app-development.jpg"
                          alt="card-img"
                        />
                      </div>
                      <div className="card-body">
                        <h4 className="fw-bold">অ্যাপ ডেভেলপমেন্ট</h4>
                        <div className="d-flex justify-content-between mt-3">
                          <div>
                            <i className="fas fa-star color-custom"></i>
                            <i className="fas fa-star color-custom"></i>
                            <i className="fas fa-star color-custom"></i>
                            <i className="fas fa-star color-custom"></i>
                            <i className="fas fa-star-half-alt color-custom"></i>
                            <span>(4.5)</span>
                          </div>
                          <p>কোর্সের মেয়াদঃ ৬ মাস</p>
                        </div>
                        <div className="card-fee-custom d-flex justify-content-between align-items-center mt-3">
                          <h5>কোর্স ফিঃ ২০০০ ৳</h5>
                          <p className="btn btn-design px-3">এনরোল করুন</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-md-4 pb-4 ">
                  <Link
                    to="/course/details/1"
                    className="card-link-custom"
                    alt="office-application"
                  >
                    <div className="card card-custom hover-effect text-white">
                      <div className="view overlay">
                        <img
                          className="card-img-top w-100"
                          src="https://i.ibb.co/k68FzTP/app-development.jpg"
                          alt="card-img"
                        />
                      </div>
                      <div className="card-body">
                        <h4 className="fw-bold">অ্যাপ ডেভেলপমেন্ট</h4>
                        <div className="d-flex justify-content-between mt-3">
                          <div>
                            <i className="fas fa-star color-custom"></i>
                            <i className="fas fa-star color-custom"></i>
                            <i className="fas fa-star color-custom"></i>
                            <i className="fas fa-star color-custom"></i>
                            <i className="fas fa-star-half-alt color-custom"></i>
                            <span>(4.5)</span>
                          </div>
                          <p>কোর্সের মেয়াদঃ ৬ মাস</p>
                        </div>
                        <div className=" card-fee-custom d-flex justify-content-between align-items-center mt-3">
                          <h5>কোর্স ফিঃ ২০০০ ৳</h5>
                          <p className="btn btn-design px-3">এনরোল করুন</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-md-4 pb-4 ">
                  <Link
                    to="/course/details/1"
                    className="card-link-custom"
                    alt="office-application"
                  >
                    <div className="card card-custom hover-effect text-white">
                      <div className="view overlay">
                        <img
                          className="card-img-top w-100"
                          src="https://i.ibb.co/k68FzTP/app-development.jpg"
                          alt="card-img"
                        />
                      </div>
                      <div className="card-body">
                        <h4 className="fw-bold">অ্যাপ ডেভেলপমেন্ট</h4>
                        <div className="d-flex justify-content-between mt-3">
                          <div>
                            <i className="fas fa-star color-custom"></i>
                            <i className="fas fa-star color-custom"></i>
                            <i className="fas fa-star color-custom"></i>
                            <i className="fas fa-star color-custom"></i>
                            <i className="fas fa-star-half-alt color-custom"></i>
                            <span>(4.5)</span>
                          </div>
                          <p>কোর্সের মেয়াদঃ ৬ মাস</p>
                        </div>
                        <div className="card-fee-custom d-flex justify-content-between align-items-center mt-3">
                          <h5>কোর্স ফিঃ ২০০০ ৳</h5>
                          <p className="btn btn-design px-3">এনরোল করুন</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
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
      </Container>
    </div>
  );
};

export default Scdp;
