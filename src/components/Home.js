import React from "react";
import { Carousel, Jumbotron, Button, Row } from "react-bootstrap";
import heaven from "../images/heaven.jpeg";

const Home = () => {
  return (
    <div>
      <Jumbotron>
        <h1>MT게임천국</h1>
        <Row>
          <p>다양한 게임을 즐길 수 있는 곳!</p>

          <img style={{ width: 40, height: 40 }} src={heaven} />
        </Row>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.univ20.com/wp-content/uploads/2017/08/24eb93af4cdb15fb538b115674a21f7f-12.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.univ20.com/wp-content/uploads/2017/07/c4e8fdaf7440f356f1c006bf5ef47561.png"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ytimg.com/vi/roXWaV-PvjQ/maxresdefault.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
