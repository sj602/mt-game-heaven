import React from "react";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import { Switch, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const App = () => {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <Navigation />
          </Col>
        </Row>
        <Row>
          <Col>
            <Home />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
