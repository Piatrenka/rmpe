import React, {Component} from "react";
import styles from "./MoviesPage.css";
import SearchRegion from "../SearchRegion/SearchRegion";
import OutputRegion from "../OutputRegion/OutputRegion";
import StatusBar from "../StatusBar/StatusBar";
import Loader from "../UI/Loader/Loader";

import { connect } from "react-redux";

import { fetchMovies } from "../../redux/actions/actions";

import {useRouteMatch, useParams} from 'react-router-dom'

import qs from 'qs'

class MoviesPage extends Component {
  
  getArgs() {
    return qs.parse(this.props.location.search, { ignoreQueryPrefix: true })
  }

  async componentDidMount() {
    
    console.log("MoviesPage Debug: ", this.props);
    
    // получить query параметры из props и передать в fetchMovies
    this.props.fetchMovies(this.getArgs())
  }
  
  // повторить Mount, сделать функцией
  async componentDidUpdate(prevProps) {
    // console.log('componentDidUpdate Debug:', this.props.location.search)
    // const values = qs.parse(this.props.location.search)
    console.log('MoviesPage componentDidUpdate Debug: ', this.getArgs())
    if (this.props.location.search !== prevProps.location.search) {
      this.props.fetchMovies(this.getArgs())
    }
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

function mapDispatch2Props(dispatch) {
  return {
    fetchMovies: args => dispatch(fetchMovies(args))
  };
}

export default connect(mapState2Props, mapDispatch2Props)(MoviesPage);
