import React from "react";
import Radium from "radium";
import styles from "./MovieInfo.css";
import posterNotFound from "../../keep-calm-poster-not-found.png";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Card from "react-bootstrap/Card";

import Button from "react-bootstrap/Button";
import Logo from "../Logo/Logo";

import {connect} from 'react-redux'
import { return2Search } from "../../redux/actions/actions";

import {Link} from 'react-router-dom'

import Loader from "../UI/Loader/Loader";

const MovieInfo = props => {
  console.log('MovieInfo Debug: props> ', props);

  // const movie = props.movie;
  let movie = null
  movie = props.movies.find(movie => {
    return movie.id === Number.parseInt(props.movieId);
    // return movie.id === 238;
  });

  // movie = props.movies[0]

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
              <Link to='/'>
                <Button
                  variant="outline-light"
                  onClick={props.onReturn2MoviesClick}
                >
                  Return to search
                </Button>
              </Link>
            </div>
          </Col>
        </Row>
        <Row>
          <Col auto="true">
            <div className={styles.poster}>
              <img
                src={movie.poster_path}
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
                {movie.vote_average}
              </Col>
            </Row>
            <Row>movie.awards.text</Row>
            <Row>
              {movie.release_date.substring(0, 4)} {movie.runtime} min
            </Row>
            <Row>{movie.overview}</Row>
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
      // onClick={e => props.onMovieClick(movie.id)}
    >
      {/* <h6>This is the MovieInfo component</h6> */}
      {/* {props.movies.length === 0 ? <Loader /> : {movieInfo}} */}

      {movieInfo}
    </div>
  );
};

function mapState2Props(state) {
  return {
    movies: state.appReducer.movies,
    selectedMovieId: state.appReducer.selectedMovieId
  };
}

function mapDispatch2Props(dispatch) {
  return {
    onReturn2MoviesClick: () => dispatch(return2Search())
  };
}

// export default Radium(MovieInfo);
export default connect(mapState2Props, mapDispatch2Props)(MovieInfo);
