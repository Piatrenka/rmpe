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
  TITLE: "TITLE",
  GENRE: "GENRE"
};

const SortModes = {
  RELEASED: "RELEASED",
  RATING: "RATING"
};

export { getRandomInt, getNRandomWords, SearchModes, SortModes };
