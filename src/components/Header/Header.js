import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Header.css";
import Topbar from "./Topbar/Topbar";

const Header = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const logOut = () => {
    localStorage.removeItem("user");
    navigate("/");
  };
  return (
    <div className="bg-color">
      <div>
        <Topbar />
        <Navbar className="navber-design" collapseOnSelect expand="lg">
          <Container>
            <Navbar.Brand className="nav-title wrap"></Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Nav className="nav-link">
                <Nav.Link
                  className="nav-link-only nav-item"
                  style={{ color: "white" }}
                  as={HashLink}
                  to="/"
                >
                  হোম
                </Nav.Link>
                <Nav.Link
                  className="nav-link-only nav-item"
                  style={{ color: "white" }}
                  as={HashLink}
                  to="/courses"
                >
                  কোর্সসমূহ
                </Nav.Link>
                {user?.role === "admin" ? (
                  <Nav.Link
                    className="nav-link-only nav-item"
                    style={{ color: "white" }}
                    as={HashLink}
                    to="/courses/create"
                  >
                    কোর্স যোগ
                  </Nav.Link>
                ) : null}

                <Nav.Link
                  className="nav-link-only nav-item"
                  style={{ color: "white" }}
                  as={HashLink}
                  to="/result"
                >
                  রেজাল্ট
                </Nav.Link>
                {user?.role === "admin" ? (
                  <Nav.Link
                    className="nav-link-only nav-item"
                    style={{ color: "white" }}
                    as={HashLink}
                    to="/result/add"
                  >
                    রেজাল্ট যোগ
                  </Nav.Link>
                ) : null}

                <Nav.Link
                  className="nav-link-only nav-item"
                  style={{ color: "white" }}
                  as={HashLink}
                  to="/photo"
                >
                  ফটো গ্যালারি
                </Nav.Link>
                <Nav.Link
                  className="nav-link-only nav-item"
                  style={{ color: "white" }}
                  as={HashLink}
                  to="/contact"
                >
                  যোগাযোগ
                </Nav.Link>
                {!user?.email ? (
                  <Nav.Link
                    className="nav-link-only nav-item"
                    style={{ color: "white" }}
                    as={HashLink}
                    to="/login"
                  >
                    লগইন
                  </Nav.Link>
                ) : (
                  <Nav.Link
                    className="nav-link-only nav-item"
                    style={{ color: "white" }}
                    as={HashLink}
                    onClick={logOut}
                  >
                    লগ আউট
                  </Nav.Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
