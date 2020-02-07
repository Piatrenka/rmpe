import React from "react";
import styles from "./SelectedRegion.css";
import MovieInfo from "../MovieInfo/MovieInfo";

import Button from "react-bootstrap/Button";

const SelectedRegion = props => {
  // console.log(props)
  // console.log(props.state.movies);

  const movie = props.movies[0];
  // console.log(movie)

  return (
    <div className={styles.region}>
      <h6>This is SelectedRegion Component</h6>
      <Button onClick={props.onMovieClick}>Return to search</Button>
      <MovieInfo movie={movie} onClick={() => {}} />
    </div>
  );
};

export default SelectedRegion;
