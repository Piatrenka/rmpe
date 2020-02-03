import React from "react";
import styles from "./SearchRegion.css";

function SearchRegion(props) {
  console.log(props);

  return (
    <div className={styles.region}>
      <h5>This is SearchRegion Component</h5>
    </div>
  );
}

export default SearchRegion;
