import React from "react";
import styles from "./OutputRegion.css";
import Movies from "../Movies/Movies";
import MoviesNotFound from "../MoviesNotFound/MoviesNotFound";
import MoviesRelated from "../MoviesRelated/MoviesRelated";

import {connect} from 'react-redux'
import { movieClick } from "../../redux/actions/actions";

const OutputRegion = props => {
  let comp;

  if (props.movies.length > 0) {
    comp = <Movies movies={props.movies} onMovieClick={props.onMovieClick} />;
  } else {
    comp = <MoviesNotFound />;
  }

  return (
    <div className={styles.region}>
      {/* <h6>This is OutputRegion Component</h6> */}
      {comp}
      <MoviesRelated />
    </div>
  );
};

function mapState2Props(state) {
  return {
    movies: state.appReducer.movies
  }
}

function mapDispatch2Props(dispatch) {
  return {
    onMovieClick: id => dispatch(movieClick(id))
  }
}
export default connect(mapState2Props, mapDispatch2Props)(OutputRegion);
