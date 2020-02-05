import React from "react";
import styles from "./SearchRegion.css";

function SearchRegion(props) {
  // console.log(props);

  return (
    <div className={styles.region}>
      <h5>This is SearchRegion Component</h5>
      <form>
        <label>Find your movie</label>
        <input
          type="text"
          value={props.state.searchStr}
          onChange={e => {
            props.onSearchStrChange(e.target.value);
          }}
        />
        <label>
          Search By
          <select 
            value={props.state.currentSearchMode} 
            onChange={e => {props.onSearchModeChange(parseInt(e.target.value))}}
          >
            <option value={0}>{props.state.searchModes[0]}</option>
            <option value={1}>{props.state.searchModes[1]}</option>
            <option value={2}>{props.state.searchModes[2]}</option>
          </select>
        </label>
        <input type="button" value="Search" onClick={props.onSubmit}/>
      </form>
    </div>
  );
}

export default SearchRegion;
