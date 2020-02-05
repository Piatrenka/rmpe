import React from 'react'
import styles from "./RegionControl.css";
import SearchRegion from "../SearchRegion/SearchRegion"
import SelectedRegion from "../SelectedRegion/SelectedRegion"

function RegionControl(props) {
  // console.log(props)

  const isShowSearch = props.state.isShowSearch;
  let region;

  if (isShowSearch) {
    region = (
      <SearchRegion 
        state={props.state}
        onSearchStrChange={props.onSearchStrChange}
        onSearchModeChange={props.onSearchModeChange}
        onSubmit={props.onSubmit}
      />
    );
  } else {
    region = (
      <SelectedRegion 
        state={props.state} 
        onClick={props.onClick}
        onSearchStrChange={props.onSearchStrChange}
      />
    );
  }

  return (
    <div className={styles.region}>
      <h6>
        This is RegionControl Component
      </h6>
      {region}
    </div>
  )
}

export default RegionControl