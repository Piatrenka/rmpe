import React, { Component } from 'react';
import styles from './App.css';

import Movies from "../../assets/Movies"

import RegionControl from '../RegionControl/RegionControl'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: Movies,
      isShowSearch: false,            // Режим ввода строки поиска, иначе показ кликнутого фильма
      isSearchWasApplied: false,    // Кликнута кнопка 'искать'
      searchStr: "",                // Строка поиска
      currentSearchMode: ["TITLE"], // Возможные варианты 'TITLE', 'GENRE', 'ALL'
      currentSortBy: ["RELEASED"],  // Возможные варианты 'RELEASED', 'RATING'
      selectedCardIndex: 0          // индекс элемента с фильмом по клику
    };
  
    // просто пипец, насколько отвратительная конструкция 
    this.handleIsShowSearchClick = this.handleIsShowSearchClick.bind(this)
  }

  // обработчик для переключения показа содержимого региона между поиском и показом выбранной записи 
  handleIsShowSearchClick() {
    this.setState(state => ({isShowSearch: !state.isShowSearch}))
  } 

  render() {
    // console.log(styles)
    console.log(this.state.movies)
    const data = this.props.data

    return (
      <div className={styles.App}>
        <header className={styles['App-header']}>
          <h1>RMPE App</h1>
          <h6>Copyright {data.company}, {data.created.getFullYear()}</h6>
        </header>
        
        {/* <div>
          {this.state.movies.map((movie, i) => (
            <p key={i}>{movie.title}</p>
          ))}
        </div> */}
        
        <RegionControl state={this.state} onClick={this.handleIsShowSearchClick}/>

      </div>
    )
  }
}

export default App