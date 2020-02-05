import React from 'react'
import styles from './OutputRegion.css'
import Movies from '../Movies/Movies'
import MoviesNotFound from '../MoviesNotFound/MoviesNotFound'
import MoviesRelated from '../MoviesRelated/MoviesRelated'

const OutputRegion = props => {

  // получить фильмы для отображения
  const movies2Show = props.state.movies.filter(movie => {
    switch(props.state.currentSearchMode) {
      case 0: {
        return movie.title.toUpperCase().includes(props.state.searchStr.toUpperCase())
      }
      case 1: {
        return movie.genres.join('').toUpperCase().includes(props.state.searchStr.toUpperCase())
      }
      case 2: {
        return (
          movie.title.toUpperCase().includes(props.state.searchStr.toUpperCase()) ||
          movie.genres.join('').toUpperCase().includes(props.state.searchStr.toUpperCase())
        );
      }
    }
  })

  let comp;

  if (movies2Show.length > 0) {
    comp = (
      <Movies movies={movies2Show}/>
    )
  } else {
    comp = (
      <MoviesNotFound />
    )
  }

  return (
    <div className={styles.region}>
      <h5>This is OutputRegion Component</h5>
      {comp}
      <MoviesRelated />
    </div>
  )
}

export default OutputRegion