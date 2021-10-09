import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import './Footer.css';
import logo from '../../Images/logo.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer">
            <Container className="footer-container">
                <div>
                    <Navbar className="header-name" href="#home">
                        <img
                        alt=""
                        src={logo}
                        width="80"
                        height="80"
                        className="d-inline-block align-top"
                        />{' '}
                        Varendra IT & Polytechnic Care
                    </Navbar>
                    <p className="footer-description">Barindra IT is one of the best IT companies in Rajshahi city. And here is a coaching center called Polytechnic Care. At this coaching center, the students of all the polytechnics of Rajshahi city later.</p>

                    <div className="social-icon">
                        <Link to="/"><i className="fab fa-facebook-square fa-3x"></i></Link>
                        <Link to="/"><i className="fab fa-instagram-square fa-3x"></i></Link>
                        <Link to="/"><i className="fab fa-twitter-square fa-3x"></i></Link>
                        <Link to="/"><i className="fab fa-linkedin fa-3x"></i></Link>
                        <Link to="/"><i className="fab fa-github-square fa-3x"></i></Link>
                    </div>
                    <h2 style={{fontWeight: "bold", color: "#0BC560", marginTop: "30px"}}>Help Desk</h2>
                    <h3>01782638193</h3>
                </div>
                <div className="about-us">
                    <h1>About Us</h1>
                    <ul>
                        <li>Support Forum</li>
                        <li>Faq & Help Center</li>
                        <li>Registretion And Account</li>
                        <li>Services & Help</li>
                    </ul>
                </div>
                

            </Container>
            <hr/>
            <p style={{textAlign: "center"}}>&copy;Copyright-2021 Junior Developer. Developed by <span className="footer-intro">Md.Mohon</span></p>
        </div>
    );
};

export default Footer;