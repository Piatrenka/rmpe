import React, { Component } from "react";
import styles from "./OutputByGenreRegion.css";
import Movies from "../Movies/Movies";
import MoviesNotFound from "../MoviesNotFound/MoviesNotFound";
import MoviesRelated from "../MoviesRelated/MoviesRelated";

import {connect} from 'react-redux'
import { fetchMoviesByGenre } from "../../redux/actions/actions";

class OutputByGenreRegion extends Component {

  async componentDidMount() {
    this.props.fetchMoviesByGenre(this.props.genres)

    // console.log('componentDidMount Debug: ', this.props.match)
    // if (this.props.match.url !== prevProps.match.url) {
    //   this.props.fetchMovie(this.props.match.params.movieId);
    // }


  }

  render() {
    let comp;
  
    // Теперь movies это объект объектов с ключами по id фильма 
    if (this.props.movies.length > 0) {
      comp = <Movies />;
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
  }

};

function mapState2Props(state) {
  return {
    movies: state.appReducer.visibleMovies.map(id => state.appReducer.movies[id])
  }
}

function mapDispatch2Props(dispatch) {
  return {
    fetchMoviesByGenre: genre => dispatch(fetchMoviesByGenre(genre))
  }
}

export default connect(mapState2Props, mapDispatch2Props)(OutputByGenreRegion);
