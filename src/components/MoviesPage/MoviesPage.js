import React, { Component } from "react";
import styles from "./MoviesPage.css";
import SearchRegion from "../SearchRegion/SearchRegion";
import OutputRegion from "../OutputRegion/OutputRegion";
import StatusBar from "../StatusBar/StatusBar";
import Loader from "../UI/Loader/Loader"

function MoviesPage(props) {
  // console.log('MoviesPage Debug: ', props);
  return (
    <div className={styles.region}>
      {/* <h6>This is the MoviesPage Component</h6> */}

      <SearchRegion
        searchQuery={props.searchQuery}
        searchBy={props.searchBy}
        sortBy={props.sortBy}
        onSearchQueryChange={props.onSearchQueryChange}
        onSearchModeChange={props.onSearchModeChange}
        onSubmit={props.onSubmit}
      />

      <StatusBar
        sortBy={props.sortBy}
        onSortModeChange={props.onSortModeChange}
        detectedAmount={props.detectedAmount}
      />

      {props.loading ? (
        <Loader />
      ) : (
        <OutputRegion movies={props.movies} onMovieClick={props.onMovieClick} />
      )}
    </div>
  );
}

export default MoviesPage;
