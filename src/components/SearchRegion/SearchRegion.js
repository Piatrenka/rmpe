import React, { Component } from "react";
import styles from "./SearchRegion.css";

import { SearchModes } from "../../utils/common";

import {connect} from 'react-redux'

import {
  fetchMovies,
  updateSearchQuery,
  setSearchByMode
} from "../../redux/actions/actions";



class SearchRegion extends Component {
  // console.log(props);
  render() {
    return (
      <div className={styles.SearchRegion}>
        {/* <h6>This is SearchRegion Component</h6> */}
        <div>
          <form
            onSubmit={e => {
              e.preventDefault();
            }}
          >
            <label>Find your movie</label>
            <input
              type="text"
              value={this.props.searchQuery}
              onChange={e => {
                this.props.updateSearchQuery(e.target.value);
              }}
            />
            <label>
              Search By
              <select
                value={this.props.searchBy}
                onChange={e => {
                  this.props.setSearchByMode(e.target.value);
                }}
              >
                <option value={SearchModes.TITLE}>{SearchModes.TITLE}</option>
                <option value={SearchModes.GENRE}>{SearchModes.GENRE}</option>
              </select>
            </label>
            <input
              type="button"
              value="Submit"
              onClick={() => this.props.fetchMovies()}
            />
          </form>
        </div>
      </div>
    );
  }
}

function mapState2Props(state) {
  return {
    searchQuery: state.appReducer.searchQuery,
    searchBy: state.appReducer.searchBy
  };
}

function mapDispatch2Props(dispatch) {
return {
  fetchMovies: ()=> dispatch(fetchMovies()),
  updateSearchQuery: searchQuery => dispatch(updateSearchQuery(searchQuery)),
  setSearchByMode: searchBy => dispatch(setSearchByMode(searchBy))
}

}

export default connect(mapState2Props, mapDispatch2Props)(SearchRegion);
