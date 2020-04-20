import React, { Component } from "react";
import styles from "./SearchRegion.css";

import { SearchModes } from "../../utils/common";

import {connect} from 'react-redux'

import {
  fetchMovies,
  updateSearchQuery,
  setSearchByMode
} from "../../redux/actions/actions";

import { Link, useHistory, useLocation } from 'react-router-dom'

import qs from 'qs'

function SearchRegion(props) {
  
    let history = useHistory()
    let location = useLocation()

    console.log('SearchRegion Debug: ', props);

    const query = qs.stringify({
      // sortBy: getState().appReducer.sortBy,
      sortOrder: "desc",
      search: props.searchQuery,
      searchBy: props.searchBy
    });
    const url = `/search?${query}`;


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
              value={props.searchQuery}
              onChange={e => {
                props.updateSearchQuery(e.target.value);
              }}
            />
            <label>
              Search By
              <select
                value={props.searchBy}
                onChange={e => {
                  props.setSearchByMode(e.target.value);
                }}
              >
                <option value={SearchModes.TITLE}>{SearchModes.TITLE}</option>
                <option value={SearchModes.GENRE}>{SearchModes.GENRE}</option>
              </select>
            </label>
              <input
                type="button"
                value="Submit"
                onClick={() => history.replace(url)}
              />
          </form>
        </div>
      </div>
    );
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
