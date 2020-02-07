import React from "react";
import styles from "./SearchRegion.css";

import { SearchModes } from "../../utils/common";

function SearchRegion(props) {
  // console.log(props);

  return (
    <div className={styles.region}>
      <h6>This is SearchRegion Component</h6>
      <form>
        <label>Find your movie</label>
        <input
          type="text"
          value={props.searchQuery}
          onChange={e => {
            props.onSearchQueryChange(e.target.value);
          }}
        />
        <label>
          Search By
          <select
            value={props.searchBy}
            onChange={e => {
              props.onSearchModeChange(e.target.value);
            }}
          >
            <option value={SearchModes.TITLE}>{SearchModes.TITLE}</option>
            <option value={SearchModes.GENRE}>{SearchModes.GENRE}</option>
          </select>
        </label>
        <input type="button" value="Search" onClick={props.onSubmit} />
      </form>
    </div>
  );
}

export default SearchRegion;
