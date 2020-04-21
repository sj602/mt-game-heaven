import React from "react";
import { Carousel, Jumbotron, Button } from "react-bootstrap";
import { getHtml } from "../utils/getMovies";
import jsonp from "jsonp";

const Movie = () => {
  const getData = () => {
    console.log(getHtml());
  };

  return (
    <div>
      <p>Movie</p>
      <Button variant="success" onClick={() => getData()}>
        영화 받아오기
      </Button>
    </div>
  );
};

export default Movie;
