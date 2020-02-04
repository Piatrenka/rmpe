import React from "react";
import styles from "./SelectedRegion.css";
import MovieInfo from '../MovieInfo/MovieInfo'

const SelectedRegion= props => {
  // console.log(props)
  // console.log(props.state.movies);

  const movie = props.state.movies[props.state.selectedCardIndex]
  // console.log(movie)

  return (
    <div className={styles.region}>
      <h5>This is SelectedRegion Component</h5>
      <button onClick={props.onClick}>Return to search</button>
      <MovieInfo movie={movie} />
    </div>
  );
}

export default SelectedRegion;
