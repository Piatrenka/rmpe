import React from "react";
import styles from "./StatusBar.css";

import { SortModes } from "../../utils/common";

const StatusBar = props => {
  // console.log(props.detectedAmount);
  const tail = props.detectedAmount === 1 ? "" : "s";

  const detectedAmount = (
    <div>
      <strong>
        {" "}
        {props.detectedAmount} movie{tail} was found
      </strong>
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
            value={SortModes.RELEASED}
            checked={props.sortBy === SortModes.RELEASED}
            onChange={e => props.onSortModeChange(e.target.value)}
          />
          Release Date
        </label>
        <label>
          <input
            type="radio"
            name="sortBy"
            value={SortModes.RATING}
            checked={props.sortBy === SortModes.RATING}
            onChange={e => props.onSortModeChange(e.target.value)}
          />
          Rating
        </label>
      </form>
    </div>
  );

  return (
    <div className={styles.region}>
      {/* <h6>This is StatusBar Component</h6> */}
      {detectedAmount}
      {sortBy}
    </div>
  );
};

export default StatusBar;
