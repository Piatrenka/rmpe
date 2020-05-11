import React, { Component } from "react";
import styles from "./MoviePage.css";
import SelectedRegion from "../SelectedRegion/SelectedRegion";
// import OutputRegion from "../OutputRegion/OutputRegion";
import OutputByGenreRegion from "../OutputByGenreRegion/OutputByGenreRegion"
import StatusBar from "../StatusBar/StatusBar";

import { useLocation, useRouteMatch, useParams } from 'react-router-dom'

import Loader from '../UI/Loader/Loader'
import { connect } from 'react-redux'
import { fetchMovie } from "../../redux/actions/actions";
import { render } from "@testing-library/react";

class MoviePage extends Component {
  // console.log(props);
  // let location = useLocation()
  // let match = useRouteMatch()
  // console.log('MoviePage Debug: location ', location)
  // console.log('MoviePage Debug: match ', match.params.movieId)

  // const [movie, setMovie] = React.useState(null)
  // React.useEffect(() => {
  //   props.fetchMovie(
  //     match.params.movieId
  //   )
  // })

  // async componentDidMount() {
  //   // let { id } = useParams()
  //   console.log("MoviePage Debug: ", this.props.match.params.movieId)
  //   fetchMovie(this.props.match.params.movieId);
  // }

  // componentDidUpdate() {
  // }

  async componentDidMount() {
    // console.log("MoviePage Debug: ", this.props.match.params.movieId);

    // получить query параметры из props и передать в fetchMovies
    this.props.fetchMovie(this.props.match.params.movieId);
  }

  // async componentDidUpdate(prevProps) {
  //   // if (this.props.location.search !== prevProps.location.search) {
  //   //   this.props.fetchMovie(this.props.match.params.movieId);
  //   // }
  //   this.props.fetchMovie(this.props.match.params.movieId);
  // }

  componentDidUpdate(prevProps) {
    // console.log('componentDidUpdate this.props Debug', this.props, prevProps)

    if (this.props.match.url !== prevProps.match.url) {
      this.props.fetchMovie(this.props.match.params.movieId);
    }

  }

  render() {
    // console.log("MoviePage Debug >>: ", this.props.movies)
    // console.log(
    //   "MoviePage Debug >>>: ",
    //   Object.keys(this.props.movies).length === 0 ? {} : this.props.movies[this.props.match.params.movieId]
    // );

    return (
      <div className={styles.region}>
        {/* <h6>This is the MoviePage Component</h6> */}

        {this.props.loading ? (
          <Loader />
        ) : (
          <React.Fragment>
            <SelectedRegion
              movie={
                Object.keys(this.props.movies).length === 0
                  ? {}
                  : this.props.movies[this.props.match.params.movieId]
              }
            />
            <StatusBar />
            <OutputByGenreRegion 
              genres={
                Object.keys(this.props.movies).length === 0
                  ? {}
                  : this.props.movies[this.props.match.params.movieId].genres
  
              }
            />
          </React.Fragment>
        )}

        {/* <SelectedRegion
        // movie={props.movie}
        // onReturn2MoviesClick={props.onReturn2MoviesClick}
        // selectedMovieId={props.selectedMovieId}
        /> */}


        {/* <OutputRegion
        // movies={props.movies} onMovieClick={props.onMovieClick}
        /> */}

        {/* {this.props.loading ? <Loader /> : <OutputRegion />} */}
      </div>
    );
  }
}

function mapState2Props(state) {
  return {
    movies: state.appReducer.movies,
    loading: state.appReducer.loading
  }
}

function mapDispatch2Props(dispatch) {
  return {
    fetchMovie: id => dispatch(fetchMovie(id))
  }
}

export default connect(mapState2Props, mapDispatch2Props)(MoviePage);
