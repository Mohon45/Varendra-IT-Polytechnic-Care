import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../Images/logo.png'
import './Header.css';

const Header = () => {
    return (
        <div>
            <div>
            <Navbar bg="light" variant="light"  className="navber-design">
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


                    <Nav className="justify-content-end " activeKey="/home">
                        <Nav.Item>
                            <NavLink className="nav-link" to="/home">Home</NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            <NavLink className="nav-link" to="/service">Services</NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            <NavLink className="nav-link" to="/registration">Registration</NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </Nav.Item>
                    </Nav>
                </Container>
            </Navbar>
            
            </div>
        </div>
    );
};

export default Header;