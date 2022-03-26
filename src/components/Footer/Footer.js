import React from 'react';
import { Container} from 'react-bootstrap';
import './Footer.css';
import logo from '../../Images/logo-big.png';

const Footer = () => {
    return (
        <div className="footer">
            <hr />
            <Container className="footer-container">
                <div className='row'>
                    <div className='col-md-3 mt-3'>
                        <div className='footer-1st-section'>
                            <img src={logo} alt="" />
                            <h5 className='footer-motivate-speach'>CHANGE | GROW | SUCCEED</h5>
                            <div className='d-flex my-4'>
                                <div className='footer-icon'><a href="https://www.facebook.com/VarendraITBD" target="_blank"><i class="fab fa-facebook-f fa-2x"></i></a></div>
                                <div className='footer-icon'><a href="https://www.youtube.com/channel/UCgmd3tdfNpP9X5u7Oro7DoQ" target="_blank"><i class="fab fa-youtube fa-2x"></i></a></div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 mt-3'>
                        <div>
                            <h3 className='fw-bold mb-2'>Contact Us</h3>
                            <div className='d-flex align-items-center mt-4'>
                                <div>
                                    <i class="fas fa-map-marker-alt contact-icon fa-2x"></i>
                                </div>
                                <div className='ft-text lh-1 ms-4'>
                                    <p className='fw-bold'>Head Office:</p>
                                    <p className='m-0 pb-1'>Beauty Plaza (2nd & 4th Flor)</p>
                                    <p>Boalia, Rajshahi</p>
                                </div>
                            </div>
                            <div className='d-flex align-items-center my-2'>
                                <div>
                                    <i class="fas fa-phone-square-alt contact-icon fa-2x"></i>
                                </div>
                                <div className='ft-text ms-4'>
                                    <p className='m-0 pb-1'>01797336604 (office)</p>
                                    <p>01719132276(CEO)</p>
                                </div>
                            </div>
                            <div className='d-flex align-items-center'>
                                <div>
                                    <i class="fas fa-envelope contact-icon fa-2x"></i>
                                </div>
                                <div className='ft-text ms-4'>
                                    <p>varendraitltd@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-2 mt-3'>
                        <h3 className='fw-bold'>Our Courses</h3>
                        <ul className='quick-link'>
                            <li><a href="/courses">Web Design</a></li>
                            <li><a href="/courses">Graphics Design</a></li>
                            <li><a href="/courses">Office Application</a></li>
                            <li><a href="/courses">Auto CAD</a></li>
                            <li><a href="/courses">Digital marketing</a></li>
                            <li><a href="/courses">App Development</a></li>
                        </ul>
                    </div>
                    <div className='col-md-3 mt-3'>
                        <h3 className='fw-bold'>Quick Links</h3>
                        <ul className='quick-link'>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/photo">Photo Gallery</a></li>
                            <li><a href="/">Job Placement</a></li>
                            <li><a href="/">Students' Feedback</a></li>
                            <li><a href="/">Freelancing Success</a></li>
                            <li><a href="/contact">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </Container>
            <hr/>
            <p style={{textAlign: "center"}}>&copy;Copyright-2021 Junior Developer. Developed by <span className="footer-intro"><a href="https://www.facebook.com/profile.php?id=100069159139897" target="_blank">Md.Mohon</a></span></p>
        </div>
    );
};

export default Footer;