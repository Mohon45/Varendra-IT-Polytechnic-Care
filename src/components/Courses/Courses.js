import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Loader from "../../Const/Loader/Loader";
import "./Courses.css";

const Courses = () => {
  const [row, setRow] = useState([]);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    axios
      .get("https://varendra-it.onrender.com/api/v1/vit/all-course", {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        setRow(res.data.data);
        setloading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(row);
  return (
    <div className="bg-color py-5">
      {loading ? (
        <Loader></Loader>
      ) : (
        <Container>
          <div>
            <h1 className="text-white text-center fw-bold">আমাদের কোর্সসমূহ</h1>
            <div className="row">
              {row.map((item) => (
                <div className="col-md-4 py-5 " key={item._id}>
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
                        <h4 className="fw-bold">
                          {item.title.slice(0, 25)}...
                        </h4>
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
                          <h5>
                            কোর্স ফিঃ {item.price}
                            <span className="tk-symbol">৳</span>
                          </h5>
                          <p className="btn btn-design px-3">এনরোল করুন</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </Container>
      )}
    </div>
  );
};

export default Courses;
