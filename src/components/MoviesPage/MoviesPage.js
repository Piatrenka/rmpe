import React, {Component} from "react";
import styles from "./MoviesPage.css";
import SearchRegion from "../SearchRegion/SearchRegion";
import OutputRegion from "../OutputRegion/OutputRegion";
import StatusBar from "../StatusBar/StatusBar";
import Loader from "../UI/Loader/Loader";

import { connect } from "react-redux";

import { fetchMovies } from "../../redux/actions/actions";

import {useRouteMatch, useParams} from 'react-router-dom'

class MoviesPage extends Component {
  async componentDidMount() {
    
    console.log("MoviesPage Debug: ", this.props);
    
    this.props.fetchMovies()
  }

  render() {
    return (
      <div className={styles.region}>

        <SearchRegion
        />

        <StatusBar
        />

        {this.props.loading ? <Loader /> : <OutputRegion />}
      </div>
    );
  }
}

function mapState2Props(state) {
  return {
    loading: state.appReducer.loading,
  };
}

function mapDispatch2Props(dispath) {
  return {
    fetchMovies: () => dispath(fetchMovies()),
  };
}

export default connect(mapState2Props, mapDispatch2Props)(MoviesPage);
