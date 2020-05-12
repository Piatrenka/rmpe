import React from 'react'
import styles from './MovieNotFound.css'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

const MovieNotFound = props => {
  return (
    <div className={styles.region}>
      <h1>Movie not found</h1>
      <Link to="/">
        <Button>Return to search</Button>
      </Link>
    </div>
  );
}

export default MovieNotFound