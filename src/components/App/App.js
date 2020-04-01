import React, { Component } from "react";
import styles from "./App.css";

import { SearchModes, SortModes } from "../../utils/common";

// import Movies from "../../assets/Movies";
import { getMovie, getMovies } from "../../utils/api";

import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

// import RegionControl from "../RegionControl/RegionControl";
// import StatusBar from "../StatusBar/StatusBar";
// import OutputRegion from "../OutputRegion/OutputRegion";
import Logo from "../Logo/Logo";

import MoviesPage from "../MoviesPage/MoviesPage";
import MoviePage from "../MoviePage/MoviePage";

// Just testing
import HiddenMessage from "../../utils/hidden-message";

import {connect} from 'react-redux'

import {
  fetchMovies, 
  updateSearchQuery, 
  setSearchByMode, 
  setSortByMode, 
  movieClick, 
  return2Search
} from '../../redux/actions/actions'

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     movies: [],
  //     // isShowSearch: false,        // Режим ввода строки поиска, иначе показ кликнутого фильма
  //     searchQuery: "", // Строка поиска
  //     searchBy: SearchModes.TITLE, // Возможные варианты поиска 'TITLE', 'GENRE'
  //     sortBy: SortModes.RELEASED, // Возможные варианты сортировки 'RELEASED', 'RATING'
  //     selectedMovieId: null // "tt0012349" //null // getRandomInt(Movies.length) // id фильма по клику, первый раз случайный, для поиска установить в null
  //   };

  //   // просто пипец, насколько отвратительная конструкция
  //   // this.handleIsShowSearchClick = this.handleIsShowSearchClick.bind(this);
  //   // this.handleSearchQueryChange = this.handleSearchQueryChange.bind(this);
  //   // this.handleSearchModeChange = this.handleSearchModeChange.bind(this);
  //   // this.handleSortModesClick = this.handleSortModesClick.bind(this);
  //   // this.handleSubmit = this.handleSubmit.bind(this);
  //   // this.handleMovieClick = this.handleMovieClick.bind(this);
  // }

  // обработчик для переключения показа содержимого региона между поиском и показом выбранной записи
  // handleReturn2MoviesClick = () => {
  //   this.setState({
  //     selectedMovieId: null
  //   });
  // };

  // обработчик изменения содержания строки поиска, передается в дочернюю компоненту для использования в ней
  // handleSearchQueryChange = searchQuery => {
  //   this.setState({
  //     searchQuery: searchQuery
  //   });
  // };

  // обработчик выбора режима поиска
  // handleSearchModeChange = searchMode => {
  //   this.setState({
  //     searchBy: searchMode
  //   });
  // };

  // обработчик выбора режима сортировки
  // handleSortModesClick = sortMode => {
  //   this.setState({
  //     sortBy: sortMode
  //   });
  // };

  // обработчик для кнопки поиска
  // handleSubmit = () => {
  //   console.log(
  //     `Button Search is clicked: [${this.state.searchQuery}], ${this.state.searchBy}, ${this.state.sortBy}`
  //   );
  //   getMovies(
  //     this.state.searchQuery,
  //     this.state.searchBy,
  //     this.state.sortBy
  //   ).then(movies => {
  //     this.setState({
  //       movies
  //     });
  //   });
  // };

  // handleMovieClick = id => {
  //   // console.log(`${id} movie is clicked`);
  //   // const i = this.state.movies.findIndex(movie => {
  //   //   return movie.imdb.id === id;
  //   // });
  //   console.log(id);

  //   this.setState({
  //     selectedMovieId: id
  //   });
  // };

  async componentDidMount() {

    // const movies = await getMovies(
    //   this.state.searchQuery,
    //   this.state.searchBy,
    //   this.state.sortBy
    // );
    // this.setState({
    //   movies
    // });

    // console.log(this.props.searchQuery, this.props.searchBy, this.props.sortBy);

    this.props.fetchMovies(this.props.searchQuery, this.props.searchBy, this.props.sortBy)
  }

  // componentDidMount() {
  //   console.log("componentDidMount");
  //   console.log(
  //     getMovies({
  //       searchQuery: "",
  //       searchBy: SearchModes.TITLE,
  //       sortBy: SortModes.RELEASED
  //     })
  //   );
  //   const movies = getMovies({
  //     searchQuery: this.state.searchQuery,
  //     searchBy: this.state.searchBy,
  //     sortBy: this.state.sortBy
  //   });
  //   this.setState({
  //     movies
  //   });
  // }

  render() {
    // console.log(styles)
    // console.log(this.state.movies)

    // const data = this.props.data;

    // // получить фильм для отображения
    // let movie2Show = null;
    let movie2Show = [];
    let movies2Show = this.props.movies;

    if (this.props.selectedMovieId) {
      movie2Show = this.props.movies.find(movie => {
        return movie.id === this.props.selectedMovieId;
      });
    }

    // // получить фильмы для отображения
    // const movies2Show = this.state.movies.filter(movie => {
    //   switch (this.state.searchBy) {
    //     case SearchModes.TITLE: {
    //       return movie.title
    //         .toUpperCase()
    //         .includes(this.state.searchQuery.toUpperCase());
    //     }
    //     case SearchModes.GENRE: {
    //       return movie.genres
    //         .join("")
    //         .toUpperCase()
    //         .includes(this.state.searchQuery.toUpperCase());
    //     }
    //     // case 2: {
    //     //   return (
    //     //     movie.title
    //     //       .toUpperCase()
    //     //       .includes(this.state.searchQuery.toUpperCase()) ||
    //     //     movie.genres
    //     //       .join("")
    //     //       .toUpperCase()
    //     //       .includes(this.state.searchQuery.toUpperCase())
    //     //   );
    //     // }
    //   }
    // });

    // // сортировка по условию
    // if (this.state.sortBy === SortModes.RATING) {
    //   movies2Show.sort(function(a, b) {
    //     if (a.imdb.rating > b.imdb.rating) {
    //       return 1;
    //     }
    //     if (a.imdb.rating < b.imdb.rating) {
    //       return -1;
    //     }
    //     return 0;
    //   });
    // } else if (this.state.sortBy === SortModes.RELEASED) {
    //   movies2Show.sort(function(a, b) {
    //     if (a.year > b.year) {
    //       return 1;
    //     }
    //     if (a.year < b.year) {
    //       return -1;
    //     }
    //     return 0;
    //   });
    // }

    let page;
    if (!this.props.selectedMovieId) {
      page = (
        <MoviesPage
          movies={movies2Show}
          searchQuery={this.props.searchQuery}
          searchBy={this.props.searchBy}
          sortBy={this.props.sortBy}
          loading={this.props.loading}
          
          // detectedAmount={movies2Show.length}
          // onSearchQueryChange={this.handleSearchQueryChange}
          // onSearchModeChange={this.handleSearchModeChange}
          // onSortModeChange={this.handleSortModesClick}
          // onSubmit={this.handleSubmit}
          // onMovieClick={this.handleMovieClick}
          
          onSearchQueryChange={this.props.updateSearchQuery}
          onSearchModeChange={this.props.setSearchByMode}
          onSortModeChange={this.props.setSortByMode}
          onMovieClick={this.props.movieClick}
          onSubmit={this.props.fetchMovies}
        />
      );
    } else {
      page = (
        <MoviePage
          movie={movie2Show}
          movies={movies2Show}
          sortBy={this.props.sortBy}
          detectedAmount={movies2Show.length}
          selectedMovieId={this.selectedMovieId}
          onReturn2MoviesClick={this.props.return2Search}
          onSortModeChange={this.props.setSortByMode}
          onMovieClick={this.props.movieClick}
        />
      );
    }

    return (
      <div className={styles.App}>
        {/* <header className={styles["App-header"]}>
          <h1>RMPE App</h1>
          <h6>
            Copyright {data.company}, {data.created.getFullYear()}
          </h6>
        </header> */}

        {/* <div>
          {this.state.movies.map((movie, i) => (
            <p key={i}>{movie.title}</p>
          ))}
        </div> */}

        {/* <Logo /> */}

        <div>
          <HiddenMessage>
            It ain't what you don't know that gets you into trouble. It's what
            you know for sure that just ain't so...
          </HiddenMessage>
        </div>

        <ErrorBoundary>
          {page}
          {/* <RegionControl
            state={this.state}
            onClick={this.handleIsShowSearchClick}
            onSearchQueryChange={this.handleSearchQueryChange}
            onSearchModeChange={this.handleSearchModeChange}
            onSubmit={this.handleSubmit}
          />

          <StatusBar
            state={this.state}
            onClick={this.handleSortModesClick}
            detectedAmount={movies2Show.length}
          />

          <OutputRegion movies={movies2Show} onClick={this.handleMovieClick} /> */}
        </ErrorBoundary>
        <Logo />
      </div>
    );
  }
}

function mapState2Props(state) {
  return {
    movies: state.appReducer.movies,
    searchQuery: state.appReducer.searchQuery,
    searchBy: state.appReducer.searchBy,
    sortBy: state.appReducer.sortBy,
    selectedMovieId: state.appReducer.selectedMovieId,
    loading: state.appReducer.loading
  }
}

function mapDispatch2Props(dispatch) {
  return {
    fetchMovies: (searchQuery, searchBy, sortBy)=> dispatch(fetchMovies(searchQuery, searchBy, sortBy)),
    updateSearchQuery: searchQuery => dispatch(updateSearchQuery(searchQuery)),
    setSearchByMode: searchBy => dispatch(setSearchByMode(searchBy)),
    setSortByMode: sortBy => dispatch(setSortByMode(sortBy)),
    movieClick: id => dispatch(movieClick(id)),
    return2Search: () => dispatch(return2Search())

  }
}

// Лютейший, лютейший пипец, теперь, чтобы компонент понимал, как ему надо работать с центральным хранилищем store
// его надо передать параметром в функцию connect, которую предоставляет модуль react-redux
// функции connect нужны два параметра, оба функции, первой функции необходимо в качестве параметра состояние state
// второй нужны методы dispatch из store
export default connect(mapState2Props, mapDispatch2Props)(App);
