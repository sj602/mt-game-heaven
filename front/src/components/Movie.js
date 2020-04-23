import React from "react";
import { connect } from "react-redux";
import { Carousel, Jumbotron, Button } from "react-bootstrap";
import axios from "axios";
import { saveMovies } from "../actions/movies";

const Movie = () => {
  console.log(this);
  const getData = async () => {
    try {
      const _result = await axios.get(`http://localhost:8000/api/movies`);
      const result = _result["data"];
      this.props.saveMovies(result);
      console.log(this.props);
    } catch (error) {
      console.error(error);
    }
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

const mapStateToProps = (state) => ({
  movies: state.movies,
});

const mapDispatchToProps = {
  saveMovies,
};

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
