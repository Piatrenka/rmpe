import React, { Component } from "react";
import styles from "./App.css";

// import { SearchModes, SortModes } from "../../utils/common";

// import Movies from "../../assets/Movies";
// import { getMovie, getMovies } from "../../utils/api";

import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

// import RegionControl from "../RegionControl/RegionControl";
// import StatusBar from "../StatusBar/StatusBar";
// import OutputRegion from "../OutputRegion/OutputRegion";

import Logo from "../Logo/Logo";

import MoviesPage from "../MoviesPage/MoviesPage";
import MoviePage from "../MoviePage/MoviePage";
import SearchRegion from '../SearchRegion/SearchRegion'

// Just testing
// import HiddenMessage from "../../utils/hidden-message";

import {connect} from 'react-redux'

import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'

import {
  fetchMovies 
  // updateSearchQuery, 
  // setSearchByMode, 
  // setSortByMode, 
  // movieClick, 
  // return2Search
} from '../../redux/actions/actions'

import qs from 'qs'

class App extends Component {
  // async componentDidMount() {
  //   this.props.fetchMovies()
  // }

  render() {
    const query = qs.stringify({
      sortBy: "vote_average",
      sortOrder: "desc",
      searchBy: "title"
    });

    return (
      <div className={styles.App}>
        <ErrorBoundary>
          {/* {page} */}
          <Router>
            <Switch>
              <Route path='/' exact render={() => (<Redirect to={`/search?${query}`} />)} />
              <Route path='/movies/:movieId' component={MoviePage} />
              <Route path='/search' component={MoviesPage} />
              <Route render={(match) => {
                // console.log('match', match)
                return (<div>{`Page Not Found: ${match.location.pathname}`}</div>)
                }}/>
            </Switch>
          </Router>
        </ErrorBoundary>
        <Logo />
      </div>
    );
  }
}

function mapState2Props(state) {
  return {
    movies: state.appReducer.movies,
    // searchQuery: state.appReducer.searchQuery,
    // searchBy: state.appReducer.searchBy,
    // sortBy: state.appReducer.sortBy,
    selectedMovieId: state.appReducer.selectedMovieId,
    // loading: state.appReducer.loading,
    // recordsTotal: state.appReducer.recordsTotal
  }
}

function mapDispatch2Props(dispatch) {
  return {
    fetchMovies: ()=> dispatch(fetchMovies())
    // updateSearchQuery: searchQuery => dispatch(updateSearchQuery(searchQuery)),
    // setSearchByMode: searchBy => dispatch(setSearchByMode(searchBy)),
    // setSortByMode: sortBy => dispatch(setSortByMode(sortBy)),
    // movieClick: id => dispatch(movieClick(id)),
    // return2Search: () => dispatch(return2Search())

  }
}

// Лютейший, лютейший пипец, теперь, чтобы компонент понимал, как ему надо работать с центральным хранилищем store
// его надо передать параметром в функцию connect, которую предоставляет модуль react-redux
// функции connect нужны два параметра, оба функции, первой функции необходимо в качестве параметра состояние state
// второй нужны методы dispatch из store
export default connect(mapState2Props, mapDispatch2Props)(App);
