const Movies = [
  {
    title: "Once Upon a Time in the West",
    year: 1968,
    rated: "PG-13",
    runtime: 175,
    countries: ["Italy", "USA", "Spain"],
    genres: ["Western"],
    director: "Sergio Leone",
    writers: [
      "Sergio Donati",
      "Sergio Leone",
      "Dario Argento",
      "Bernardo Bertolucci",
      "Sergio Leone"
    ],
    actors: [
      "Claudia Cardinale",
      "Henry Fonda",
      "Jason Robards",
      "Charles Bronson"
    ],
    plot:
      "Epic story of a mysterious stranger with a harmonica who joins forces with a notorious desperado to protect a beautiful widow from a ruthless assassin working for the railroad.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTEyODQzNDkzNjVeQTJeQWpwZ15BbWU4MDgyODk1NDEx._V1_SX300.jpg",
    imdb: { id: "tt0064116", rating: 8.6, votes: 201283 },
    tomato: {
      meter: 98,
      image: "certified",
      rating: 9,
      reviews: 54,
      fresh: 53,
      consensus:
        "A landmark Sergio Leone spaghetti western masterpiece featuring a classic Morricone score.",
      userMeter: 95,
      userRating: 4.3,
      userReviews: 64006
    },
    metacritic: 80,
    awards: { wins: 4, nominations: 5, text: "4 wins \u0026 5 nominations." },
    type: "movie"
  },
  {
    title: "A Million Ways to Die in the West",
    year: 2014,
    rated: "R",
    runtime: 116,
    countries: ["USA"],
    genres: ["Comedy", "Western"],
    director: "Seth MacFarlane",
    writers: ["Seth MacFarlane", "Alec Sulkin", "Wellesley Wild"],
    actors: [
      "Seth MacFarlane",
      "Charlize Theron",
      "Amanda Seyfried",
      "Liam Neeson"
    ],
    plot:
      "As a cowardly farmer begins to fall for the mysterious new woman in town, he must put his new-found courage to the test when her husband, a notorious gun-slinger, announces his arrival.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTQ0NDcyNjg0MV5BMl5BanBnXkFtZTgwMzk4NTA4MTE@._V1_SX300.jpg",
    imdb: { id: "tt2557490", rating: 6.1, votes: 126592 },
    tomato: {
      meter: 33,
      image: "rotten",
      rating: 4.9,
      reviews: 188,
      fresh: 62,
      consensus:
        "While it offers a few laughs and boasts a talented cast, Seth MacFarlane's overlong, aimless A Million Ways to Die in the West is a disappointingly scattershot affair.",
      userMeter: 40,
      userRating: 3,
      userReviews: 62945
    },
    metacritic: 44,
    awards: { wins: 0, nominations: 6, text: "6 nominations." },
    type: "movie"
  },
  {
    title: "Wild Wild West",
    year: 1999,
    rated: "PG-13",
    runtime: 106,
    countries: ["USA"],
    genres: ["Action", "Western", "Comedy"],
    director: "Barry Sonnenfeld",
    writers: [
      "Jim Thomas",
      "John Thomas",
      "S.S. Wilson",
      "Brent Maddock",
      "Jeffrey Price",
      "Peter S. Seaman"
    ],
    actors: ["Will Smith", "Kevin Kline", "Kenneth Branagh", "Salma Hayek"],
    plot:
      "The two best hired guns in the West must save President Grant from the clutches of a nineteenth-century inventor-villain.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BNDI5NDk5MjgxMl5BMl5BanBnXkFtZTcwNjI1MTUyMQ@@._V1_SX300.jpg",
    imdb: { id: "tt0120891", rating: 4.8, votes: 124558 },
    tomato: {
      meter: 17,
      image: "rotten",
      rating: 4.1,
      reviews: 130,
      fresh: 22,
      consensus:
        "Bombastic, manic, and largely laugh-free, Wild Wild West is a bizarre misfire in which greater care was lavished upon the special effects than on the script.",
      userMeter: 28,
      userRating: 2.7,
      userReviews: 463740
    },
    metacritic: 38,
    awards: {
      wins: 10,
      nominations: 11,
      text: "10 wins \u0026 11 nominations."
    },
    type: "movie"
  }
];

export default Movies;
