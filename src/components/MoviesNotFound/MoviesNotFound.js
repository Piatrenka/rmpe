import React from 'react'
import styles from './MoviesNotFound.css'

const MoviesNotFound = props => {
  return (
    <div className={styles.region}>
      <h6>This is MoviesNotFound Component</h6>
      <h1>No films found</h1>
    </div>
  )
}

export default MoviesNotFound