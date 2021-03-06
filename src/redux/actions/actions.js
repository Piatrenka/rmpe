/**
 * Место для функций креаторов действий (actions) 
 * сами действия нужны как параметры для функции dispatch с помощью которой только 
 * и можно изменить внутреннее состояние хранилища store
 */

import { 
  FETCH_MOVIES_START, 
  FETCH_MOVIES_SUCCESS, 
  FETCH_MOVIES_ERR, 
  
  FETCH_MOVIE_SUCCESS, 
  
  UPDATE_SEARCH_QUERY, 
  SET_SEARCHBY_MODE, 
  SET_SORTBY_MODE,
  MOVIE_CLICK,

  FETCH_MOVIES_BY_GENRE_START,
  FETCH_MOVIES_BY_GENRE_SUCCESS,
  // RETURN_2_SEARCH
 } from "./actionTypes"
import axios from '../../utils/axios-movie'
import qs from 'qs'

import { cnvArr2Obj } from '../../utils/common'

// import _ from 'lodash'

// здесь нужен код который будет диспатчить действия action, пока не понятно, как делать
export function fetchMovies(args) {
  
  // console.log("fetchMovies Debug: ", searchQuery, searchBy, sortBy);

  return async (dispatch, getState) => {
    dispatch(fetchMoviesStart());
    try {
      // const response = await axios.get('/movies')

      // default params
      // http://localhost:8080/search?sortOrder=desc&searchBy=title
      // ?sortBy=vote_average&sortOrder=desc&searchBy=title

      // const query = qs.stringify({
      //   sortBy: getState().appReducer.sortBy,
      //   sortOrder: "desc",
      //   search: getState().appReducer.searchQuery,
      //   searchBy: getState().appReducer.searchBy,
      // });

      const query = qs.stringify({
        sortBy: args.sortBy,
        sortOrder: args.sortOrder,
        search: args.search,
        searchBy: args.searchBy,
      });

      const url = `/movies?${query}`;

      const response = await axios.get(
        // "/movies?sortBy=vote_average&sortOrder=desc&search=LORD&searchBy=title"
        // `/movies?sortBy=vote_average&sortOrder=desc&search=${searchQuery}&searchBy=${searchBy.toLowerCase()}`
        // `/movies?sortBy=${sortBy.toLowerCase()}&sortOrder=desc&search=${searchQuery}&searchBy=${searchBy.toLowerCase()}`
        url
      );
      // const movies = response.data.data;

      // const movies = cnvArr2Obj(response.data.data, 'id');
      // const visibleMovies = Object.keys(movies)

      // console.log('cnvArr2Obj(movies): ', cnvArr2Obj(movies, 'id'))
      // console.log('actions.fetchMovies Debug : ', movies, visibleMovies)

      // console.log(
      //   `/movies?sortBy=vote_average&sortOrder=desc&search=${searchQuery}&searchBy=${searchBy.toLowerCase()}`
      // );
      // console.log(url)

      // console.log("response.data.data = ", response.data.data)

      // response.data.data.forEach(movie => {
      //   movies.push(movie)
      // })

      dispatch(
        // fetchMoviesSuccess(movies, visibleMovies, response.data.total)
        fetchMoviesSuccess(response.data.data, response.data.total)
      );
    } catch (e) {
      console.log(e);
      dispatch(fetchMoviesErr(e));
    }
  };

}

// здесь нужен код который будет диспатчить действия action, пока не понятно, как делать
export function fetchMovie(movieId) {
  
  // console.log("fetchMovie Debug: ", movieId);
  
  return async (dispatch, getState) => {
    dispatch(fetchMoviesStart())
    try {
          // const response = await axios.get('/movies')

          // default params
          // http://localhost:8080/search?sortOrder=desc&searchBy=title
          // ?sortBy=vote_average&sortOrder=desc&searchBy=title

          // const query = qs.stringify({
          //   sortBy: getState().appReducer.sortBy,
          //   sortOrder: "desc",
          //   search: getState().appReducer.searchQuery,
          //   searchBy: getState().appReducer.searchBy,
          // });

          // const query = qs.stringify({
          //   sortBy: args.sortBy,
          //   sortOrder: args.sortOrder,
          //   search: args.search,
          //   searchBy: args.searchBy,
          // });

          let url = `/movies/${movieId}`;

          let response = await axios.get(
            // "/movies?sortBy=vote_average&sortOrder=desc&search=LORD&searchBy=title"
            // `/movies?sortBy=vote_average&sortOrder=desc&search=${searchQuery}&searchBy=${searchBy.toLowerCase()}`
            // `/movies?sortBy=${sortBy.toLowerCase()}&sortOrder=desc&search=${searchQuery}&searchBy=${searchBy.toLowerCase()}`
            // "/movies/511679"
            // '/movies?filter=adventure%2C%20comedy'
            url
          );

          // const movies = [response.data];
          
          // if (Object.keys(response.data).length === 0 && response.data.constructor === Object) {
          //   // console.log('Debug movies ', movies, movies.length, response.data)
          //   dispatch(fetchMovieSuccess({}, [], 0))
          // } else {
          //   const movies = cnvArr2Obj([response.data], "id");
          //   const visibleMovies = Object.keys(movies);
          //   dispatch(fetchMovieSuccess(movies, visibleMovies, 1));
          // }

          dispatch(
            fetchMovieSuccess(response.data)
          )

          // if (Object.keys(response.data).length === 0 && response.data.constructor === Object) {
          //   // console.log('Debug movies ', movies, movies.length, response.data)
          //   dispatch(fetchMoviesSuccess({}, [], 0))
          // } else {
          //   // console.log(
          //   //   `/movies?sortBy=vote_average&sortOrder=desc&search=${searchQuery}&searchBy=${searchBy.toLowerCase()}`
          //   // );
          //   // console.log(url)

          //   // console.log("response.data = ", movies[0].genres, movies[0].genres.join('%2C%20'))

          //   url = `/movies?filter=${movies[0].genres.join(', ')}`;
          //   // console.log(url);

          //   response = await axios.get(url)
          //   // console.log('response = ', response.data.data)

          //   // response.data.data.forEach(movie => {
          //   //   movies.push(movie)
          //   // })

          //   // dispatch(fetchMoviesSuccess([...movies, ...response.data.data], 1));
          //   // dispatch(fetchMoviesSuccess([...new Set([...movies, ...response.data.data])], response.data.total));
          //   // dispatch(fetchMoviesSuccess(_.union(movies, response.data.data), response.data.total));

          //   if (!response.data.data.find(el => {
          //     return movies[0].id === el.id
          //   }))  {
          //     // console.log(`Movie ${movies[0].id} not found`)
          //     dispatch(fetchMoviesSuccess([ ...movies, ...response.data.data], response.data.total));
          //   } else {
          //     // console.log(`Movie ${movies[0].id} found`)
          //     dispatch(fetchMoviesSuccess(response.data.data, response.data.total));
          //   }
          // }
        } catch (e) {
      console.log(e)
      dispatch(fetchMoviesErr(e))
    }
  }

}

export function fetchMoviesByGenre(genre) {
  
  console.log("fetchMovieByGenre Debug: ", genre);
  
  return async (dispatch, getState) => {
    dispatch(fetchMoviesByGenreStart());
    try {
      let url = `/movies?filter=${genre.join(", ")}`;
      // console.log(url);

      let response = await axios.get(url);

      // const movies = cnvArr2Obj(response.data.data, "id");
      // const visibleMovies = Object.keys(movies);

      // console.log('fetchMoviesByGenre Debug: ', movies, visibleMovies)
      dispatch(
        fetchMoviesByGenreSuccess(response.data.data, response.data.total)
      )

    } catch (e) {
      console.log(e);
      // dispatch(fetchMoviesErr(e));
    }
  };

}

export function fetchMoviesStart() {
  return {
    type: FETCH_MOVIES_START
  }
}

export function fetchMoviesByGenreStart() {
  return {
    type: FETCH_MOVIES_BY_GENRE_START
  }
}

// В movies теперь массив из фильмов
export function fetchMoviesSuccess(movies, recordsTotal) {
  return {
    type: FETCH_MOVIES_SUCCESS,
    movies: movies,
    // visibleMovies: visibleMovies,
    recordsTotal: recordsTotal
  }
}

export function fetchMovieSuccess(movie) {
  return {
    type: FETCH_MOVIE_SUCCESS,
    movie: movie
  }
}

export function fetchMoviesByGenreSuccess(movies, recordsTotal) {
  return {
    type: FETCH_MOVIES_BY_GENRE_SUCCESS,
    movies: movies,
    // visibleMovies: visibleMovies,
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

// export function return2Search() {
//   return {
//     type: RETURN_2_SEARCH
//   }
// }