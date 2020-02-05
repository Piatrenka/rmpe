import React from 'react'
import styles from './Logo.css'

const Logo = props => {
  return (
    <div className={styles.region}>
      <h6>This is Logo Component</h6>
      <p className={styles.logo}><strong>netflix</strong>roulette</p>
    </div>
  )
}

export default Logo