import { SearchModes, SortModes } from "../../utils/common";
import { FETCH_MOVIES_START, FETCH_MOVIES_ERR, FETCH_MOVIES_SUCCESS, UPDATE_SEARCH_QUERY, SET_SEARCHBY_MODE } from '../actions/actionTypes'

const initialState = {
  movies: [],
  searchQuery: "", // Строка поиска
  searchBy: SearchModes.TITLE, // режим поиска
  sortBy: SortModes.RELEASED,  // режим сортировки
  selectedMovieId: null,
  loading: true
}

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIES_START:
      return {
        ...state, loading: true
      }
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state, loading: false, movies: action.movies
      }
    case FETCH_MOVIES_ERR:
      return {
        ...state, loading: false, error: action.error
      }
    case UPDATE_SEARCH_QUERY:
      return {
        ...state, searchQuery: action.searchQuery
      }  
    case SET_SEARCHBY_MODE:
      return {
        ...state, searchBy: action.searchBy
      }  
    default:
      return state;
  }
}