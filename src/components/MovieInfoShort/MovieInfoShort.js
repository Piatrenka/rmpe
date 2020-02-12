import React from "react";
import Radium from "radium";
import styles from "./MovieInfoShort.css";
import posterNotFound from "../../keep-calm-poster-not-found.png";

import Card from "react-bootstrap/Card";

const MovieInfoShort = props => {
  // console.log(props);

  const movie = props.movie;

  const style = {
    // border: "1px solid #ccc",
    // boxShadow: "0 4px 5px 0 rgba(0, 0, 0, .14)",
    ":hover": {
      // border: "1px solid #aaa",
      boxShadow: "0 4px 15px 0 rgba(0, 0, 0, .25)",
      cursor: "pointer"
    }
  };

  const movieInfoShort = (
    <React.Fragment>
      <Card.Img
        src={movie.poster}
        onError={e => {
          e.target.onerror = null;
          e.target.src = posterNotFound;
        }}
      />
      <div className={styles.movie_card}>
        <p>{movie.title}</p>
        <p>{movie.imdb.rating}</p>
        <p>{movie.year}</p>
        <p>{movie.genres.join(", ")}</p>
      </div>
    </React.Fragment>
  );

  return (
    <div
      className={styles.region}
      style={style}
      onClick={e => props.onMovieClick(movie.imdb.id)}
    >
      {/* <h6>This is the MovieInfo component</h6> */}
      {/* {props.short ? movieInfoShort : movieInfo} */}
      {movieInfoShort}
    </div>
  );
};

export default Radium(MovieInfoShort);
// export default MovieInfo;
