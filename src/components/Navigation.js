import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">MT게임천국</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>
            <Link to="/">메인</Link>
          </Nav.Link>
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
  );
};

export default Navigation;
