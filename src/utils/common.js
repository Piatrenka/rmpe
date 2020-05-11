// Длина словаря в словах
const words = 60;

// вернуть случайное целое число из заданного диапазона от 0 до max - 1
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// Из массива слов в случайном порядке выбрать words слов и построить из них результирующий массив
function getNRandomWords(arr) {
  let a = [];
  for (let i = 0; i < words; i++) {
    a.push(arr[getRandomInt(words > arr.length ? words : arr.length - 1)]);
  }
  return a;
}

const SearchModes = {
  TITLE: "title",
  GENRE: "genres"
};

const SortModes = {
  RELEASED: "release_date",
  RATING: "vote_average"
};

function reorderMovies(arr, sortBy) {
  const movies = arr.slice();

  // сортировка по условию
  if (sortBy === SortModes.RATING) {
    movies.sort(function(a, b) {
      if (a.vote_average < b.vote_average) {
        return 1;
      }
      if (a.vote_average > b.vote_average) {
        return -1;
      }
      return 0;
    });
  } else if (sortBy === SortModes.RELEASED) {
    movies.sort(function(a, b) {
      if (a.release_date < b.release_date) {
        return 1;
      }
      if (a.release_date > b.release_date) {
        return -1;
      }
      return 0;
    });
  }

  return movies

}

// Из массива объектов сделать объект объектов с ключем по заданному свойству
const cnvArr2Obj = (arr, key) => {
  const initVal = {};
  return arr.reduce((obj, item) => {
    return {
      ...obj,
      [item[key]]: item,
    };
  }, initVal);
};


export { getRandomInt, getNRandomWords, SearchModes, SortModes, reorderMovies, cnvArr2Obj };
