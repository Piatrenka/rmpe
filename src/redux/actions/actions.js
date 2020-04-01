/**
 * Место для функций креаторов действий (actions) 
 * сами действия нужны как параметры для функции dispatch с помощью которой только 
 * и можно изменить внутреннее состояние хранилища store
 */

import { FETCH_MOVIES_START, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_ERR, UPDATE_SEARCH_QUERY, SET_SEARCHBY_MODE, SET_SORTBY_MODE } from "./actionTypes"
import axios from '../../utils/axios-movie'

// здесь нужен код который будет диспатчить действия action, пока не понятно, как делать
export function fetchMovies(searchQuery, searchBy, sortBy) {
  
  console.log("fetchMovies Debug: ", searchQuery, searchBy, sortBy);

  return async dispatch => {
    dispatch(fetchMoviesStart)
    try {
      // const response = await axios.get('/movies')
      const response = await axios.get(
        // "/movies?sortBy=vote_average&sortOrder=desc&search=LORD&searchBy=title"
        // `/movies?sortBy=vote_average&sortOrder=desc&search=${searchQuery}&searchBy=${searchBy.toLowerCase()}`
        `/movies?sortBy=${sortBy.toLowerCase()}&sortOrder=desc&search=${searchQuery}&searchBy=${searchBy.toLowerCase()}`
      );
      const movies = []
      
      // console.log(
      //   `/movies?sortBy=vote_average&sortOrder=desc&search=${searchQuery}&searchBy=${searchBy.toLowerCase()}`
      // );
      // console.log("response.data.data = ", response.data.data)

      response.data.data.forEach(movie => {
        movies.push(movie)
      })

      dispatch(fetchMoviesSuccess(movies))
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

export function fetchMoviesSuccess(movies) {
  return {
    type: FETCH_MOVIES_SUCCESS,
    movies: movies
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