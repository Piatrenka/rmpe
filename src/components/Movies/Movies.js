import React from "react";
import styles from "./Movies.css";

import MovieInfo from "../MovieInfo/MovieInfo";

const Movies = props => {
  let movies = null;

  movies = props.movies.map(movie => {
    return (
      <MovieInfo
        key={movie.imdb.id}
        movie={movie}
        short={true}
        onMovieClick={props.onMovieClick}
      />
    );
  });

  return (
    <div className={styles.region}>
      <h6>This is Movies Component</h6>
      <div>{movies}</div>
    </div>
  );
};

export default Movies;
