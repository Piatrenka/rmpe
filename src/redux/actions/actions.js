/**
 * Место для функций креаторов действий (actions) 
 * сами действия нужны как параметры для функции dispatch с помощью которой только 
 * и можно изменить внутреннее состояние хранилища store
 */

import { 
  FETCH_MOVIES_START, 
  FETCH_MOVIES_SUCCESS, 
  FETCH_MOVIES_ERR, 
  UPDATE_SEARCH_QUERY, 
  SET_SEARCHBY_MODE, 
  SET_SORTBY_MODE,
  MOVIE_CLICK,
  RETURN_2_SEARCH
 } from "./actionTypes"
import axios from '../../utils/axios-movie'
import qs from 'qs'

// здесь нужен код который будет диспатчить действия action, пока не понятно, как делать
export function fetchMovies() {
  
  // console.log("fetchMovies Debug: ", searchQuery, searchBy, sortBy);

  return async (dispatch, getState) => {
    dispatch(fetchMoviesStart())
    try {
          // const response = await axios.get('/movies')

          // default params
          // http://localhost:8080/search?sortOrder=desc&searchBy=title
          // ?sortBy=vote_average&sortOrder=desc&searchBy=title
          const query = qs.stringify({
            sortBy: getState().appReducer.sortBy,
            sortOrder: "desc",
            search: getState().appReducer.searchQuery,
            searchBy: getState().appReducer.searchBy,
          });
          const url = `/movies?${query}`;

          const response = await axios.get(
            // "/movies?sortBy=vote_average&sortOrder=desc&search=LORD&searchBy=title"
            // `/movies?sortBy=vote_average&sortOrder=desc&search=${searchQuery}&searchBy=${searchBy.toLowerCase()}`
            // `/movies?sortBy=${sortBy.toLowerCase()}&sortOrder=desc&search=${searchQuery}&searchBy=${searchBy.toLowerCase()}`
            url
          );
          const movies = response.data.data;

          // console.log(
          //   `/movies?sortBy=vote_average&sortOrder=desc&search=${searchQuery}&searchBy=${searchBy.toLowerCase()}`
          // );
          // console.log(url)

          // console.log("response.data.data = ", response.data.data)

          // response.data.data.forEach(movie => {
          //   movies.push(movie)
          // })

          dispatch(fetchMoviesSuccess(movies, response.data.total));
        } catch (e) {
      console.log(e)
      dispatch(fetchMoviesErr(e))
    }
  }

}

export function fetchMoviesStart() {
  return {
    type: FETCH_MOVIES_START
  }
}

export function fetchMoviesSuccess(movies, recordsTotal) {
  return {
    type: FETCH_MOVIES_SUCCESS,
    movies: movies,
    recordsTotal: recordsTotal
  }
}

export function fetchMoviesErr(error) {
  return {
    type: FETCH_MOVIES_ERR,
    error: error
  }
}

export function updateSearchQuery(searchQuery) {
  return {
    type: UPDATE_SEARCH_QUERY,
    searchQuery: searchQuery
  }
}

export function setSearchByMode(searchBy) {
  return {
    type: SET_SEARCHBY_MODE,
    searchBy: searchBy
  }
}

export function setSortByMode(sortBy) {
  return {
    type: SET_SORTBY_MODE,
    sortBy: sortBy
  }
}

export function movieClick(id) {
  return {
    type: MOVIE_CLICK,
    id: id
  }
}

export function return2Search() {
  return {
    type: RETURN_2_SEARCH
  }
}