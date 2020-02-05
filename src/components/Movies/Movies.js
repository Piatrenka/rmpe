import React from 'react'
import styles from './Movies.css'

import MovieInfo from '../MovieInfo/MovieInfo'

const Movies = props => {

  return (
    <div className={styles.region}>
      <h5>This is Movies Component</h5>
      {props.movies.map((movie, i) => (
        <div key={i}>
          <MovieInfo movie={movie} short={true}/>
        </div>
      ))}
    </div>
  );
}

export default Movies