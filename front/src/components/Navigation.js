import React from "react";
import { Navbar, Nav, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import heaven from "../images/heaven.jpeg";

const Navigation = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>
          <img style={{ width: 40, height: 40 }} src={heaven} />
          <Link to="/" style={{ textDecoration: null, color: "inherit" }}>
            MT게임천국
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/movie">영화포스터맞추기</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/song">랜덤노래맞추기</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/custom">커스텀퀴즈</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
