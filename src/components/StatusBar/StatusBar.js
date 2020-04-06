import React, { Component } from "react";
import styles from "./StatusBar.css";

import { SortModes } from "../../utils/common";

import { connect } from "react-redux";
import { setSortByMode } from "../../redux/actions/actions";

class StatusBar extends Component {
  // console.log(props.detectedAmount);

  render() {
    const tail = this.props.detectedAmount === 1 ? "" : "s";

    const detectedAmount = (
      <div>
        <strong>
          {" "}
          {this.props.detectedAmount} movie{tail} was found
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
              checked={this.props.sortBy === SortModes.RELEASED}
              onChange={e => this.props.setSortByMode(e.target.value)}
            />
            Release Date
          </label>
          <label>
            <input
              type="radio"
              name="sortBy"
              value={SortModes.RATING}
              checked={this.props.sortBy === SortModes.RATING}
              onChange={e => this.props.setSortByMode(e.target.value)}
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
  }
}

function mapState2Props(state) {
  return {
    detectedAmount: state.appReducer.recordsTotal,
    sortBy: state.appReducer.sortBy
  }
}

function mapDispatch2Props(dispatch) {
  return {
    setSortByMode: sortBy => dispatch(setSortByMode(sortBy))
  }
}
export default connect(mapState2Props, mapDispatch2Props)(StatusBar);
