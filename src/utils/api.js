import allMovies from "../assets/Movies";
import { SearchModes, SortModes } from "./common";

// Вернуть фильм по id
export function getMovie(id) {
  return allMovies.find(movie => {
    return id === movie.imdb.id;
  });
}

// Подготовить фильмы по условиям фильтра и сортировки
function setMovies(searchQuery, searchBy, sortBy, resolve, reject) {
  // console.log(allMovies);
  // console.log(searchBy, sortBy);

  // фильтр по условию
  const movies2Show = allMovies.filter(movie => {
    switch (searchBy) {
      case SearchModes.TITLE: {
        return movie.title.toUpperCase().includes(searchQuery.toUpperCase());
      }
      case SearchModes.GENRE: {
        return movie.genres
          .join("")
          .toUpperCase()
          .includes(searchQuery.toUpperCase());
      }
    }
  });

  // сортировка по условию
  if (sortBy === SortModes.RATING) {
    movies2Show.sort(function(a, b) {
      if (a.imdb.rating > b.imdb.rating) {
        return 1;
      }
      if (a.imdb.rating < b.imdb.rating) {
        return -1;
      }
      return 0;
    });
  } else if (sortBy === SortModes.RELEASED) {
    movies2Show.sort(function(a, b) {
      if (a.year > b.year) {
        return 1;
      }
      if (a.year < b.year) {
        return -1;
      }
      return 0;
    });
  }
  resolve(movies2Show);
}

export function getMovies(searchQuery, searchBy, sortBy) {
  // console.log(searchQuery, searchBy, sortBy);
  // searchQuery, searchBy, sortBy это параметры, которые передаются в вызов setMovies
  // Promise, resolve, reject обязательное условие для функции, которую можно будет вызвать с декоратором await
  return new Promise((resolve, reject) => {
    setTimeout(setMovies, 1000, searchQuery, searchBy, sortBy, resolve, reject);
  });
}
