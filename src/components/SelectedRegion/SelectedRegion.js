import React from "react";
import styles from "./SelectedRegion.css";

function SelectedRegion(props) {
  console.log(props);

  return (
    <div className={styles.region}>
      <h5>This is SelectedRegion Component</h5>
    </div>
  );
}

export default SelectedRegion;
