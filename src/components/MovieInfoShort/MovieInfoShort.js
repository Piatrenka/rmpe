import React from "react";
import Radium from "radium";
import styles from "./MovieInfoShort.css";
import posterNotFound from "../../keep-calm-poster-not-found.png";

import Card from "react-bootstrap/Card";

import {Link} from 'react-router-dom'

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
        src={movie.poster_path}
        onError={e => {
          e.target.onerror = null;
          e.target.src = posterNotFound;
        }}
      />
      <div className={styles.movie_card}>
        <p>{movie.title}</p>
        <p>{movie.vote_average}</p>
        <p>{movie.release_date.substring(0, 4)}</p>
        <p>{movie.genres.join(", ")}</p>
      </div>
    </React.Fragment>
  );

  return (
    <Link to='/film'>
      <div
        className={styles.region}
        style={style}
        onClick={e => props.onMovieClick(movie.id)}
      >
        {/* <h6>This is the MovieInfo component</h6> */}
        {/* {props.short ? movieInfoShort : movieInfo} */}
        {movieInfoShort}
      </div>
    </Link>
  );
};

export default Radium(MovieInfoShort);
// export default MovieInfo;
