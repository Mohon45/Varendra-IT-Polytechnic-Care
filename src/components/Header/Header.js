import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../Images/logo.png'
import './Header.css';
import Topbar from './Topbar/Topbar';

const Header = () => {
    return (
        <div className='bg-color'>
            <div>
                <Topbar/>
                <Navbar variant="light"  className="navber-design">
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
                                <NavLink className="nav-link text-success" to="/home">Home</NavLink>
                            </Nav.Item>
                            <Nav.Item>
                                <NavLink className="nav-link text-success" to="/service">Services</NavLink>
                            </Nav.Item>
                            <Nav.Item>
                                <NavLink className="nav-link text-success" to="/about">About</NavLink>
                            </Nav.Item>
                            <Nav.Item>
                                <NavLink className="nav-link text-success" to="/contact">Contact</NavLink>
                            </Nav.Item>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
};

export default Header;