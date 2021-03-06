import React from "react";
import styles from "./Movies.css";

import MovieInfoShort from "../MovieInfoShort/MovieInfoShort";

import { Container, Row, Col, Card } from "react-bootstrap";

import {connect} from 'react-redux'
import { movieClick } from "../../redux/actions/actions";


// import "bootstrap/dist/css/bootstrap.min.css";

const Movies = props => {
  let movies = null;
  // let movie = null;

  movies = props.movies.map(movie => {
    // movie = props.movies[id]  
    return (
      <Col
        key={movie.id}
        xs="4"
        className="p-2"
        style={{ backgroundColor: "grey" }}
      >
        <Card key={movie.id} style={{ backgroundColor: "#0A0B0D" }}>
          <MovieInfoShort
            key={movie.id}
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

function mapState2Props(state) {
  return {
    // movies: state.appReducer.movies,     // Объект объектов с ключем по id
    // visibleMovies: state.appReducer.visibleMovies  // Массив с id фильмов
    movies: state.appReducer.visibleMovies.map(id => state.appReducer.movies[id])
  }
}

function mapDispatch2Props(dispatch) {
  return {
    onMovieClick: id => dispatch(movieClick(id))
  }
}

export default connect(mapState2Props, mapDispatch2Props)(Movies);
