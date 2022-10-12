import React from "react";
import { Container } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <hr />
      <Container className="footer-container">
        <div className="row">
          <div className="col-md-4 mt-2">
            <div className="footer-1st-section">
              <img src="https://i.ibb.co/n7Nh2xz/logo-big.png" alt="" />
              <h5 className="footer-motivate-speach">
                CHANGE | GROW | SUCCEED
              </h5>
              <div className="d-flex my-4">
                <div className="footer-icon">
                  <a
                    href="https://www.facebook.com/VarendraITBD"
                    target="blank"
                  >
                    <i className="fab fa-facebook-f fa-2x"></i>
                  </a>
                </div>
                <div className="footer-icon">
                  <a
                    href="https://www.youtube.com/channel/UCgmd3tdfNpP9X5u7Oro7DoQ"
                    target="blank"
                  >
                    <i className="fab fa-youtube fa-2x"></i>
                  </a>
                </div>
                <div className="footer-icon">
                  <a
                    href="https://www.linkedin.com/company/varendra-it/"
                    target="blank"
                  >
                    <i className="fab fa-linkedin fa-2x"></i>
                  </a>
                </div>
                <div className="footer-icon">
                  <a
                    href="https://www.instagram.com/varendrait/?igshid=YmMyMTA2M2Y%3D"
                    target="blank"
                  >
                    <i className="fab fa-instagram-square fa-2x"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 mt-3 d-flex justify-content-center">
            <div className="contact-us">
              <h3 className="fw-bold mb-2">যোগাযোগ</h3>
              <div className="d-flex align-items-center mt-4">
                <div>
                  <i className="fas fa-map-marker-alt contact-icon fa-2x"></i>
                </div>
                <div className="ft-text lh-1 ms-4">
                  <p className="fw-bold">হেড অফিস :</p>
                  <p className="m-0 pb-1">বিউটি প্লাজা (২য় ও ৪র্থ তলা)</p>
                  <p>বোয়ালিয়া, রাজশাহী</p>
                </div>
              </div>
              <div className="d-flex align-items-center my-2">
                <div>
                  <i className="fas fa-phone-square-alt contact-icon fa-2x"></i>
                </div>
                <div className="ft-text ms-4">
                  <p className="m-0 pb-1">০১৭৯৭৩৩৬৬০৪ (অফিস)</p>
                  <p>০১৭১৯১৩২২৭৬ (সিইও)</p>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <i className="fas fa-envelope contact-icon fa-2x"></i>
                </div>
                <div className="ft-text ms-4">
                  <p>varendraitltd@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 mt-3 d-flex justify-content-center">
            <div>
              <h3 className="fw-bold">কুইক লিংক</h3>
              <ul className="quick-link">
                <li>
                  <a href="/">আমাদের সম্পর্কে</a>
                </li>
                <li>
                  <a href="/photo">ফটো গ্যালারি</a>
                </li>
                <li>
                  <a href="/">ক্যারিয়ার প্লেসমেন্ট</a>
                </li>
                <li>
                  <a href="/">স্টুডেন্ট ফিডব্যাক</a>
                </li>
                <li>
                  <a href="/">ফ্রিল্যান্সিং সফলতা</a>
                </li>
                <li>
                  <a href="/contact">যোগাযোগ</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>

      <hr />
      <p style={{ textAlign: "center" }}>
        Copyright &copy;-2022 Varendra IT Limited. All right reserved |
        Developed by{" "}
        <span className="footer-intro">
          <a
            href="https://www.facebook.com/profile.php?id=100069159139897"
            target="blank"
          >
            Md.Mohon
          </a>
        </span>
      </p>
    </div>
  );
};

export default Footer;
