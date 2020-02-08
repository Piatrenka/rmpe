import React from "react";
import Radium from "radium";
import styles from "./MovieInfo.css";
import posterNotFound from "../../keep-calm-poster-not-found.png";

const MovieInfo = props => {
  // console.log(props);

  const movie = props.movie;

  const movieInfo = (
    <React.Fragment>
      <img
        src={movie.poster}
        onError={e => {
          e.target.onerror = null;
          e.target.src = posterNotFound;
        }}
      />
      <p>{movie.title}</p>
      <p>{movie.awards.text}</p>
      <p>{movie.imdb.rating}</p>
      <p>{movie.year}</p>
      <p>{movie.runtime} min</p>
      <p>{movie.plot}</p>
    </React.Fragment>
  );

  const style = {
    border: "1px solid #ccc",
    boxShadow: "0 4px 5px 0 rgba(0, 0, 0, .14)",
    ":hover": {
      border: "1px solid #aaa",
      boxShadow: "0 4px 15px 0 rgba(0, 0, 0, .25)",
      cursor: "pointer"
    }
  };

  const movieInfoShort = (
    <div>
      {/* <img src={props.movie.poster}></img> */}
      <p>{movie.title}</p>
      {/* <p>{movie.awards.text}</p> */}
      <p>{movie.imdb.rating}</p>
      <p>{movie.year}</p>
      <p>{movie.genres.join(", ")}</p>
      {/* <p>{movie.runtime} min</p> */}
      {/* <p>{movie.plot}</p> */}
      {/* <p>{props.key}</p> */}
    </div>
  );

  return (
    <div
      className={styles.region}
      style={style}
      onClick={e => props.onMovieClick(movie.imdb.id)}
    >
      <h6>This is the MovieInfo component</h6>
      {props.short ? movieInfoShort : movieInfo}
    </div>
  );
};

export default Radium(MovieInfo);
