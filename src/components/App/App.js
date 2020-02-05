import React, { Component } from 'react';
import styles from './App.css';

import { getRandomInt } from '../../utils/common'

import Movies from "../../assets/Movies"

import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'

import RegionControl from '../RegionControl/RegionControl'
import StatusBar from '../StatusBar/StatusBar'
import OutputRegion from '../OutputRegion/OutputRegion'
import Logo from '../Logo/Logo'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: Movies,
      isShowSearch: false,          // Режим ввода строки поиска, иначе показ кликнутого фильма
      isSearchWasApplied: false,    // Кликнута кнопка 'искать'
      searchStr: "",                // Строка поиска
      currentSearchMode: 0,         // Возможные варианты поиска 'TITLE', 'GENRE', 'ALL'
      searchModes: ['TITLE', 'GENRE', 'ALL'],
      currentSortMode: 0,                    // Возможные варианты сортировки 'RELEASED', 'RATING'
      sortModes: ['RELEASED', 'RATING'],     
      selectedCardIndex: getRandomInt(Movies.length)  // индекс элемента с фильмом по клику, первый раз случайный
    };
  
    // просто пипец, насколько отвратительная конструкция 
    this.handleIsShowSearchClick = this.handleIsShowSearchClick.bind(this)
    this.handleSearchStrChange = this.handleSearchStrChange.bind(this)
    this.handleSearchModeChange = this.handleSearchModeChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSortModesClick = this.handleSortModesClick.bind(this)
  }

  // обработчик для переключения показа содержимого региона между поиском и показом выбранной записи 
  handleIsShowSearchClick() {
    this.setState(state => ({isShowSearch: !state.isShowSearch}))
  } 

  // обработчик изменения содержания строки поиска, передается в дочернюю компоненту для использования в ней
  handleSearchStrChange(searchStr) {
    this.setState({
      searchStr: searchStr,
      isSearchWasApplied: false
    })
  }

  // обработчик выбора режима поиска
  handleSearchModeChange(searchMode) {
    this.setState({
      currentSearchMode: searchMode,
      isSearchWasApplied: false
    })
  }

  // обработчик для кнопки поиска
  handleSubmit() {
    console.log('Button Search is clicked')
    this.setState({
      isSearchWasApplied: true
    })
  }

  handleSortModesClick(sortMode) {
    this.setState({
      currentSortMode: sortMode
    })
  }

  render() {
    // console.log(styles)
    // console.log(this.state.movies)
    
    const data = this.props.data

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
          <RegionControl
            state={this.state}
            onClick={this.handleIsShowSearchClick}
            onSearchStrChange={this.handleSearchStrChange}
            onSearchModeChange={this.handleSearchModeChange}
            onSubmit={this.handleSubmit}
          />

          <StatusBar state={this.state} onClick={this.handleSortModesClick} />

          <OutputRegion state={this.state} />
        </ErrorBoundary>
        <Logo />
      </div>
    );
  }
}

export default App