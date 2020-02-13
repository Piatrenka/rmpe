import React from "react";
import styles from "./Movies.css";

import MovieInfoShort from "../MovieInfoShort/MovieInfoShort";

import { Container, Row, Col, Card } from "react-bootstrap";

// import "bootstrap/dist/css/bootstrap.min.css";

const Movies = props => {
  let movies = null;

  movies = props.movies.map(movie => {
    return (
      <Col
        key={movie.imdb.id}
        xs="4"
        className="p-2"
        style={{ backgroundColor: "grey" }}
      >
        <Card key={movie.imdb.id} style={{ backgroundColor: "#0A0B0D" }}>
          <MovieInfoShort
            key={movie.imdb.id}
            movie={movie}
            // short={true}
            onMovieClick={props.onMovieClick}
          />
        </Card>
      </Col>
    );
  });

  return (
    <div>
      {/* <h6>This is Movies Component</h6> */}
      <Row style={{ margin: "0px" }}>{movies}</Row>
    </div>
  );
};

export default Movies;
