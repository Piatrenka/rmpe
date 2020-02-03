import React from 'react'
import styles from "./RegionControl.css";
import SearchRegion from "../SearchRegion/SearchRegion"
import SelectedRegion from "../SelectedRegion/SelectedRegion"

function RegionControl(props) {
  console.log(props)

  const isShowSearch = props.state.isShowSearch;
  let region;

  if (isShowSearch) {
    region = <SearchRegion />;
  } else {
    region = <SelectedRegion />;
  }

  return (
    <div className={styles.region}>
      <h5>
        This is RegionControl Component
      </h5>
      {region}
    </div>
  )
}

export default RegionControl