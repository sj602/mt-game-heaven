import React from "react";
import Navigation from "./components/Navigation";
import { Container, Row, Col } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Movie from "./components/Movie";
import Song from "./components/Song";
import Quiz from "./components/Song";

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
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/movie">
                <Movie />
              </Route>
              <Route path="/song">
                <Song />
              </Route>
              <Route path="/quiz">
                <Quiz />
              </Route>
            </Switch>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
