import React from "react";
import Radium from "radium";
import styles from "./MovieInfo.css";
import posterNotFound from "../../keep-calm-poster-not-found.png";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import Button from "react-bootstrap/Button";
import Logo from "../Logo/Logo";

const MovieInfo = props => {
  // console.log(props);

  const movie = props.movie;

  const movieInfo = (
    <React.Fragment>
      <Container fluid className={styles.movie_card}>
        <Row>
          <Col>
            <Logo />
          </Col>
          <Col>
            <div
              style={{ marginTop: "10px" }}
              className="d-flex justify-content-end"
            >
              <Button
                variant="outline-light"
                onClick={props.onReturn2MoviesClick}
              >
                Return to search
              </Button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col auto="true">
            <div className={styles.poster}>
              <img
                src={movie.poster}
                onError={e => {
                  e.target.onerror = null;
                  e.target.src = posterNotFound;
                }}
              />
            </div>
          </Col>
          <Col auto="true">
            <Row>
              <Col md="auto">
                <h2>{movie.title}</h2>
              </Col>
              <Col xs lg="1">
                {movie.imdb.rating}
              </Col>
            </Row>
            <Row>{movie.awards.text}</Row>
            <Row>
              {movie.year} {movie.runtime} min
            </Row>
            <Row>{movie.plot}</Row>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );

  const style = {
    // border: "1px solid #ccc",
    // boxShadow: "0 4px 5px 0 rgba(0, 0, 0, .14)",
    ":hover": {
      // border: "1px solid #aaa",
      boxShadow: "0 4px 15px 0 rgba(0, 0, 0, .25)",
      cursor: "pointer"
    }
  };

  return (
    <div
      className={styles.region}
      style={style}
      onClick={e => props.onMovieClick(movie.imdb.id)}
    >
      {/* <h6>This is the MovieInfo component</h6> */}
      {movieInfo}
    </div>
  );
};

export default Radium(MovieInfo);
// export default MovieInfo;
