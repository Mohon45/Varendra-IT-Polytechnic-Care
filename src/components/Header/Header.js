import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import logo from '../../Images/logo.png'
import './Header.css';
import Topbar from './Topbar/Topbar';

const Header = () => {
    return (
        <div className='bg-color'>
            <div>
                <Topbar/>
                <Navbar className="navber-design" variant="light" collapseOnSelect expand="lg">
                    <Container>
                        <Navbar.Brand className="nav-title wrap" href="#home">
                            <img className='nav-img' src={logo} alt="" />
                        </Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Nav className="nav-link">
                                <Nav.Link className="nav-link-only nav-item" as={HashLink} to="/">Home</Nav.Link>
                                <Nav.Link className="nav-link-only nav-item" as={HashLink} to="/service">Our Courses</Nav.Link>
                                <Nav.Link className="nav-link-only nav-item" as={HashLink} to="/about">SCDP</Nav.Link>
                                <Nav.Link className="nav-link-only nav-item" as={HashLink} to="/about">Polytech Kocing</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                {/* <Navbar variant="light"  className="navber-design">
                    <Container>
                        
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


                        <Nav className="justify-content-end" activeKey="/home">
                            <Nav.Item>
                                <NavLink className="nav-link" to="/home">Home</NavLink>
                            </Nav.Item>
                        
                            <Nav.Item>
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </Nav.Item>
                            <Nav.Item>
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </Nav.Item>
                        </Nav>
                    </Container>
                </Navbar> */}
            </div>
        </div>
    );
};

export default Header;