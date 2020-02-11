import React from "react";
import styles from "./Movies.css";

import MovieInfo from "../MovieInfo/MovieInfo";

import { Container, Row, Col, Card } from "react-bootstrap"

// import "bootstrap/dist/css/bootstrap.min.css";

const Movies = props => {
  let movies = null;

  movies = props.movies.map(movie => {
    return (
      <Col xs="4" className="p-2" style={{backgroundColor: "black"}}>
        <Card key={movie.imdb.id}>
          <MovieInfo
            key={movie.imdb.id}
            movie={movie}
            short={true}
            onMovieClick={props.onMovieClick}
          />
        </Card>
      </Col>
    );
  });

  return (
    <div>
      {/* <h6>This is Movies Component</h6> */}
      <Row style={{margin: "0px"}}> 
        {movies}
      </Row>
    </div>
  );
};

export default Movies;
