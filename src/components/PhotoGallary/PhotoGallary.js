import React from "react";
import { Link } from "react-router-dom";
import "./PhotoGallary.css";

const PhotoGallary = () => {
  return (
    <div className="bg-color ">
      <div className="container">
        <div className="row">
          <div className="col-md-4 py-5 ">
            <div className="card photo-gallary-card hover-effect text-white">
              <div className="view overlay">
                <h3 className="text-center fw-bold mt-5 pt-5">
                  Computer Office Application
                </h3>
                <Link
                  className="gallary-link-custom d-flex justify-content-center mb-5 pb-5"
                  to="photos"
                >
                  <button className="btn btn-info">View Photo</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 py-5 ">
            <div className="card photo-gallary-card hover-effect text-white">
              <div className="view overlay">
                <h3 className="text-center fw-bold mt-5 pt-5">
                  Graphics Design
                </h3>
                <Link
                  className="gallary-link-custom d-flex justify-content-center mb-5 pb-5"
                  to="photos"
                >
                  <button className="btn btn-info">View Photo</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 py-5 ">
            <div className="card photo-gallary-card hover-effect text-white">
              <div className="view overlay">
                <h3 className="text-center fw-bold mt-5 pt-5">
                  Digital Marketing
                </h3>
                <Link
                  className="gallary-link-custom d-flex justify-content-center mb-5 pb-5"
                  to="photos"
                >
                  <button className="btn btn-info">View Photo</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 py-5 ">
            <div className="card photo-gallary-card hover-effect text-white">
              <div className="view overlay">
                <h3 className="text-center fw-bold mt-5 pt-5">
                  Web Development
                </h3>
                <Link
                  className="gallary-link-custom d-flex justify-content-center mb-5 pb-5"
                  to="photos"
                >
                  <button className="btn btn-info">View Photo</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 py-5 ">
            <div className="card photo-gallary-card hover-effect text-white">
              <div className="view overlay">
                <h3 className="text-center fw-bold mt-5 pt-5">AutoCad</h3>
                <Link
                  className="gallary-link-custom d-flex justify-content-center mb-5 pb-5"
                  to="photos"
                >
                  <button className="btn btn-info">View Photo</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 py-5 ">
            <div className="card photo-gallary-card hover-effect text-white">
              <div className="view overlay">
                <h3 className="text-center fw-bold mt-5 pt-5">
                  Spoken English
                </h3>
                <Link
                  className="gallary-link-custom d-flex justify-content-center mb-5 pb-5"
                  to="photos"
                >
                  <button className="btn btn-info">View Photo</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallary;
