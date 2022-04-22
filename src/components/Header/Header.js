import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import './Header.css';
import Topbar from './Topbar/Topbar';

const Header = () => {
    return (
        <div className='bg-color'>
            <div>
                <Topbar/>
                <Navbar className="navber-design" collapseOnSelect expand="lg">
                    <Container>
                        <Navbar.Brand className="nav-title wrap">
                            
                        </Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Nav className="nav-link">
                                <Nav.Link className="nav-link-only nav-item" style={{color: 'white'}} as={HashLink} to="/">Home</Nav.Link>
                                <Nav.Link className="nav-link-only nav-item" style={{color: 'white'}} as={HashLink} to="/courses">Our Courses</Nav.Link>
                                <Nav.Link className="nav-link-only nav-item" style={{color: 'white'}} as={HashLink} to="/photo">Photo Gallery</Nav.Link>
                                <Nav.Link className="nav-link-only nav-item" style={{color: 'white'}} as={HashLink} to="/contact">Contact Us</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
};

export default Header;