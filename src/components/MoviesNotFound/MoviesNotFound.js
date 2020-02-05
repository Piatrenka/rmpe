import React from 'react'
import styles from './MoviesNotFound.css'

const MoviesNotFound = props => {
  return (
    <div className={styles.region}>
      <h5>This is MoviesNotFound Component</h5>
      <h1>No films found</h1>
    </div>
  )
}

export default MoviesNotFound