import React, { Component } from "react";
import styles from "./App.css";

import { getRandomInt, SearchModes, SortModes } from "../../utils/common";

import Movies from "../../assets/Movies";

import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

// import RegionControl from "../RegionControl/RegionControl";
// import StatusBar from "../StatusBar/StatusBar";
// import OutputRegion from "../OutputRegion/OutputRegion";
import Logo from "../Logo/Logo";

import MoviesPage from "../MoviesPage/MoviesPage";
import MoviePage from "../MoviePage/MoviePage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: Movies,
      // isShowSearch: false,        // Режим ввода строки поиска, иначе показ кликнутого фильма
      searchQuery: "", // Строка поиска
      searchBy: SearchModes.TITLE, // Возможные варианты поиска 'TITLE', 'GENRE'
      sortBy: SortModes.RELEASED, // Возможные варианты сортировки 'RELEASED', 'RATING'
      selectedMovieId: getRandomInt(Movies.length) // id фильма по клику, первый раз случайный, для поиска установить в null
    };

    // просто пипец, насколько отвратительная конструкция
    // this.handleIsShowSearchClick = this.handleIsShowSearchClick.bind(this);
    // this.handleSearchQueryChange = this.handleSearchQueryChange.bind(this);
    // this.handleSearchModeChange = this.handleSearchModeChange.bind(this);
    // this.handleSortModesClick = this.handleSortModesClick.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleMovieClick = this.handleMovieClick.bind(this);
  }

  // обработчик для переключения показа содержимого региона между поиском и показом выбранной записи
  handleReturn2SearchClick = () => {
    this.setState({
      selectedMovieId: null
    });
  };

  // обработчик изменения содержания строки поиска, передается в дочернюю компоненту для использования в ней
  handleSearchQueryChange = searchQuery => {
    this.setState({
      searchQuery: searchQuery
    });
  };

  // обработчик выбора режима поиска
  handleSearchModeChange = searchMode => {
    this.setState({
      searchBy: searchMode
    });
  };

  // обработчик выбора режима сортировки
  handleSortModesClick = sortMode => {
    this.setState({
      sortBy: sortMode
    });
  };

  // обработчик для кнопки поиска
  handleSubmit = () => {
    console.log("Button Search is clicked");
    this.setState({});
  };

  handleMovieClick = id => {
    // console.log(`${id} movie is clicked`);
    // const i = this.state.movies.findIndex(movie => {
    //   return movie.imdb.id === id;
    // });
    console.log(id);

    this.setState({
      selectedMovieId: this.state.movies.findIndex(movie => {
        return movie.imdb.id === id;
      }),
      isShowSearch: false
    });
  };

  render() {
    // console.log(styles)
    // console.log(this.state.movies)

    const data = this.props.data;

    // получить фильмы для отображения
    const movies2Show = this.state.movies.filter(movie => {
      switch (this.state.searchBy) {
        case SearchModes.TITLE: {
          return movie.title
            .toUpperCase()
            .includes(this.state.searchQuery.toUpperCase());
        }
        case SearchModes.GENRE: {
          return movie.genres
            .join("")
            .toUpperCase()
            .includes(this.state.searchQuery.toUpperCase());
        }
        // case 2: {
        //   return (
        //     movie.title
        //       .toUpperCase()
        //       .includes(this.state.searchQuery.toUpperCase()) ||
        //     movie.genres
        //       .join("")
        //       .toUpperCase()
        //       .includes(this.state.searchQuery.toUpperCase())
        //   );
        // }
      }
    });

    // сортировка по условию
    if (this.state.sortBy === SortModes.RATING) {
      movies2Show.sort(function(a, b) {
        if (a.imdb.rating > b.imdb.rating) {
          return 1;
        }
        if (a.imdb.rating < b.imdb.rating) {
          return -1;
        }
        return 0;
      });
    } else if (this.state.sortBy === SortModes.RELEASED) {
      movies2Show.sort(function(a, b) {
        if (a.year > b.year) {
          return 1;
        }
        if (a.year < b.year) {
          return -1;
        }
        return 0;
      });
    }

    let page;
    if (this.state.selectedMovieId) {
      page = (
        <MoviesPage
          movies={movies2Show}
          searchQuery={this.state.searchQuery}
          searchBy={this.state.searchBy}
          sortBy={this.state.sortBy}
          onSearchQueryChange={this.handleSearchQueryChange}
          onSearchModeChange={this.handleSearchModeChange}
          onSortModeChange={this.handleSortModesClick}
          detectedAmount={movies2Show.length}
          onSubmit={this.handleSubmit}
          onMovieClick={this.handleMovieClick}
        />
      );
    } else {
      page = (
        <MoviePage
          movies={movies2Show}
          sortBy={this.state.sortBy}
          onSortModeChange={this.handleSortModesClick}
          detectedAmount={movies2Show.length}
          onSubmit={this.handleSubmit}
          onMovieClick={this.handleMovieClick}
          selectedMovieId={this.selectedMovieId}
        />
      );
    }

    return (
      <div className={styles.App}>
        <header className={styles["App-header"]}>
          <h1>RMPE App</h1>
          <h6>
            Copyright {data.company}, {data.created.getFullYear()}
          </h6>
        </header>

        {/* <div>
          {this.state.movies.map((movie, i) => (
            <p key={i}>{movie.title}</p>
          ))}
        </div> */}

        <Logo />

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

export default App;
