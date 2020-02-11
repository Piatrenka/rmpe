import React, { Component } from "react";
import styles from "./MoviesPage.css";
import SearchRegion from "../SearchRegion/SearchRegion";
import OutputRegion from "../OutputRegion/OutputRegion";
import StatusBar from "../StatusBar/StatusBar";

function MoviesPage(props) {
  // console.log(props);
  return (
    <div className={styles.region}>
      {/* <h6>This is the MoviesPage Component</h6> */}

      <SearchRegion
        searchQuery={props.searchQuery}
        searchBy={props.searchBy}
        onSearchQueryChange={props.onSearchQueryChange}
        onSearchModeChange={props.onSearchModeChange}
        onSubmit={props.onSubmit}
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

export default MoviesPage;
