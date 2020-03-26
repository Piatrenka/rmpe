/**
 * Место для функций креаторов действий (actions) 
 * сами действия нужны как параметры для функции dispatch с помощью которой только 
 * и можно изменить внутреннее состояние хранилища store
 */

import { FETCH_MOVIES_START, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_ERR } from "./actionTypes"
import axios from '../../utils/axios-movie'

// здесь нужен код который будет диспатчить действия action, пока не понятно, как делать
export function fetchMovies(searchQuery, searchBy, sortBy) {
  
  console.log(searchQuery, searchBy, sortBy);

  return async dispatch => {
    dispatch(fetchMoviesStart)
    try {
      // const response = await axios.get('/movies')
      const response = await axios.get(
        "/movies?sortBy=vote_average&sortOrder=desc&search=LORD&searchBy=title"
      );
      const movies = []
      // console.log(response.data.data)

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