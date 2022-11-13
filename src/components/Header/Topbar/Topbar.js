import React from "react";
import "./Topbar.css";
import { Container } from "react-bootstrap";

const Topbar = () => {
  return (
    <Container className="topbar">
      <div className="row ">
        <div className="col-md-4 top-img">
          <img src="https://i.ibb.co/GVTKtCP/topber-logo.png" alt="" />
        </div>
        <div className="col-md-8  py-5">
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-3">
              <div className="d-flex align-items-center">
                <div>
                  <i className="top-icon fas fa-phone-square-alt fa-3x"></i>
                </div>
                <div className="ms-3 text-white">
                  <p className="m-0">01797336604</p>
                  <p className="m-0">01718820744</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="d-flex">
                <div>
                  <i className="top-icon fas fa-envelope fa-3x"></i>
                </div>
                <div className="ms-3 text-white">
                  <p className="m-0">varendraitltd@gmail.com</p>
                  <p className="m-0">helpvit@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Topbar;
