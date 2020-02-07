import React, { Component } from "react";
import styles from "./MoviePage.css";
import SelectedRegion from "../SelectedRegion/SelectedRegion";
import OutputRegion from "../OutputRegion/OutputRegion";
import StatusBar from "../StatusBar/StatusBar";

function MoviePage(props) {
  // console.log(props);
  return (
    <div className={styles.region}>
      <h6>This is the MoviePage Component</h6>

      <SelectedRegion
        onReturn2SearchClick={props.onReturn2SearchClick}
        selectedMovieId={props.selectedMovieId}
      />

      <StatusBar
        sortBy={props.sortBy}
        onSortModeChange={props.onSortModeChange}
        detectedAmount={props.detectedAmount}
      />

      <OutputRegion movies={props.movies} onMovieClick={props.onMovieClick} />
    </div>
  );
}

export default MoviePage;
