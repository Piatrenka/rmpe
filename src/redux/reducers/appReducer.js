import { SearchModes, SortModes, reorderMovies } from "../../utils/common";
import { 
  FETCH_MOVIES_START, 
  FETCH_MOVIES_ERR, 
  FETCH_MOVIES_SUCCESS, 
  FETCH_MOVIE_SUCCESS,
  // UPDATE_SEARCH_QUERY, 
  // SET_SEARCHBY_MODE, 
  // SET_SORTBY_MODE, 
  // MOVIE_CLICK, 
  // RETURN_2_SEARCH 
} from '../actions/actionTypes'

const initialState = {
  movies: {},    // локальный, постоянно пополняемый словарь фильмов {id: {...movie}, ...}
  visibleMovies: [],    // массив из id фильмов для построения отображения фильмов на странице
  // recordsTotal: 0,
  // searchQuery: "", // Строка поиска
  // searchBy: SearchModes.TITLE, // режим поиска
  // sortBy: SortModes.RATING,  // режим сортировки
  // selectedMovieId: null,
  loading: true
}

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIES_START:
      return {
        ...state, loading: true
      }
    case FETCH_MOVIES_SUCCESS:
      // console.log("FETCH_MOVIES_SUCCESS Debug: ", Object.keys(state.movies).length);
      return {
        ...state, 
        loading: false, 
        // movies: action.movies, 
        movies: {...state.movies, ...action.movies}, 
        visibleMovies: action.visibleMovies, 
        recordsTotal: action.recordsTotal
      }
    case FETCH_MOVIE_SUCCESS:
      // console.log("FETCH_MOVIES_SUCCESS Debug: ", Object.keys(state.movies).length);
      return {
        ...state, 
        loading: false, 
        // movies: action.movies, 
        movies: {...state.movies, ...action.movies}, 
        visibleMovies: action.visibleMovies, 
        recordsTotal: action.recordsTotal
      }
    case FETCH_MOVIES_ERR:
      return {
        ...state, loading: false, error: action.error
      }
    // case UPDATE_SEARCH_QUERY:
    //   return {
    //     ...state, searchQuery: action.searchQuery
    //   }  
    // case SET_SEARCHBY_MODE:
    //   return {
    //     ...state, searchBy: action.searchBy
    //   }  
    // case SET_SORTBY_MODE:
    //   const movies = reorderMovies(state.movies, action.sortBy)
    //   return {
    //     ...state, sortBy: action.sortBy, movies: movies
    //   }
    // case MOVIE_CLICK:
    //   return {
    //     ...state, selectedMovieId: action.id
    //   }    
    // case RETURN_2_SEARCH:
    //   return {
    //     ...state, selectedMovieId: null
    //   }  
    default:
      return state;
  }
}