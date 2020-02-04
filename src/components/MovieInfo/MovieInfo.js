import React from 'react'
import styles from './MovieInfo.css'

const MovieInfo = props => {
  // console.log(props)

  const movie = props.movie
  const movieInfo = (
    <React.Fragment>
      <img src={props.movie.poster}></img>
      <p>{movie.title}</p>
      <p>{movie.awards.text}</p>
      <p>{movie.imdb.rating}</p>
      <p>{movie.year}</p>
      <p>{movie.runtime} min</p>
      <p>{movie.plot}</p>
    </React.Fragment>
  )
  
  return (
    <div className={styles.region}>
      <h6>This is the MovieInfo component</h6>
      {movieInfo}
    </div>
  )
}

export default MovieInfo