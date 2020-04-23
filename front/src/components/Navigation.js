import React from "react";
import { Navbar, Nav, Image, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

const Navigation = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>
          <Link to="/" style={{ textDecoration: null, color: "inherit" }}>
            MT게임천국
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/movie">
              <Nav.Link>영화포스터맞추기</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/song">
              <Nav.Link>랜덤노래맞추기</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/custom">
              <Nav.Link>커스텀퀴즈</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
