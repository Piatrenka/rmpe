import React from "react";
import styles from "./SelectedRegion.css";
import MovieInfo from "../MovieInfo/MovieInfo";

import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form"
import "bootstrap/dist/css/bootstrap.min.css";


import Logo from "../Logo/Logo";

const SelectedRegion = props => {
  // console.log(props)
  // console.log(props.state.movies);

  // const movie = props.movies[0];
  // console.log(movie)

  return (
    <div className={styles.region}>
      {/* <h6>This is SelectedRegion Component</h6> */}
      <MovieInfo 
        movie={props.movie} 
        onMovieClick={() => {}} 
        onReturn2MoviesClick={props.onReturn2MoviesClick}
      />
    </div>
  );
};

export default SelectedRegion;
