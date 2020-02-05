import React from 'react'
import styles from './StatusBar.css'

const StatusBar = props => {
  // console.log(props)

  const detectedAmount = (
    <div>
      <strong> {props.detectedAmount} movie found</strong>
    </div>
  );

  const sortBy = (
    <div>
      {/* <button>Release Date</button>
      <button>Rating</button> */}
      <form>
        <label>Sort By</label>
        <label>
          <input 
            type="radio"
            name="sortBy"
            value={0}
            checked={props.state.currentSortMode === 0}
            onChange={(e) => props.onClick(parseInt(e.target.value))}
          />          
          Release Date
        </label>
        <label>
          <input 
            type="radio"
            name="sortBy"
            value={1}
            checked={props.state.currentSortMode === 1}
            onChange={(e) => props.onClick(parseInt(e.target.value))}
          />          
          Rating
        </label>
      </form>
    </div>
  )
    
  return (
    <div className={styles.region}>
      <h6>This is StatusBar Component</h6>
      {detectedAmount}
      {sortBy}
    </div>
  )
}

export default StatusBar