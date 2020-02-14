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
  },
  {
    title: "West Side Story",
    year: 1961,
    rated: "UNRATED",
    runtime: 152,
    countries: ["USA"],
    genres: ["Crime", "Drama", "Musical"],
    director: "Jerome Robbins, Robert Wise",
    writers: ["Ernest Lehman", "Arthur Laurents", "Jerome Robbins"],
    actors: ["Natalie Wood", "Richard Beymer", "Russ Tamblyn", "Rita Moreno"],
    plot:
      "Two youngsters from rival New York City gangs fall in love, but tensions between their respective friends build toward tragedy.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTM0NDAxOTI5MF5BMl5BanBnXkFtZTcwNjI4Mjg3NA@@._V1_SX300.jpg",
    imdb: { id: "tt0055614", rating: 7.6, votes: 67824 },
    awards: {
      wins: 18,
      nominations: 11,
      text: "Won 10 Oscars. Another 18 wins \u0026 11 nominations."
    },
    type: "movie"
  },
  {
    title: "Slow West",
    year: 2015,
    rated: "R",
    runtime: 84,
    countries: ["UK", "New Zealand"],
    genres: ["Action", "Thriller", "Western"],
    director: "John Maclean",
    writers: ["John Maclean"],
    actors: [
      "Kodi Smit-McPhee",
      "Michael Fassbender",
      "Ben Mendelsohn",
      "Aorere Paki"
    ],
    plot:
      "A young Scottish man travels across America in pursuit of the woman he loves, attracting the attention of an outlaw who is willing to serve as a guide.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BNTYxNDA5ODk5NF5BMl5BanBnXkFtZTgwNzMwMzIwNTE@._V1_SX300.jpg",
    imdb: { id: "tt3205376", rating: 7, votes: 19101 },
    tomato: {
      meter: 92,
      image: "certified",
      rating: 7.5,
      reviews: 115,
      fresh: 106,
      consensus:
        "Slow West serves as an impressive calling card for first-time writer-director John M. Maclean -- and offers an inventive treat for fans of the Western.",
      userMeter: 75,
      userRating: 3.7,
      userReviews: 9850
    },
    metacritic: 72,
    awards: { wins: 2, nominations: 9, text: "2 wins \u0026 9 nominations." },
    type: "movie"
  },
  {
    title: "An American Tail: Fievel Goes West",
    year: 1991,
    rated: "G",
    runtime: 75,
    countries: ["USA"],
    genres: ["Animation", "Adventure", "Family"],
    director: "Phil Nibbelink, Simon Wells",
    writers: ["Flint Dille", "Charles Swenson", "David Kirschner"],
    actors: [
      "Phillip Glasser",
      "James Stewart",
      "Erica Yohn",
      "Cathy Cavadini"
    ],
    plot:
      "A family of Emigre mice decide to move out to the west, unaware that they are falling into a trap perpetrated by a smooth talking cat.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTYzODMxNTUyNF5BMl5BanBnXkFtZTcwMTAwMzQyMQ@@._V1_SX300.jpg",
    imdb: { id: "tt0101329", rating: 6.4, votes: 16013 },
    awards: { wins: 0, nominations: 0, text: "" },
    type: "movie"
  },
  {
    title: "Red Rock West",
    year: 1993,
    rated: "R",
    runtime: 98,
    countries: ["USA"],
    genres: ["Crime", "Drama", "Thriller"],
    director: "John Dahl",
    writers: ["John Dahl", "Rick Dahl"],
    actors: ["Nicolas Cage", "Dennis Hopper", "Lara Flynn Boyle", "J.T. Walsh"],
    plot:
      "When a promised job for Texan Michael fails to materialise in Wyoming, Mike is mistaken by Wayne to be the hitman he hired to kill his unfaithful wife, Suzanne. Mike takes full advantage of...",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTk0Mjg4OTc3OF5BMl5BanBnXkFtZTYwNzgzOTg5._V1_SX300.jpg",
    imdb: { id: "tt0105226", rating: 7, votes: 15007 },
    awards: { wins: 0, nominations: 3, text: "3 nominations." },
    type: "movie"
  },
  {
    title: "How the West Was Won",
    year: 1962,
    rated: "APPROVED",
    runtime: 164,
    countries: ["USA"],
    genres: ["Western"],
    director: "John Ford, Henry Hathaway, George Marshall, Richard Thorpe",
    writers: ["James R. Webb"],
    actors: ["Carroll Baker", "Lee J. Cobb", "Henry Fonda", "Carolyn Jones"],
    plot:
      "A family saga covering several decades of Westward expansion in the nineteenth century--including the Gold Rush, the Civil War, and the building of the railroads.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BNTk2NDk1NjY0MV5BMl5BanBnXkFtZTgwMzkzNTcxMTE@._V1_SX300.jpg",
    imdb: { id: "tt0056085", rating: 7.1, votes: 13640 },
    awards: {
      wins: 7,
      nominations: 5,
      text: "Won 3 Oscars. Another 7 wins \u0026 5 nominations."
    },
    type: "movie"
  },
  {
    title: "Journey to the West",
    year: 2013,
    rated: "PG-13",
    runtime: 110,
    countries: ["China"],
    genres: ["Adventure", "Comedy", "Fantasy"],
    director: "Stephen Chow, Chi-kin Kwok",
    writers: [
      "Stephen Chow",
      "Chi-kin Kwok",
      "Xin Huo",
      "Yun Wang",
      "Chi Keung Fung",
      "Zhengyu Lu",
      "Shing-Cheung Lee",
      "Ivy Kong"
    ],
    actors: ["Qi Shu", "Zhang Wen", "Bo Huang", "Show Luo"],
    plot:
      "Tang Sanzang, an aspiring Buddhist hero tries to protect a village from three demons. He develops complex feelings for Miss Duan, the demon hunter who repeatedly helps him, and finally quests to meet the legendary Monkey King.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTQzMzUxNzk0NV5BMl5BanBnXkFtZTgwMTEwOTE4MDE@._V1_SX300.jpg",
    imdb: { id: "tt2017561", rating: 6.8, votes: 7111 },
    tomato: {
      meter: 93,
      image: "fresh",
      rating: 7.2,
      reviews: 30,
      fresh: 28,
      consensus:
        "As sweet, silly, action-packed and ridiculous as director Steven Chow's best work, Journey to the West serves up dazzling action sequences while playing its disparate elements against each other with thrilling abandon.",
      userMeter: 68,
      userRating: 3.6,
      userReviews: 2198
    },
    metacritic: 68,
    awards: { wins: 1, nominations: 12, text: "1 win \u0026 12 nominations." },
    type: "movie"
  },
  {
    title: "West of Memphis",
    year: 2012,
    rated: "R",
    runtime: 147,
    countries: ["New Zealand", "USA"],
    genres: ["Documentary"],
    director: "Amy Berg",
    writers: ["Amy Berg", "Billy McMillin"],
    actors: [
      "Michael Baden",
      "Jason Baldwin",
      "Holly Ballard",
      "Jamie Clark Ballard"
    ],
    plot:
      "An examination of a failure of justice in the case against the West Memphis Three.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMjIzNDM3NjkzOV5BMl5BanBnXkFtZTcwNjI5Nzg0OA@@._V1_SX300.jpg",
    imdb: { id: "tt2130321", rating: 7.9, votes: 6627 },
    tomato: {
      meter: 95,
      image: "certified",
      rating: 7.9,
      reviews: 111,
      fresh: 106,
      consensus:
        "Both a sobering look at a true crime story and a scathing indictment of the American justice system, West of Memphis is a real-life horror story told with fury and compassion.",
      userMeter: 87,
      userRating: 4.1,
      userReviews: 8482
    },
    metacritic: 80,
    awards: {
      wins: 0,
      nominations: 9,
      text: "Nominated for 1 BAFTA Film Award. Another 9 nominations."
    },
    type: "movie"
  },
  {
    title: "Star Wars: Episode IV - A New Hope",
    year: 1977,
    rated: "PG",
    runtime: 121,
    countries: ["USA"],
    genres: ["Action", "Adventure", "Fantasy"],
    director: "George Lucas",
    writers: ["George Lucas"],
    actors: ["Mark Hamill", "Harrison Ford", "Carrie Fisher", "Peter Cushing"],
    plot:
      "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a wookiee and two droids to save the universe from the Empire's world-destroying battle-station, while also attempting to rescue Princess Leia from the evil Darth Vader.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTU4NTczODkwM15BMl5BanBnXkFtZTcwMzEyMTIyMw@@._V1_SX300.jpg",
    imdb: { id: "tt0076759", rating: 8.7, votes: 822849 },
    tomato: {
      meter: 94,
      image: "certified",
      rating: 8.5,
      reviews: 99,
      fresh: 93,
      consensus:
        "A legendarily expansive and ambitious start to the sci-fi saga, George Lucas opened our eyes to the possibilities of blockbuster filmmaking and things have never been the same.",
      userMeter: 96,
      userRating: 4.1,
      userReviews: 851120
    },
    metacritic: 92,
    awards: {
      wins: 38,
      nominations: 27,
      text: "Won 6 Oscars. Another 38 wins \u0026 27 nominations."
    },
    type: "movie"
  },
  {
    title: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
    rated: "PG",
    runtime: 124,
    countries: ["USA"],
    genres: ["Action", "Adventure", "Fantasy"],
    director: "Irvin Kershner",
    writers: ["Leigh Brackett", "Lawrence Kasdan", "George Lucas"],
    actors: [
      "Mark Hamill",
      "Harrison Ford",
      "Carrie Fisher",
      "Billy Dee Williams"
    ],
    plot:
      "After the rebels have been brutally overpowered by the Empire on their newly established base, Luke Skywalker takes advanced Jedi training with Master Yoda, while his friends are pursued by Darth Vader as part of his plan to capture Luke.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMjE2MzQwMTgxN15BMl5BanBnXkFtZTcwMDQzNjk2OQ@@._V1_SX300.jpg",
    imdb: { id: "tt0080684", rating: 8.8, votes: 739949 },
    tomato: {
      meter: 94,
      image: "certified",
      rating: 8.9,
      reviews: 87,
      fresh: 82,
      consensus:
        "Dark, sinister, but ultimately even more involving than A New Hope, The Empire Strikes Back defies viewer expectations and takes the series to heightened emotional levels.",
      userMeter: 97,
      userRating: 4.1,
      userReviews: 1045537
    },
    metacritic: 79,
    awards: {
      wins: 15,
      nominations: 17,
      text: "Won 1 Oscar. Another 15 wins \u0026 17 nominations."
    },
    type: "movie"
  },
  {
    title: "Star Wars: Episode VI - Return of the Jedi",
    year: 1983,
    rated: "PG",
    runtime: 131,
    countries: ["USA"],
    genres: ["Action", "Adventure", "Fantasy"],
    director: "Richard Marquand",
    writers: ["Lawrence Kasdan", "George Lucas", "George Lucas"],
    actors: [
      "Mark Hamill",
      "Harrison Ford",
      "Carrie Fisher",
      "Billy Dee Williams"
    ],
    plot:
      "After rescuing Han Solo from the palace of Jabba the Hutt, the rebels attempt to destroy the second Death Star, while Luke struggles to make Vader return from the dark side of the Force.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTQ0MzI1NjYwOF5BMl5BanBnXkFtZTgwODU3NDU2MTE@._V1._CR93,97,1209,1861_SX89_AL_.jpg_V1_SX300.jpg",
    imdb: { id: "tt0086190", rating: 8.4, votes: 623252 },
    tomato: {
      meter: 80,
      image: "certified",
      rating: 7.2,
      reviews: 84,
      fresh: 67,
      consensus:
        "Though failing to reach the cinematic heights of its predecessors, Return of the Jedi remains an entertaining sci-fi adventure and a fitting end to the classic trilogy.",
      userMeter: 94,
      userRating: 4,
      userReviews: 1003937
    },
    metacritic: 52,
    awards: {
      wins: 15,
      nominations: 15,
      text: "Nominated for 4 Oscars. Another 15 wins \u0026 15 nominations."
    },
    type: "movie"
  },
  {
    title: "Star Wars: Episode I - The Phantom Menace",
    year: 1999,
    rated: "PG",
    runtime: 136,
    countries: ["USA"],
    genres: ["Action", "Adventure", "Fantasy"],
    director: "George Lucas",
    writers: ["George Lucas"],
    actors: ["Liam Neeson", "Ewan McGregor", "Natalie Portman", "Jake Lloyd"],
    plot:
      "Two Jedi Knights escape a hostile blockade to find allies and come across a young boy who may bring balance to the Force, but the long dormant Sith resurface to reclaim their old glory.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTQ4NjEwNDA2Nl5BMl5BanBnXkFtZTcwNDUyNDQzNw@@._V1_SX300.jpg",
    imdb: { id: "tt0120915", rating: 6.5, votes: 494267 },
    tomato: null,
    metacritic: 51,
    awards: {
      wins: 17,
      nominations: 59,
      text: "Nominated for 3 Oscars. Another 17 wins \u0026 59 nominations."
    },
    type: "movie"
  },
  {
    title: "Star Wars: Episode III - Revenge of the Sith",
    year: 2005,
    rated: "PG-13",
    runtime: 140,
    countries: ["USA"],
    genres: ["Action", "Adventure", "Fantasy"],
    director: "George Lucas",
    writers: ["George Lucas"],
    actors: [
      "Ewan McGregor",
      "Natalie Portman",
      "Hayden Christensen",
      "Ian McDiarmid"
    ],
    plot:
      "Three years after the onset of the Clone Wars; the noble Jedi Knights are spread out across the galaxy leading a massive clone army in the war against the Separatists. After Chancellor ...",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_SX300.jpg",
    imdb: { id: "tt0121766", rating: 7.6, votes: 483613 },
    tomato: {
      meter: 79,
      image: "certified",
      rating: 7.3,
      reviews: 282,
      fresh: 222,
      consensus:
        "With Episode III: Revenge of the Sith, George Lucas brings his second Star Wars trilogy to a suitably thrilling and often poignant -- if still a bit uneven -- conclusion.",
      userMeter: 65,
      userRating: 3.1,
      userReviews: 33674396
    },
    metacritic: 68,
    awards: {
      wins: 21,
      nominations: 49,
      text: "Nominated for 1 Oscar. Another 21 wins \u0026 49 nominations."
    },
    type: "movie"
  },
  {
    title: "Star Trek",
    year: 2009,
    rated: "PG-13",
    runtime: 127,
    countries: ["USA", "Germany"],
    genres: ["Action", "Adventure", "Sci-Fi"],
    director: "J.J. Abrams",
    writers: ["Roberto Orci", "Alex Kurtzman", "Gene Roddenberry"],
    actors: ["Chris Pine", "Zachary Quinto", "Leonard Nimoy", "Eric Bana"],
    plot:
      "The brash James T. Kirk tries to live up to his father's legacy with Mr. Spock keeping him in check as a vengeful, time-traveling Romulan creates black holes to destroy the Federation one planet at a time.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMjE5NDQ5OTE4Ml5BMl5BanBnXkFtZTcwOTE3NDIzMw@@._V1_SX300.jpg",
    imdb: { id: "tt0796366", rating: 8, votes: 483229 },
    tomato: {
      meter: 95,
      image: "certified",
      rating: 8.2,
      reviews: 329,
      fresh: 312,
      consensus:
        "Star Trek reignites a classic franchise with action, humor, a strong story, and brilliant visuals, and will please traditional Trekkies and new fans alike.",
      userMeter: 91,
      userRating: 4.1,
      userReviews: 743375
    },
    metacritic: 82,
    awards: {
      wins: 22,
      nominations: 77,
      text: "Won 1 Oscar. Another 22 wins \u0026 77 nominations."
    },
    type: "movie"
  },
  {
    title: "Star Wars: Episode II - Attack of the Clones",
    year: 2002,
    rated: "PG",
    runtime: 142,
    countries: ["USA"],
    genres: ["Action", "Adventure", "Fantasy"],
    director: "George Lucas",
    writers: ["George Lucas", "Jonathan Hales", "George Lucas"],
    actors: [
      "Ewan McGregor",
      "Natalie Portman",
      "Hayden Christensen",
      "Christopher Lee"
    ],
    plot:
      "Ten years after initially meeting, Anakin Skywalker shares a forbidden romance with Padmé, while Obi-Wan investigates an assassination attempt on the Senator and discovers a secret clone army crafted for the Jedi.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTY5MjI5NTIwNl5BMl5BanBnXkFtZTYwMTM1Njg2._V1_SX300.jpg",
    imdb: { id: "tt0121765", rating: 6.7, votes: 425728 },
    tomato: {
      meter: 66,
      image: "fresh",
      rating: 6.7,
      reviews: 242,
      fresh: 159,
      consensus:
        "Star Wars Episode II: Attack of the Clones benefits from an increased emphasis on thrilling action, although they're once again undercut by ponderous plot points and underdeveloped characters.",
      userMeter: 58,
      userRating: 3.3,
      userReviews: 844634
    },
    metacritic: 54,
    awards: {
      wins: 13,
      nominations: 47,
      text: "Nominated for 1 Oscar. Another 13 wins \u0026 47 nominations."
    },
    type: "movie"
  },
  {
    title: "Star Trek Into Darkness",
    year: 2013,
    rated: "PG-13",
    runtime: 132,
    countries: ["USA"],
    genres: ["Action", "Adventure", "Sci-Fi"],
    director: "J.J. Abrams",
    writers: [
      "Roberto Orci",
      "Alex Kurtzman",
      "Damon Lindelof",
      "Gene Roddenberry"
    ],
    actors: ["Chris Pine", "Zachary Quinto", "Zoe Saldana", "Karl Urban"],
    plot:
      "After the crew of the Enterprise find an unstoppable force of terror from within their own organization, Captain Kirk leads a manhunt to a war-zone world to capture a one-man weapon of mass destruction.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTk2NzczOTgxNF5BMl5BanBnXkFtZTcwODQ5ODczOQ@@._V1_SX300.jpg",
    imdb: { id: "tt1408101", rating: 7.8, votes: 370638 },
    tomato: {
      meter: 87,
      image: "certified",
      rating: 7.6,
      reviews: 250,
      fresh: 217,
      consensus:
        "Visually spectacular and suitably action packed, Star Trek Into Darkness is a rock-solid installment in the venerable sci-fi franchise, even if it's not as fresh as its predecessor.",
      userMeter: 90,
      userRating: 4.2,
      userReviews: 309531
    },
    metacritic: 72,
    awards: {
      wins: 6,
      nominations: 44,
      text: "Nominated for 1 Oscar. Another 6 wins \u0026 44 nominations."
    },
    type: "movie"
  },
  {
    title: "Star Trek: First Contact",
    year: 1996,
    rated: "PG-13",
    runtime: 111,
    countries: ["USA"],
    genres: ["Action", "Adventure", "Sci-Fi"],
    director: "Jonathan Frakes",
    writers: [
      "Gene Roddenberry",
      "Rick Berman",
      "Brannon Braga",
      "Ronald D. Moore",
      "Brannon Braga",
      "Ronald D. Moore"
    ],
    actors: [
      "Patrick Stewart",
      "Jonathan Frakes",
      "Brent Spiner",
      "LeVar Burton"
    ],
    plot:
      "The Borg go back in time intent on preventing Earth's first contact with an alien species. Captain Picard and his crew pursue them to ensure that Zefram Cochrane makes his maiden flight reaching warp speed.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTg4OTYwODY4MF5BMl5BanBnXkFtZTgwNTg2NjIyMDE@._V1_SX300.jpg",
    imdb: { id: "tt0117731", rating: 7.6, votes: 94153 },
    tomato: {
      meter: 93,
      image: "certified",
      rating: 7.4,
      reviews: 55,
      fresh: 51,
      consensus:
        "While fans of the series will surely appreciate it, First Contact is exciting, engaging, and visually appealing enough to entertain Star Trek novices.",
      userMeter: 89,
      userRating: 3.6,
      userReviews: 99646
    },
    metacritic: 71,
    awards: {
      wins: 8,
      nominations: 19,
      text: "Nominated for 1 Oscar. Another 8 wins \u0026 19 nominations."
    },
    type: "movie"
  },
  {
    title: "Star Trek II: The Wrath of Khan",
    year: 1982,
    rated: "PG",
    runtime: 113,
    countries: ["USA"],
    genres: ["Action", "Adventure", "Drama"],
    director: "Nicholas Meyer",
    writers: [
      "Gene Roddenberry",
      "Harve Bennett",
      "Jack B. Sowards",
      "Jack B. Sowards"
    ],
    actors: [
      "William Shatner",
      "Leonard Nimoy",
      "DeForest Kelley",
      "James Doohan"
    ],
    plot:
      "With the assistance of the Enterprise crew, Admiral Kirk must stop an old nemesis, Khan Noonien Singh, from using the life-generating Genesis Device as the ultimate weapon.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTcwNjc5NjA4N15BMl5BanBnXkFtZTcwNDk5MzI4OA@@._V1_SX300.jpg",
    imdb: { id: "tt0084726", rating: 7.7, votes: 86687 },
    tomato: {
      meter: 88,
      image: "certified",
      rating: 8,
      reviews: 49,
      fresh: 43,
      consensus:
        "Considered by many fans to be the best of the Star Trek movies, Khan features a strong plot, increased tension, and a sharp supporting performance from Ricardo Montalban.",
      userMeter: 90,
      userRating: 3.8,
      userReviews: 84279
    },
    metacritic: 71,
    awards: { wins: 2, nominations: 9, text: "2 wins \u0026 9 nominations." },
    type: "movie"
  },
  {
    title:
      "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    year: 1964,
    rated: "PG",
    runtime: 95,
    countries: ["USA", "UK"],
    genres: ["Comedy"],
    director: "Stanley Kubrick",
    writers: [
      "Stanley Kubrick",
      "Terry Southern",
      "Peter George",
      "Peter George"
    ],
    actors: [
      "Peter Sellers",
      "George C. Scott",
      "Sterling Hayden",
      "Keenan Wynn"
    ],
    plot:
      "An insane general triggers a path to nuclear holocaust that a war room full of politicians and generals frantically try to stop.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTU2ODM2NTkxNF5BMl5BanBnXkFtZTcwOTMwMzU3Mg@@._V1_SX300.jpg",
    imdb: { id: "tt0057012", rating: 8.5, votes: 323857 },
    tomato: {
      meter: 99,
      image: "certified",
      rating: 9,
      reviews: 68,
      fresh: 67,
      consensus:
        "Stanley Kubrick's brilliant Cold War satire remains as funny and razor-sharp today as it was in 1964.",
      userMeter: 94,
      userRating: 4.2,
      userReviews: 206480
    },
    metacritic: 96,
    awards: {
      wins: 13,
      nominations: 6,
      text: "Nominated for 4 Oscars. Another 13 wins \u0026 6 nominations."
    },
    type: "movie"
  },
  {
    title: "Love Actually",
    year: 2003,
    rated: "R",
    runtime: 135,
    countries: ["UK", "USA", "France"],
    genres: ["Comedy", "Drama", "Romance"],
    director: "Richard Curtis",
    writers: ["Richard Curtis"],
    actors: ["Bill Nighy", "Gregor Fisher", "Rory MacGregor", "Colin Firth"],
    plot:
      "Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_SX300.jpg",
    imdb: { id: "tt0314331", rating: 7.7, votes: 306036 },
    tomato: {
      meter: 63,
      image: "fresh",
      rating: 6.4,
      reviews: 192,
      fresh: 120,
      consensus:
        "A sugary tale overstuffed with too many stories. Still, the cast charms.",
      userMeter: 72,
      userRating: 3.1,
      userReviews: 31625241
    },
    metacritic: 55,
    awards: {
      wins: 10,
      nominations: 24,
      text:
        "Nominated for 2 Golden Globes. Another 10 wins \u0026 24 nominations."
    },
    type: "movie"
  },
  {
    title: "Shakespeare in Love",
    year: 1998,
    rated: "R",
    runtime: 123,
    countries: ["USA"],
    genres: ["Comedy", "Drama", "Romance"],
    director: "John Madden",
    writers: ["Marc Norman", "Tom Stoppard"],
    actors: [
      "Geoffrey Rush",
      "Tom Wilkinson",
      "Steven O'Donnell",
      "Tim McMullan"
    ],
    plot:
      "A young Shakespeare, out of ideas and short of cash, meets his ideal woman and is inspired to write one of his most famous plays.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTc0ODI2NDk2OV5BMl5BanBnXkFtZTcwNTIzNDQ4OQ@@._V1_SX300.jpg",
    imdb: { id: "tt0138097", rating: 7.2, votes: 167371 },
    tomato: {
      meter: 92,
      image: "certified",
      rating: 8.3,
      reviews: 125,
      fresh: 115,
      consensus:
        "Endlessly witty, visually rapturous, and sweetly romantic, Shakespeare in Love is a delightful romantic comedy that succeeds on nearly every level.",
      userMeter: 80,
      userRating: 3.4,
      userReviews: 225871
    },
    metacritic: 87,
    awards: {
      wins: 55,
      nominations: 85,
      text: "Won 7 Oscars. Another 55 wins \u0026 85 nominations."
    },
    type: "movie"
  },
  {
    title: "I Love You, Man",
    year: 2009,
    rated: "R",
    runtime: 105,
    countries: ["USA"],
    genres: ["Comedy", "Romance"],
    director: "John Hamburg",
    writers: ["John Hamburg", "Larry Levin", "Larry Levin"],
    actors: ["Paul Rudd", "Rashida Jones", "Sarah Burns", "Greg Levine"],
    plot:
      "Friendless Peter Klaven goes on a series of man-dates to find a Best Man for his wedding. But, when his insta-bond with his new B.F.F. puts a strain on his relationship with his fiancée, can the trio learn to live happily ever after?",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTU4MjI5NTEyNV5BMl5BanBnXkFtZTcwNjQ1NTMzMg@@._V1_SX300.jpg",
    imdb: { id: "tt1155056", rating: 7.1, votes: 160540 },
    tomato: {
      meter: 84,
      image: "certified",
      rating: 6.9,
      reviews: 200,
      fresh: 167,
      consensus:
        "I Love You, Man makes the most of its simple premise due to the heartfelt and hilarious performances of Paul Rudd and Jason Segel.",
      userMeter: 74,
      userRating: 2.7,
      userReviews: 1550369
    },
    metacritic: 70,
    awards: { wins: 1, nominations: 8, text: "1 win \u0026 8 nominations." },
    type: "movie"
  },
  {
    title: "P.S. I Love You",
    year: 2007,
    rated: "PG-13",
    runtime: 126,
    countries: ["USA"],
    genres: ["Drama", "Romance"],
    director: "Richard LaGravenese",
    writers: ["Richard LaGravenese", "Steven Rogers", "Cecelia Ahern"],
    actors: ["Hilary Swank", "Gerard Butler", "Lisa Kudrow", "Gina Gershon"],
    plot:
      "A young widow discovers that her late husband has left her 10 messages intended to help ease her pain and start a new life.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BNTg2MDg4MjI5NV5BMl5BanBnXkFtZTcwMzQ0MDczMw@@._V1_SX300.jpg",
    imdb: { id: "tt0431308", rating: 7.1, votes: 158007 },
    tomato: null,
    metacritic: 39,
    awards: { wins: 2, nominations: 4, text: "2 wins \u0026 4 nominations." },
    type: "movie"
  },
  {
    title: "Love \u0026 Other Drugs",
    year: 2010,
    rated: "R",
    runtime: 112,
    countries: ["USA"],
    genres: ["Comedy", "Drama", "Romance"],
    director: "Edward Zwick",
    writers: [
      "Charles Randolph",
      "Edward Zwick",
      "Marshall Herskovitz",
      "Jamie Reidy"
    ],
    actors: ["Jake Gyllenhaal", "Anne Hathaway", "Oliver Platt", "Hank Azaria"],
    plot:
      "A young woman suffering from Parkinson's befriends a drug rep working for Pfizer in 1990s Pittsburgh.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTgxOTczODEyMF5BMl5BanBnXkFtZTcwMDc0NDY4Mw@@._V1_SX300.jpg",
    imdb: { id: "tt0758752", rating: 6.7, votes: 134363 },
    tomato: {
      meter: 49,
      image: "rotten",
      rating: 5.8,
      reviews: 160,
      fresh: 78,
      consensus:
        "It's a pleasure to see Hollywood produce a romance this refreshingly adult, but Love and Other Drugs struggles to find a balance between its disparate plot elements.",
      userMeter: 53,
      userRating: 3.3,
      userReviews: 73737
    },
    metacritic: 55,
    awards: {
      wins: 1,
      nominations: 5,
      text: "Nominated for 2 Golden Globes. Another 1 win \u0026 5 nominations."
    },
    type: "movie"
  },
  {
    title: "Punch-Drunk Love",
    year: 2002,
    rated: "R",
    runtime: 95,
    countries: ["USA"],
    genres: ["Comedy", "Drama", "Romance"],
    director: "Paul Thomas Anderson",
    writers: ["Paul Thomas Anderson"],
    actors: ["Adam Sandler", "Jason Andrews", "Don McManus", "Emily Watson"],
    plot:
      "A psychologically troubled novelty supplier is nudged towards a romance with an English woman, all the while being extorted by a phone-sex line run by a crooked mattress salesman, and purchasing stunning amounts of pudding.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BOTcwMDMxMjg2NF5BMl5BanBnXkFtZTYwNzg0MDc3._V1_SX300.jpg",
    imdb: { id: "tt0272338", rating: 7.3, votes: 104292 },
    tomato: {
      meter: 79,
      image: "certified",
      rating: 7.4,
      reviews: 184,
      fresh: 145,
      consensus:
        "Odd, touching, and unique, Punch-Drunk Love is also delightfully funny, utilizing Adam Sandler's comic persona to explore the life of a lonely guy who finds love.",
      userMeter: 77,
      userRating: 3.3,
      userReviews: 138756
    },
    metacritic: 78,
    awards: {
      wins: 14,
      nominations: 28,
      text:
        "Nominated for 1 Golden Globe. Another 14 wins \u0026 28 nominations."
    },
    type: "movie"
  },
  {
    title: "From Paris with Love",
    year: 2010,
    rated: "R",
    runtime: 92,
    countries: ["France"],
    genres: ["Action", "Thriller"],
    director: "Pierre Morel",
    writers: ["Adi Hasak", "Luc Besson"],
    actors: [
      "John Travolta",
      "Jonathan Rhys Meyers",
      "Kasia Smutniak",
      "Richard Durden"
    ],
    plot:
      "In Paris, a young employee in the office of the US Ambassador hooks up with an American spy looking to stop a terrorist attack in the city.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BNDUyMzExOTAyM15BMl5BanBnXkFtZTcwMTU0NjAyMw@@._V1_SX300.jpg",
    imdb: { id: "tt1179034", rating: 6.5, votes: 94446 },
    tomato: {
      meter: 37,
      image: "rotten",
      rating: 4.7,
      reviews: 154,
      fresh: 57,
      consensus:
        "Thought not without its charms -- chief among them John Travolta's endearingly over-the-top performance -- From Paris with Love is too muddled and disjointed to satisfy.",
      userMeter: 54,
      userRating: 3.3,
      userReviews: 155501
    },
    metacritic: 42,
    awards: { wins: 0, nominations: 0, text: "" },
    type: "movie"
  },
  {
    title: "From Russia with Love",
    year: 1963,
    rated: "APPROVED",
    runtime: 115,
    countries: ["UK", "USA"],
    genres: ["Action", "Adventure", "Thriller"],
    director: "Terence Young",
    writers: ["Richard Maibaum", "Johanna Harwood"],
    actors: [
      "Sean Connery",
      "Daniela Bianchi",
      "Pedro Armendáriz",
      "Lotte Lenya"
    ],
    plot:
      "James Bond willingly falls into an assassination ploy involving a naive Russian beauty in order to retrieve a Soviet encryption device that was stolen by SPECTRE.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTQxNTIzMTExN15BMl5BanBnXkFtZTcwODI4MDgzNA@@._V1_SX300.jpg",
    imdb: { id: "tt0057076", rating: 7.5, votes: 84828 },
    awards: {
      wins: 2,
      nominations: 5,
      text: "Nominated for 1 Golden Globe. Another 2 wins \u0026 5 nominations."
    },
    type: "movie"
  },
  {
    title: "I Love You Phillip Morris",
    year: 2009,
    rated: "R",
    runtime: 98,
    countries: ["France", "USA"],
    genres: ["Biography", "Comedy", "Crime"],
    director: "Glenn Ficarra, John Requa",
    writers: ["John Requa", "Glenn Ficarra", "Steve McVicker"],
    actors: ["Jim Carrey", "Ewan McGregor", "Leslie Mann", "Rodrigo Santoro"],
    plot:
      "A cop turns con man once he comes out of the closet. Once imprisoned, he meets the second love of his life, whom he'll stop at nothing to be with.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BNDkzMjkwNjc5NV5BMl5BanBnXkFtZTcwNzEyOTk5Mw@@._V1_SX300.jpg",
    imdb: { id: "tt1045772", rating: 6.7, votes: 73578 },
    tomato: {
      meter: 72,
      image: "certified",
      rating: 6.6,
      reviews: 152,
      fresh: 109,
      consensus:
        "This fact-based romantic comedy has its flaws, but they're mostly overcome by its consistently sweet, funny tone and one of the best performances of Jim Carrey's career.",
      userMeter: 61,
      userRating: 3.3,
      userReviews: 88181
    },
    metacritic: 65,
    awards: { wins: 5, nominations: 8, text: "5 wins \u0026 8 nominations." },
    type: "movie"
  },
  {
    title: "2001: A Space Odyssey",
    year: 1968,
    rated: "G",
    runtime: 149,
    countries: ["USA", "UK"],
    genres: ["Mystery", "Sci-Fi"],
    director: "Stanley Kubrick",
    writers: ["Stanley Kubrick", "Arthur C. Clarke"],
    actors: [
      "Keir Dullea",
      "Gary Lockwood",
      "William Sylvester",
      "Daniel Richter"
    ],
    plot:
      "Humanity finds a mysterious, obviously artificial object buried beneath the Lunar surface and, with the intelligent computer H.A.L. 9000, sets off on a quest.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BNDYyMDgxNDQ5Nl5BMl5BanBnXkFtZTcwMjc1ODg3OA@@._V1_SX300.jpg",
    imdb: { id: "tt0062622", rating: 8.3, votes: 396824 },
    tomato: {
      meter: 96,
      image: "certified",
      rating: 9.2,
      reviews: 70,
      fresh: 67,
      consensus:
        "One of the most influential of all sci-fi films -- and one of the most controversial -- Stanley Kubrick's 2001 is a delicate, poetic meditation on the ingenuity -- and folly -- of mankind.",
      userMeter: 89,
      userRating: 3.8,
      userReviews: 294447
    },
    metacritic: 86,
    awards: {
      wins: 13,
      nominations: 7,
      text: "Won 1 Oscar. Another 13 wins \u0026 7 nominations."
    },
    type: "movie"
  },
  {
    title: "Office Space",
    year: 1999,
    rated: "R",
    runtime: 89,
    countries: ["USA"],
    genres: ["Comedy"],
    director: "Mike Judge",
    writers: ["Mike Judge", "Mike Judge"],
    actors: [
      "Ron Livingston",
      "Jennifer Aniston",
      "David Herman",
      "Ajay Naidu"
    ],
    plot:
      "Three company workers who hate their jobs decide to rebel against their greedy boss.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BOTA5MzQ3MzI1NV5BMl5BanBnXkFtZTgwNTcxNTYxMTE@._V1_SX300.jpg",
    imdb: { id: "tt0151804", rating: 7.8, votes: 192080 },
    tomato: {
      meter: 79,
      image: "certified",
      rating: 6.8,
      reviews: 95,
      fresh: 75,
      consensus:
        "Mike Judge lampoons the office grind with its inspired mix of sharp dialogue and witty one-liners.",
      userMeter: 93,
      userRating: 4,
      userReviews: 324362
    },
    metacritic: 68,
    awards: { wins: 0, nominations: 2, text: "2 nominations." },
    type: "movie"
  },
  {
    title: "Zathura: A Space Adventure",
    year: 2005,
    rated: "PG",
    runtime: 101,
    countries: ["USA"],
    genres: ["Action", "Adventure", "Comedy"],
    director: "Jon Favreau",
    writers: ["Chris Van Allsburg", "David Koepp", "John Kamps"],
    actors: ["Jonah Bobo", "Josh Hutcherson", "Dax Shepard", "Kristen Stewart"],
    plot:
      "Two young brothers are drawn into an intergalactic adventure when their house is hurled through the depths of space by the magical board game they are playing.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMjEyOTQ2ODg4OV5BMl5BanBnXkFtZTcwMjk2ODUzMQ@@._V1_SX300.jpg",
    imdb: { id: "tt0406375", rating: 6.1, votes: 62971 },
    tomato: {
      meter: 75,
      image: "certified",
      rating: 6.6,
      reviews: 158,
      fresh: 119,
      consensus:
        "Dazzling special effects for the kids + well-crafted storytelling for the 'rents = cinematic satisfaction for the whole family.",
      userMeter: 51,
      userRating: 3,
      userReviews: 280429
    },
    metacritic: 67,
    awards: { wins: 2, nominations: 3, text: "2 wins \u0026 3 nominations." },
    type: "movie"
  },
  {
    title: "Space Cowboys",
    year: 2000,
    rated: "PG-13",
    runtime: 130,
    countries: ["USA", "Australia"],
    genres: ["Action", "Adventure", "Thriller"],
    director: "Clint Eastwood",
    writers: ["Ken Kaufman", "Howard Klausner"],
    actors: [
      "Clint Eastwood",
      "Tommy Lee Jones",
      "Donald Sutherland",
      "James Garner"
    ],
    plot:
      "When a retired engineer is called upon to rescue a failing satellite, he insists that his equally old teammates accompany him into space.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTk4NzAwOTkwMF5BMl5BanBnXkFtZTYwMDM3MTM3._V1_SX300.jpg",
    imdb: { id: "tt0186566", rating: 6.4, votes: 57735 },
    tomato: {
      meter: 78,
      image: "certified",
      rating: 6.7,
      reviews: 119,
      fresh: 93,
      consensus:
        "While the plot is overly cliched, the suberb acting by the stars (especially the tense interactions between Clint Eastwood and Tommy Lee Jones) and the spectacular special effects make this a movie worth seeing.",
      userMeter: 53,
      userRating: 3,
      userReviews: 72556
    },
    metacritic: 73,
    awards: {
      wins: 4,
      nominations: 6,
      text: "Nominated for 1 Oscar. Another 4 wins \u0026 6 nominations."
    },
    type: "movie"
  },
  {
    title: "Lost in Space",
    year: 1998,
    rated: "PG-13",
    runtime: 130,
    countries: ["USA"],
    genres: ["Action", "Adventure", "Family"],
    director: "Stephen Hopkins",
    writers: ["Irwin Allen", "Akiva Goldsman"],
    actors: ["William Hurt", "Mimi Rogers", "Heather Graham", "Lacey Chabert"],
    plot:
      "The Robinson family was going into space to fight for a chance for humanity. Now they are fighting to live long enough to find a way home.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTkwNzEyNTgyN15BMl5BanBnXkFtZTcwODk4NTU0Mg@@._V1_SX300.jpg",
    imdb: { id: "tt0120738", rating: 5.1, votes: 56757 },
    tomato: {
      meter: 27,
      image: "rotten",
      rating: 4.7,
      reviews: 84,
      fresh: 23,
      consensus:
        "Clumsily directed and missing most of the TV series' campy charm, Lost in Space sadly lives down to its title.",
      userMeter: 24,
      userRating: 2.5,
      userReviews: 173585
    },
    metacritic: 42,
    awards: { wins: 1, nominations: 13, text: "1 win \u0026 13 nominations." },
    type: "movie"
  },
  {
    title: "Plan 9 from Outer Space",
    year: 1959,
    rated: "UNRATED",
    runtime: 79,
    countries: ["USA"],
    genres: ["Horror", "Sci-Fi"],
    director: "Edward D. Wood Jr.",
    writers: ["Edward D. Wood Jr."],
    actors: ["Gregory Walcott", "Mona McKinnon", "Duke Moore", "Tom Keene"],
    plot:
      "Aliens resurrect dead humans as zombies and vampires to stop humanity from creating the Solaranite (a sort of sun-driven bomb).",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMzUzMzA0NDE3MF5BMl5BanBnXkFtZTgwMzg1Mjc1MDE@._V1_SX300.jpg",
    imdb: { id: "tt0052077", rating: 4, votes: 29171 },
    awards: { wins: 0, nominations: 0, text: "" },
    type: "movie"
  },
  {
    title: "Muppets from Space",
    year: 1999,
    rated: "G",
    runtime: 87,
    countries: ["USA"],
    genres: ["Adventure", "Comedy", "Family"],
    director: "Tim Hill",
    writers: ["Jerry Juhl", "Joey Mazzarino", "Ken Kaufman"],
    actors: ["Dave Goelz", "Steve Whitmire", "Bill Barretta", "Jerry Nelson"],
    plot:
      "Gonzo is contacted by his alien family through his breakfast cereal. He is kidnapped and it's up to Kermit and the gang to rescue Gonzo and help reunite him with his long-lost family.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTgwNDE0NDM1M15BMl5BanBnXkFtZTcwNDg4MzkxMQ@@._V1_SX300.jpg",
    imdb: { id: "tt0158811", rating: 6.2, votes: 14105 },
    awards: { wins: 0, nominations: 1, text: "1 nomination." },
    type: "movie"
  },
  {
    title: "Turks in Space",
    year: 2006,
    rated: null,
    runtime: 110,
    countries: ["Turkey"],
    genres: ["Action", "Comedy", "Sci-Fi"],
    director: "Kartal Tibet",
    writers: ["Murat Boyacioglu"],
    actors: ["Cüneyt Arkin", "Haldun Boysan", "Berda Ceyhan", "Veysel Diker"],
    plot: "A family of Turks try to adapt to life in a new solar system.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTYwOTMwODIxNF5BMl5BanBnXkFtZTcwMjc0NzA0MQ@@._V1_SX300.jpg",
    imdb: { id: "tt0808240", rating: 1.9, votes: 12638 },
    awards: { wins: 0, nominations: 0, text: "" },
    type: "movie"
  },
  {
    title: "2001: A Space Travesty",
    year: 2000,
    rated: "R",
    runtime: 99,
    countries: ["Canada", "Germany"],
    genres: ["Comedy", "Sci-Fi"],
    director: "Allan A. Goldstein",
    writers: ["Vince Di Clemente", "Alan Shearman"],
    actors: ["Leslie Nielsen", "Ophélie Winter", "Ezio Greggio", "Peter Egan"],
    plot:
      "Leslie Nielsen once again plays a bumbling detective in the vein of the 'Naked Gun' movies, but this time as Marshall Richard 'Dick' Dix. When odd reports are received through official ...",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTA5NTk1NTc3MjJeQTJeQWpwZ15BbWU3MDkxNTMyMjE@._V1_SX300.jpg",
    imdb: { id: "tt0157262", rating: 3.3, votes: 9321 },
    awards: { wins: 0, nominations: 0, text: "" },
    type: "movie"
  },
  {
    title: "Space Chimps",
    year: 2008,
    rated: "G",
    runtime: 81,
    countries: ["USA"],
    genres: ["Animation", "Adventure", "Comedy"],
    director: "Kirk De Micco",
    writers: [
      "Kirk De Micco",
      "Robert Moreland",
      "Kirk De Micco",
      "Jason Mayland"
    ],
    actors: [
      "Andy Samberg",
      "Cheryl Hines",
      "Jeff Daniels",
      "Patrick Warburton"
    ],
    plot:
      "Ham III, the grandson of the first chimp astronaut, is blasted off into space by an opportunity-seeking senator. Soon, the fun-loving chimp has to get serious about the mission at hand; ...",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BNDU0MDY1OTQzOV5BMl5BanBnXkFtZTcwNzQ3ODI3MQ@@._V1_SX300.jpg",
    imdb: { id: "tt0482603", rating: 4.5, votes: 8561 },
    tomato: {
      meter: 34,
      image: "rotten",
      rating: 4.6,
      reviews: 91,
      fresh: 31,
      consensus:
        "Space Chimps' cheap animation and overabundance of monkey puns feels especially dated in a post-Wall-E world.",
      userMeter: 32,
      userRating: 2.8,
      userReviews: 124232
    },
    metacritic: 36,
    awards: { wins: 0, nominations: 1, text: "1 nomination." },
    type: "movie"
  },
  {
    title: "The Adventures of Tintin",
    year: 2011,
    rated: "PG",
    runtime: 107,
    countries: ["USA", "New Zealand"],
    genres: ["Animation", "Action", "Adventure"],
    director: "Steven Spielberg",
    writers: ["Steven Moffat", "Edgar Wright", "Joe Cornish", "Hergé"],
    actors: ["Jamie Bell", "Andy Serkis", "Daniel Craig", "Nick Frost"],
    plot:
      "Intrepid reporter Tintin and Captain Haddock set off on a treasure hunt for a sunken ship commanded by Haddock's ancestor.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BNDE5MDExNTQ1OF5BMl5BanBnXkFtZTcwMDIxMTM5Ng@@._V1_SX300.jpg",
    imdb: { id: "tt0983193", rating: 7.4, votes: 169875 },
    tomato: {
      meter: 75,
      image: "certified",
      rating: 7,
      reviews: 205,
      fresh: 153,
      consensus:
        "Drawing deep from the classic Raiders of the Lost Ark playbook, Steven Spielberg has crafted another spirited, thrilling adventure in the form of Tintin.",
      userMeter: 74,
      userRating: 3.7,
      userReviews: 76244
    },
    metacritic: 68,
    awards: {
      wins: 22,
      nominations: 58,
      text: "Nominated for 1 Oscar. Another 22 wins \u0026 58 nominations."
    },
    type: "movie"
  },
  {
    title: "The Adventures of Baron Munchausen",
    year: 1988,
    rated: "PG",
    runtime: 126,
    countries: ["UK", "Italy"],
    genres: ["Adventure", "Comedy", "Fantasy"],
    director: "Terry Gilliam",
    writers: ["Charles McKeown", "Terry Gilliam"],
    actors: ["John Neville", "Eric Idle", "Sarah Polley", "Oliver Reed"],
    plot:
      "An account of Baron Munchausen's supposed travels and fantastical experiences with his band of misfits.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTM3OTA5MTU2NF5BMl5BanBnXkFtZTcwOTIzMjk3OA@@._V1_SX300.jpg",
    imdb: { id: "tt0096764", rating: 7.2, votes: 40089 },
    tomato: {
      meter: 92,
      image: "certified",
      rating: 7.3,
      reviews: 51,
      fresh: 47,
      consensus:
        "Bursting with Terry Gilliam's typically imaginative flourishes, this story of a possibly deranged Baron recounting his storied life is a flamboyant and witty visual treat.",
      userMeter: 82,
      userRating: 3.5,
      userReviews: 36148
    },
    metacritic: 69,
    awards: {
      wins: 6,
      nominations: 9,
      text: "Nominated for 4 Oscars. Another 6 wins \u0026 9 nominations."
    },
    type: "movie"
  },
  {
    title: "The Adventures of Robin Hood",
    year: 1938,
    rated: "PG",
    runtime: 102,
    countries: ["USA"],
    genres: ["Action", "Adventure", "Romance"],
    director: "Michael Curtiz, William Keighley",
    writers: ["Norman Reilly Raine", "Seton I. Miller"],
    actors: [
      "Errol Flynn",
      "Olivia de Havilland",
      "Basil Rathbone",
      "Claude Rains"
    ],
    plot:
      "When Prince John and the Norman Lords begin oppressing the Saxon masses in King Richard's absence, a Saxon lord fights back as the outlaw leader of a rebel guerrilla army.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTUxMzE0MjI0MF5BMl5BanBnXkFtZTcwMTQ1OTM2MQ@@._V1_SX300.jpg",
    imdb: { id: "tt0029843", rating: 8, votes: 37543 },
    tomato: {
      meter: 100,
      image: "certified",
      rating: 8.9,
      reviews: 44,
      fresh: 44,
      consensus:
        "Errol Flynn thrills as the legendary title character, and the film embodies the type of imaginative family adventure tailor-made for the silver screen.",
      userMeter: 89,
      userRating: 3.7,
      userReviews: 33282
    },
    metacritic: 97,
    awards: {
      wins: 2,
      nominations: 2,
      text: "Won 3 Oscars. Another 2 wins \u0026 2 nominations."
    },
    type: "movie"
  },
  {
    title: "The Adventures of Priscilla, Queen of the Desert",
    year: 1994,
    rated: "R",
    runtime: 104,
    countries: ["Australia", "UK"],
    genres: ["Comedy", "Music"],
    director: "Stephan Elliott",
    writers: ["Stephan Elliott"],
    actors: [
      "Hugo Weaving",
      "Guy Pearce",
      "Terence Stamp",
      "Rebel Penfold-Russell"
    ],
    plot:
      "Two drag queens and a transsexual travel across the desert to perform their unique style of cabaret.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTc5MDU1NzcyN15BMl5BanBnXkFtZTcwMDA0ODYyNA@@._V1_SX300.jpg",
    imdb: { id: "tt0109045", rating: 7.5, votes: 35048 },
    tomato: {
      meter: 93,
      image: "fresh",
      rating: 7.1,
      reviews: 30,
      fresh: 28,
      consensus:
        "While its premise is ripe for comedy -- and it certainly delivers its fair share of laughs -- Priscilla is also a surprisingly tender and thoughtful road movie with some outstanding performances.",
      userMeter: 88,
      userRating: 3.7,
      userReviews: 44128
    },
    metacritic: 68,
    awards: {
      wins: 9,
      nominations: 16,
      text: "Won 1 Oscar. Another 9 wins \u0026 16 nominations."
    },
    type: "movie"
  },
  {
    title: "Adventures in Babysitting",
    year: 1987,
    rated: "PG-13",
    runtime: 102,
    countries: ["USA"],
    genres: ["Action", "Adventure", "Comedy"],
    director: "Chris Columbus",
    writers: ["David Simkins"],
    actors: ["Elisabeth Shue", "Maia Brewton", "Keith Coogan", "Anthony Rapp"],
    plot:
      'Chris Parker agrees to babysit after her "dread" date stands her up. Expecting a dull evening, Chris settles down with three kids for a night of TV... and boredom. But when her frantic ...',
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTI4NzY3Njg4Nl5BMl5BanBnXkFtZTYwNzM3ODE5._V1_SX300.jpg",
    imdb: { id: "tt0092513", rating: 6.8, votes: 26195 },
    awards: { wins: 2, nominations: 4, text: "2 wins \u0026 4 nominations." },
    type: "movie"
  },
  {
    title: "The Many Adventures of Winnie the Pooh",
    year: 1977,
    rated: "G",
    runtime: 74,
    countries: ["USA"],
    genres: ["Animation", "Family", "Musical"],
    director: "John Lounsbery, Wolfgang Reitherman",
    writers: [
      "A.A. Milne",
      "Larry Clemmons",
      "Ralph Wright",
      "Vance Gerry",
      "Xavier Atencio",
      "Ken Anderson",
      "Julius Svendsen",
      "Ted Berman",
      "Eric Cleworth",
      "Winston Hibler"
    ],
    actors: [
      "Sebastian Cabot",
      "Junius Matthews",
      "Barbara Luddy",
      "Howard Morris"
    ],
    plot:
      "A collection of animated shorts based on the stories and characters by A. A. Milne.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTY3OTkyMzYwNV5BMl5BanBnXkFtZTcwMzkzODU0MQ@@._V1_SX300.jpg",
    imdb: { id: "tt0076363", rating: 7.6, votes: 22830 },
    awards: { wins: 0, nominations: 1, text: "1 nomination." },
    type: "movie"
  },
  {
    title: "The Adventures of Sharkboy and Lavagirl 3-D",
    year: 2005,
    rated: "PG",
    runtime: 93,
    countries: ["USA"],
    genres: ["Action", "Adventure", "Family"],
    director: "Robert Rodriguez",
    writers: ["Robert Rodriguez", "Marcel Rodriguez", "Racer Rodriguez"],
    actors: ["Taylor Lautner", "Taylor Dooley", "Cayden Boyd", "George Lopez"],
    plot:
      "A young boy is recruited by his imaginary friends Sharkboy and Lavagirl to help save their planet.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTM1NzI3OTAwMl5BMl5BanBnXkFtZTcwMTI3ODkyMQ@@._V1_SX300.jpg",
    imdb: { id: "tt0424774", rating: 3.5, votes: 18621 },
    tomato: {
      meter: 20,
      image: "rotten",
      rating: 4.3,
      reviews: 123,
      fresh: 24,
      consensus:
        "The decision to turn this kiddie fantasy into a 3-D film was a miscalculation.",
      userMeter: 31,
      userRating: 2.5,
      userReviews: 31651
    },
    metacritic: 38,
    awards: { wins: 1, nominations: 10, text: "1 win \u0026 10 nominations." },
    type: "movie"
  },
  {
    title: "The Adventures of Buckaroo Banzai Across the 8th Dimension",
    year: 1984,
    rated: "PG",
    runtime: 103,
    countries: ["USA"],
    genres: ["Adventure", "Comedy", "Romance"],
    director: "W.D. Richter",
    writers: ["Earl Mac Rauch"],
    actors: ["Peter Weller", "John Lithgow", "Ellen Barkin", "Jeff Goldblum"],
    plot:
      "Adventurer/surgeon/rock musician Buckaroo Banzai and his band of men, the Hong Kong Cavaliers, take on evil alien invaders from the 8th dimension.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTk3OTAwNDQwOF5BMl5BanBnXkFtZTgwOTE0MzQxMDE@._V1_SX300.jpg",
    imdb: { id: "tt0086856", rating: 6.4, votes: 17154 },
    awards: { wins: 0, nominations: 5, text: "5 nominations." },
    type: "movie"
  },
  {
    title: "The Adventures of Rocky \u0026 Bullwinkle",
    year: 2000,
    rated: "PG",
    runtime: 92,
    countries: ["USA", "Germany"],
    genres: ["Animation", "Adventure", "Comedy"],
    director: "Des McAnuff",
    writers: ["Jay Ward", "Kenneth Lonergan"],
    actors: ["Rene Russo", "Jason Alexander", "Piper Perabo", "Randy Quaid"],
    plot:
      "When enemies Boris, Natasha and Fearless leader escape into the real world with a nefarious scheme, Rocky \u0026 Bullwinkle do the same and team up with a young F.B.I. agent to stop the trio.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMzI0Mzk2NzcwNV5BMl5BanBnXkFtZTcwNjYyNTkxMQ@@._V1_SX300.jpg",
    imdb: { id: "tt0131704", rating: 4.1, votes: 16248 },
    tomato: {
      meter: 43,
      image: "rotten",
      rating: 4.8,
      reviews: 96,
      fresh: 41,
      consensus:
        "Though the film stays true to the nature of the original cartoon, the script is disappointing and not funny.",
      userMeter: 19,
      userRating: 2.2,
      userReviews: 51819
    },
    metacritic: 36,
    awards: { wins: 2, nominations: 4, text: "2 wins \u0026 4 nominations." },
    type: "movie"
  },
  {
    title: "The Extraordinary Adventures of Adèle Blanc-Sec",
    year: 2010,
    rated: "PG",
    runtime: 107,
    countries: ["France", "USA"],
    genres: ["Action", "Adventure", "Fantasy"],
    director: "Luc Besson",
    writers: ["Luc Besson", "Jacques Tardi"],
    actors: [
      "Louise Bourgoin",
      "Mathieu Amalric",
      "Gilles Lellouche",
      "Jean-Paul Rouve"
    ],
    plot:
      "An adventure set in the early part of the 20th century and focused on a popular novelist and her dealings with would-be suitors, the cops, monsters, and other distractions.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTcwNzc0ODc5N15BMl5BanBnXkFtZTcwNDI1MTY4NA@@._V1_SX300.jpg",
    imdb: { id: "tt1179025", rating: 6.3, votes: 14871 },
    awards: { wins: 2, nominations: 1, text: "2 wins \u0026 1 nomination." },
    type: "movie"
  },
  {
    title: "The Truman Show",
    year: 1998,
    rated: "PG",
    runtime: 103,
    countries: ["USA"],
    genres: ["Drama"],
    director: "Peter Weir",
    writers: ["Andrew Niccol"],
    actors: [
      "Jim Carrey",
      "Laura Linney",
      "Noah Emmerich",
      "Natascha McElhone"
    ],
    plot:
      "An insurance salesman/adjuster discovers his entire life is actually a T.V. show.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTg4NTU3NTAyMF5BMl5BanBnXkFtZTgwNjYwNzc3NjE@._V1_SX300.jpg",
    imdb: { id: "tt0120382", rating: 8.1, votes: 613430 },
    tomato: {
      meter: 94,
      image: "certified",
      rating: 8.4,
      reviews: 125,
      fresh: 118,
      consensus:
        "A funny, tender, and thought-provoking film, The Truman Show is all the more noteworthy for its remarkably prescient vision of runaway celebrity culture and a nation with an insatiable thirst for the private details of ordinary lives.",
      userMeter: 88,
      userRating: 3.5,
      userReviews: 580012
    },
    metacritic: 90,
    awards: {
      wins: 35,
      nominations: 65,
      text: "Nominated for 3 Oscars. Another 35 wins \u0026 65 nominations."
    },
    type: "movie"
  },
  {
    title: "The Rocky Horror Picture Show",
    year: 1975,
    rated: "R",
    runtime: 100,
    countries: ["UK", "USA"],
    genres: ["Comedy", "Musical"],
    director: "Jim Sharman",
    writers: ["Richard O'Brien", "Jim Sharman", "Richard O'Brien"],
    actors: [
      "Tim Curry",
      "Susan Sarandon",
      "Barry Bostwick",
      "Richard O'Brien"
    ],
    plot:
      "A newly engaged couple have a breakdown in an isolated area and must pay a call to the bizarre residence of Dr. Frank-N-Furter.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMjE5NDc0NjE2NF5BMl5BanBnXkFtZTcwMTE4MTI3NA@@._V1_SX300.jpg",
    imdb: { id: "tt0073629", rating: 7.4, votes: 97249 },
    tomato: {
      meter: 80,
      image: "fresh",
      rating: 6.8,
      reviews: 41,
      fresh: 33,
      consensus: null,
      userMeter: 85,
      userRating: 3.6,
      userReviews: 364776
    },
    metacritic: 58,
    awards: { wins: 2, nominations: 4, text: "2 wins \u0026 4 nominations." },
    type: "movie"
  },
  {
    title: "Quiz Show",
    year: 1994,
    rated: "PG-13",
    runtime: 133,
    countries: ["USA"],
    genres: ["Drama", "History"],
    director: "Robert Redford",
    writers: ["Paul Attanasio", "Richard N. Goodwin"],
    actors: ["John Turturro", "Rob Morrow", "Ralph Fiennes", "Paul Scofield"],
    plot:
      "A young lawyer, Richard Goodwin, investigates a potentially fixed game show. Charles Van Doren, a big time show winner, is under Goodwin's investigation.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTc2NTU3MTY4Nl5BMl5BanBnXkFtZTcwNTc1NzkxMQ@@._V1_SX300.jpg",
    imdb: { id: "tt0110932", rating: 7.5, votes: 51692 },
    tomato: {
      meter: 96,
      image: "certified",
      rating: 8.2,
      reviews: 53,
      fresh: 51,
      consensus:
        "Robert Redford refracts the sociopolitical and moral issues posed by the subject material through a purely entertaining, well-acted lens.",
      userMeter: 86,
      userRating: 3.6,
      userReviews: 30669
    },
    metacritic: 88,
    awards: {
      wins: 5,
      nominations: 23,
      text: "Nominated for 4 Oscars. Another 5 wins \u0026 23 nominations."
    },
    type: "movie"
  },
  {
    title: "Best in Show",
    year: 2000,
    rated: "PG-13",
    runtime: 90,
    countries: ["USA"],
    genres: ["Comedy"],
    director: "Christopher Guest",
    writers: ["Christopher Guest", "Eugene Levy"],
    actors: [
      "Jay Brazeau",
      "Parker Posey",
      "Michael Hitchcock",
      "Catherine O'Hara"
    ],
    plot: "A colorful array of characters competes at a national dog show.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTQ5OTc0NDU1MF5BMl5BanBnXkFtZTYwNzk1OTI3._V1_SX300.jpg",
    imdb: { id: "tt0218839", rating: 7.5, votes: 44198 },
    tomato: {
      meter: 95,
      image: "certified",
      rating: 7.5,
      reviews: 110,
      fresh: 104,
      consensus:
        "A fine example of writer-director-star Christopher Guest's gift for improv comedy, Best in Show boasts an appealingly quirky premise and a brilliantly talented cast.",
      userMeter: 89,
      userRating: 3.7,
      userReviews: 55763
    },
    metacritic: 78,
    awards: {
      wins: 11,
      nominations: 13,
      text:
        "Nominated for 1 Golden Globe. Another 11 wins \u0026 13 nominations."
    },
    type: "movie"
  },
  {
    title: "Show Me Love",
    year: 1998,
    rated: "UNRATED",
    runtime: 89,
    countries: ["Sweden", "Denmark"],
    genres: ["Comedy", "Drama", "Romance"],
    director: "Lukas Moodysson",
    writers: ["Lukas Moodysson"],
    actors: [
      "Alexandra Dahlström",
      "Rebecka Liljeberg",
      "Erica Carlson",
      "Mathias Rust"
    ],
    plot:
      "Two teenage girls in small-town Sweden. Elin is beautiful, popular, and bored with life. Agnes is friendless, sad, and secretly in love with Elin.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMjE0NDY0MjcxN15BMl5BanBnXkFtZTcwNzYxMDQyMQ@@._V1_SX300.jpg",
    imdb: { id: "tt0150662", rating: 7.7, votes: 41316 },
    tomato: {
      meter: 90,
      image: "certified",
      rating: 7.6,
      reviews: 40,
      fresh: 36,
      consensus:
        "A naturalistic depiction of teenage life, Show Me Love has a charming, authentic feel.",
      userMeter: 86,
      userRating: 3.9,
      userReviews: 16636
    },
    metacritic: 73,
    awards: { wins: 19, nominations: 8, text: "19 wins \u0026 8 nominations." },
    type: "movie"
  },
  {
    title: "The Last Picture Show",
    year: 1971,
    rated: "R",
    runtime: 118,
    countries: ["USA"],
    genres: ["Drama"],
    director: "Peter Bogdanovich",
    writers: ["Larry McMurtry", "Peter Bogdanovich", "Larry McMurtry"],
    actors: [
      "Timothy Bottoms",
      "Jeff Bridges",
      "Cybill Shepherd",
      "Ben Johnson"
    ],
    plot:
      "A group of 1950s high schoolers come of age in a bleak, isolated, atrophied West Texas town that is slowly dying, both economically and culturally.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BNDkyNzQ1NzYzN15BMl5BanBnXkFtZTcwNjE5MDEwNw@@._V1._CR73.19999694824219,89.69999694824219,1196,1865.2000274658203_SX89_AL_.jpg_V1_SX300.jpg",
    imdb: { id: "tt0067328", rating: 8.1, votes: 29830 },
    awards: {
      wins: 16,
      nominations: 22,
      text: "Won 2 Oscars. Another 16 wins \u0026 22 nominations."
    },
    type: "movie"
  },
  {
    title: "The Greatest Show on Earth",
    year: 1952,
    rated: "NOT RATED",
    runtime: 152,
    countries: ["USA"],
    genres: ["Drama", "Family", "Romance"],
    director: "Cecil B. DeMille",
    writers: [
      "Fredric M. Frank",
      "Barré Lyndon",
      "Theodore St. John",
      "Fredric M. Frank",
      "Theodore St. John",
      "Frank Cavett"
    ],
    actors: [
      "Betty Hutton",
      "Cornel Wilde",
      "Charlton Heston",
      "Dorothy Lamour"
    ],
    plot:
      "The dramatic lives of trapeze artists, a clown, and an elephant trainer against a background of circus spectacle.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTgzMTA1MDM5NV5BMl5BanBnXkFtZTgwNjg5NDc2MjE@._V1_SX300.jpg",
    imdb: { id: "tt0044672", rating: 6.7, votes: 8952 },
    awards: {
      wins: 4,
      nominations: 5,
      text: "Won 2 Oscars. Another 4 wins \u0026 5 nominations."
    },
    type: "movie"
  },
  {
    title: "There's No Business Like Show Business",
    year: 1954,
    rated: "APPROVED",
    runtime: 117,
    countries: ["USA"],
    genres: ["Comedy", "Drama", "Musical"],
    director: "Walter Lang",
    writers: ["Phoebe Ephron", "Henry Ephron", "Lamar Trotti"],
    actors: ["Ethel Merman", "Donald O'Connor", "Marilyn Monroe", "Dan Dailey"],
    plot:
      "Molly and Terry Donahue, plus their three children, are The Five Donahues. Son Tim meets hat-check girl Vicky and the family act begins to fall apart.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTQ3ODk4NzIzM15BMl5BanBnXkFtZTcwODMyMTMyMQ@@._V1_SX300.jpg",
    imdb: { id: "tt0047574", rating: 6.5, votes: 3913 },
    awards: {
      wins: 0,
      nominations: 1,
      text: "Nominated for 3 Oscars. Another 1 nomination."
    },
    type: "movie"
  },
  {
    title: "Show Boat",
    year: 1951,
    rated: "PASSED",
    runtime: 108,
    countries: ["USA"],
    genres: ["Drama", "Family", "Musical"],
    director: "George Sidney",
    writers: [
      "John Lee Mahin",
      "Jerome Kern",
      "Oscar Hammerstein II",
      "Edna Ferber"
    ],
    actors: ["Kathryn Grayson", "Ava Gardner", "Howard Keel", "Joe E. Brown"],
    plot:
      "The daughter of a riverboat captain falls in love with a charming gambler, but their fairytale romance is threatened when his luck turns sour.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTQ2NTQ0MzI1MV5BMl5BanBnXkFtZTgwNzY5ODU3MTE@._V1_SX300.jpg",
    imdb: { id: "tt0044030", rating: 7, votes: 3406 },
    awards: {
      wins: 1,
      nominations: 2,
      text: "Nominated for 2 Oscars. Another 1 win \u0026 2 nominations."
    },
    type: "movie"
  },
  {
    title: "Show People",
    year: 1928,
    rated: "NOT RATED",
    runtime: 83,
    countries: ["USA"],
    genres: ["Comedy", "Romance"],
    director: "King Vidor",
    writers: [
      "Agnes Christine Johnston",
      "Laurence Stallings",
      "Wanda Tuchock",
      "Ralph Spence"
    ],
    actors: ["Marion Davies", "William Haines", "Dell Henderson", "Paul Ralli"],
    plot:
      "A young lady from Georgia goes to Hollywood in the hopes of becoming an actress.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTQ3MTUwMTg2Nl5BMl5BanBnXkFtZTgwMTM2ODAyMjE@._V1_SX300.jpg",
    imdb: { id: "tt0019379", rating: 8.2, votes: 2721 },
    awards: { wins: 1, nominations: 0, text: "1 win." },
    type: "movie"
  },
  {
    title: "Pirates of the Caribbean: Dead Man's Chest",
    year: 2006,
    rated: "PG-13",
    runtime: 151,
    countries: ["USA"],
    genres: ["Action", "Adventure", "Fantasy"],
    director: "Gore Verbinski",
    writers: [
      "Ted Elliott",
      "Terry Rossio",
      "Ted Elliott",
      "Terry Rossio",
      "Stuart Beattie",
      "Jay Wolpert"
    ],
    actors: [
      "Johnny Depp",
      "Orlando Bloom",
      "Keira Knightley",
      "Jack Davenport"
    ],
    plot:
      "Jack Sparrow races to recover the heart of Davy Jones to avoid enslaving his soul to Jones' service, as other friends and foes seek the heart for their own agenda as well.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTcwODc1MTMxM15BMl5BanBnXkFtZTYwMDg1NzY3._V1_SX300.jpg",
    imdb: { id: "tt0383574", rating: 7.3, votes: 492854 },
    tomato: {
      meter: 54,
      image: "rotten",
      rating: 6,
      reviews: 219,
      fresh: 118,
      consensus:
        "Gone is Depp's unpredictability and much of the humor and originality of the first movie.",
      userMeter: 72,
      userRating: 3.9,
      userReviews: 1845112
    },
    metacritic: 53,
    awards: {
      wins: 41,
      nominations: 48,
      text: "Won 1 Oscar. Another 41 wins \u0026 48 nominations."
    },
    type: "movie"
  },
  {
    title: "Shaun of the Dead",
    year: 2004,
    rated: "R",
    runtime: 99,
    countries: ["UK", "France"],
    genres: ["Comedy", "Horror"],
    director: "Edgar Wright",
    writers: ["Simon Pegg", "Edgar Wright"],
    actors: ["Simon Pegg", "Kate Ashfield", "Nick Frost", "Lucy Davis"],
    plot:
      "A man decides to turn his moribund life around by winning back his ex-girlfriend, reconciling his relationship with his mother, and dealing with an entire community that has returned from the dead to eat the living.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTU2NjA0NDk0NV5BMl5BanBnXkFtZTcwOTA0OTQzMw@@._V1_SX300.jpg",
    imdb: { id: "tt0365748", rating: 8, votes: 372719 },
    tomato: {
      meter: 92,
      image: "certified",
      rating: 7.8,
      reviews: 200,
      fresh: 183,
      consensus:
        "Shaun of the Dead cleverly balances scares and witty satire, making for a bloody good zombie movie with loads of wit.",
      userMeter: 93,
      userRating: 3.9,
      userReviews: 494999
    },
    metacritic: 76,
    awards: {
      wins: 11,
      nominations: 17,
      text: "11 wins \u0026 17 nominations."
    },
    type: "movie"
  },
  {
    title: "Dead Poets Society",
    year: 1989,
    rated: "PG",
    runtime: 128,
    countries: ["USA"],
    genres: ["Comedy", "Drama"],
    director: "Peter Weir",
    writers: ["Tom Schulman"],
    actors: [
      "Robin Williams",
      "Robert Sean Leonard",
      "Ethan Hawke",
      "Josh Charles"
    ],
    plot:
      "English teacher John Keating inspires his students to discover their love for poetry and seize the day.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMzA5MTE0NTUwOV5BMl5BanBnXkFtZTgwOTgyMDUxMDE@._V1_SX300.jpg",
    imdb: { id: "tt0097165", rating: 8, votes: 259878 },
    tomato: {
      meter: 85,
      image: "certified",
      rating: 7.2,
      reviews: 54,
      fresh: 46,
      consensus:
        "Affecting performances from the young cast and a genuinely inspirational turn from Robin Williams grant Peter Weir's prep school drama top honors.",
      userMeter: 92,
      userRating: 3.8,
      userReviews: 304924
    },
    metacritic: 79,
    awards: {
      wins: 17,
      nominations: 18,
      text: "Won 1 Oscar. Another 17 wins \u0026 18 nominations."
    },
    type: "movie"
  },
  {
    title: "Dawn of the Dead",
    year: 2004,
    rated: "R",
    runtime: 101,
    countries: ["USA", "Canada", "Japan", "France"],
    genres: ["Action", "Horror", "Sci-Fi"],
    director: "Zack Snyder",
    writers: ["George A. Romero", "James Gunn"],
    actors: ["Sarah Polley", "Ving Rhames", "Jake Weber", "Mekhi Phifer"],
    plot:
      "A nurse, a policeman, a young married couple, a salesman, and other survivors of a worldwide plague that is producing aggressive, flesh-eating zombies, take refuge in a mega Midwestern shopping mall.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTI4OTU2NjY5OF5BMl5BanBnXkFtZTYwOTQ2Mzg3._V1_SX300.jpg",
    imdb: { id: "tt0363547", rating: 7.4, votes: 186031 },
    tomato: {
      meter: 75,
      image: "certified",
      rating: 6.7,
      reviews: 180,
      fresh: 135,
      consensus:
        "A kinetic, violent and surprisingly worthy remake of George Romero's horror classic that pays homage to the original while working on its own terms.",
      userMeter: 77,
      userRating: 3.4,
      userReviews: 402786
    },
    metacritic: 58,
    awards: { wins: 1, nominations: 14, text: "1 win \u0026 14 nominations." },
    type: "movie"
  },
  {
    title: "The Evil Dead",
    year: 1981,
    rated: "NC-17",
    runtime: 85,
    countries: ["USA"],
    genres: ["Horror"],
    director: "Sam Raimi",
    writers: ["Sam Raimi"],
    actors: [
      "Bruce Campbell",
      "Ellen Sandweiss",
      "Richard DeManincor",
      "Betsy Baker"
    ],
    plot:
      "Five friends travel to a cabin in the woods, where they unknowingly release flesh-possessing demons.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTI0ODQ4NDkwNV5BMl5BanBnXkFtZTcwNDQ3MTU1MQ@@._V1_SX300.jpg",
    imdb: { id: "tt0083907", rating: 7.6, votes: 132303 },
    tomato: {
      meter: 95,
      image: "fresh",
      rating: 8.1,
      reviews: 55,
      fresh: 52,
      consensus:
        "This classic low budget horror film combines just the right amount of gore and black humor, giving The Evil Dead an equal amount of thrills and laughs.",
      userMeter: 84,
      userRating: 3.7,
      userReviews: 201087
    },
    metacritic: 70,
    awards: { wins: 3, nominations: 1, text: "3 wins \u0026 1 nomination." },
    type: "movie"
  },
  {
    title: "Evil Dead",
    year: 2013,
    rated: "R",
    runtime: 91,
    countries: ["USA"],
    genres: ["Horror"],
    director: "Fede Alvarez",
    writers: ["Fede Alvarez", "Rodo Sayagues", "Sam Raimi"],
    actors: [
      "Jane Levy",
      "Shiloh Fernandez",
      "Lou Taylor Pucci",
      "Jessica Lucas"
    ],
    plot:
      "Five friends head to a remote cabin, where the discovery of a Book of the Dead leads them to unwittingly summon up demons living in the nearby woods. The evil presence possesses them until only one is left to fight for survival.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BNTQ3OTkwNTgyN15BMl5BanBnXkFtZTcwNTAzOTAzOQ@@._V1_SX300.jpg",
    imdb: { id: "tt1288558", rating: 6.5, votes: 117842 },
    tomato: {
      meter: 62,
      image: "fresh",
      rating: 6.1,
      reviews: 173,
      fresh: 107,
      consensus:
        "It may lack the absurd humor that underlined the original, but the new-look Evil Dead compensates with brutal terror, gory scares, and gleefully bloody violence.",
      userMeter: 63,
      userRating: 3.5,
      userReviews: 75958
    },
    metacritic: 57,
    awards: { wins: 6, nominations: 16, text: "6 wins \u0026 16 nominations." },
    type: "movie"
  },
  {
    title: "Evil Dead II",
    year: 1987,
    rated: "X",
    runtime: 84,
    countries: ["USA"],
    genres: ["Comedy", "Horror"],
    director: "Sam Raimi",
    writers: ["Sam Raimi", "Scott Spiegel"],
    actors: [
      "Bruce Campbell",
      "Sarah Berry",
      "Dan Hicks",
      "Kassie Wesley DePaiva"
    ],
    plot:
      "The lone survivor of an onslaught of flesh-possessing spirits holds up in a cabin with a group of strangers while the demons continue their attack.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTA4Nzg5MjMwNzFeQTJeQWpwZ15BbWU4MDA2NDg4MDcx._V1_SX300.jpg",
    imdb: { id: "tt0092991", rating: 7.8, votes: 106566 },
    tomato: {
      meter: 98,
      image: "certified",
      rating: 8,
      reviews: 52,
      fresh: 51,
      consensus:
        "Evil Dead 2's increased special effects and slapstick-gore makes it as good -- if not better -- than the original.",
      userMeter: 89,
      userRating: 3.8,
      userReviews: 146840
    },
    metacritic: 69,
    awards: { wins: 0, nominations: 5, text: "5 nominations." },
    type: "movie"
  },
  {
    title: "Dawn of the Dead",
    year: 1978,
    rated: "UNRATED",
    runtime: 127,
    countries: ["Italy", "USA"],
    genres: ["Horror"],
    director: "George A. Romero",
    writers: ["George A. Romero"],
    actors: ["David Emge", "Ken Foree", "Scott H. Reiniger", "Gaylen Ross"],
    plot:
      "Following an ever-growing epidemic of zombies that have risen from the dead, two Philadelphia S.W.A.T. team members, a traffic reporter, and his television executive girlfriend seek refuge in a secluded shopping mall.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMjE1NzI5OTA1OF5BMl5BanBnXkFtZTcwMjg1MDUyMQ@@._V1_SX300.jpg",
    imdb: { id: "tt0077402", rating: 8, votes: 85927 },
    awards: { wins: 2, nominations: 2, text: "2 wins \u0026 2 nominations." },
    type: "movie"
  },
  {
    title: "Night of the Living Dead",
    year: 1968,
    rated: "UNRATED",
    runtime: 96,
    countries: ["USA"],
    genres: ["Horror"],
    director: "George A. Romero",
    writers: ["John A. Russo", "George A. Romero"],
    actors: ["Duane Jones", "Judith O'Dea", "Karl Hardman", "Marilyn Eastman"],
    plot: "A group of people hide from bloodthirsty zombies in a farmhouse.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTQ2MjAxODUyNl5BMl5BanBnXkFtZTgwOTExMzUzMDE@._V1_SX300.jpg",
    imdb: { id: "tt0063350", rating: 8, votes: 84070 },
    awards: { wins: 1, nominations: 0, text: "1 win." },
    type: "movie"
  },
  {
    title: "Before the Devil Knows You're Dead",
    year: 2007,
    rated: "R",
    runtime: 117,
    countries: ["USA"],
    genres: ["Crime", "Drama", "Thriller"],
    director: "Sidney Lumet",
    writers: ["Kelly Masterson"],
    actors: [
      "Philip Seymour Hoffman",
      "Ethan Hawke",
      "Albert Finney",
      "Marisa Tomei"
    ],
    plot:
      "When two brothers organize the robbery of their parents' jewelry store the job goes horribly wrong, triggering a series of events that sends them, their father and one brother's wife hurtling towards a shattering climax.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTQ1NzM2ODQxNF5BMl5BanBnXkFtZTcwMDczMDU1MQ@@._V1_SX300.jpg",
    imdb: { id: "tt0292963", rating: 7.3, votes: 79728 },
    tomato: {
      meter: 88,
      image: "certified",
      rating: 7.7,
      reviews: 167,
      fresh: 147,
      consensus:
        "A tense and effective thriller, Before the Devil Knows You're Dead marks a triumphant return to form for director Sidney Lumet.",
      userMeter: 71,
      userRating: 3.5,
      userReviews: 85883
    },
    metacritic: 84,
    awards: {
      wins: 17,
      nominations: 25,
      text: "17 wins \u0026 25 nominations."
    },
    type: "movie"
  },
  {
    title: "Rise of the Planet of the Apes",
    year: 2011,
    rated: "PG-13",
    runtime: 105,
    countries: ["USA"],
    genres: ["Action", "Drama", "Sci-Fi"],
    director: "Rupert Wyatt",
    writers: ["Rick Jaffa", "Amanda Silver", "Pierre Boulle"],
    actors: ["Andy Serkis", "Karin Konoval", "Terry Notary", "Richard Ridings"],
    plot:
      "A substance, designed to help the brain repair itself, gives rise to a super-intelligent chimp who leads an ape uprising.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTQyMjUxNTc0Ml5BMl5BanBnXkFtZTcwMjg1ODExNg@@._V1_SX300.jpg",
    imdb: { id: "tt1318514", rating: 7.6, votes: 383633 },
    tomato: {
      meter: 82,
      image: "certified",
      rating: 7.1,
      reviews: 248,
      fresh: 203,
      consensus:
        "Led by Rupert Wyatt's stylish direction, some impressive special effects, and a mesmerizing performance by Andy Serkis, Rise of the Planet of the Apes breathes unlikely new life into a long-running franchise.",
      userMeter: 77,
      userRating: 4,
      userReviews: 446278
    },
    metacritic: 68,
    awards: {
      wins: 19,
      nominations: 40,
      text: "Nominated for 1 Oscar. Another 19 wins \u0026 40 nominations."
    },
    type: "movie"
  },
  {
    title: "Dawn of the Planet of the Apes",
    year: 2014,
    rated: "PG-13",
    runtime: 130,
    countries: ["USA"],
    genres: ["Action", "Drama", "Sci-Fi"],
    director: "Matt Reeves",
    writers: [
      "Mark Bomback",
      "Rick Jaffa",
      "Amanda Silver",
      "Rick Jaffa",
      "Amanda Silver",
      "Pierre Boulle"
    ],
    actors: ["Andy Serkis", "Jason Clarke", "Gary Oldman", "Keri Russell"],
    plot:
      "A growing nation of genetically evolved apes led by Caesar is threatened by a band of human survivors of the devastating virus unleashed a decade earlier.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTgwODk3NDc1N15BMl5BanBnXkFtZTgwNTc1NjQwMjE@._V1_SX300.jpg",
    imdb: { id: "tt2103281", rating: 7.6, votes: 294568 },
    tomato: {
      meter: 90,
      image: "certified",
      rating: 7.9,
      reviews: 268,
      fresh: 241,
      consensus:
        "With intelligence and emotional resonance to match its stunning special effects, Dawn of the Planet of the Apes expands on its predecessor with an exciting and ambitious burst of sci-fi achievement.",
      userMeter: 88,
      userRating: 4.2,
      userReviews: 201217
    },
    metacritic: 79,
    awards: {
      wins: 13,
      nominations: 43,
      text: "Nominated for 1 Oscar. Another 13 wins \u0026 43 nominations."
    },
    type: "movie"
  },
  {
    title: "Planet of the Apes",
    year: 2001,
    rated: "PG-13",
    runtime: 119,
    countries: ["USA"],
    genres: ["Action", "Adventure", "Sci-Fi"],
    director: "Tim Burton",
    writers: [
      "Pierre Boulle",
      "William Broyles Jr.",
      "Lawrence Konner",
      "Mark Rosenthal"
    ],
    actors: [
      "Mark Wahlberg",
      "Tim Roth",
      "Helena Bonham Carter",
      "Michael Clarke Duncan"
    ],
    plot:
      "An Air Force astronaut crash lands on a mysterious planet where evolved, talking apes dominate a race of primitive humans.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTY5Nzg4NzAzMF5BMl5BanBnXkFtZTcwMjc5MzcyMQ@@._V1_SX300.jpg",
    imdb: { id: "tt0133152", rating: 5.7, votes: 172416 },
    tomato: {
      meter: 45,
      image: "rotten",
      rating: 5.5,
      reviews: 156,
      fresh: 70,
      consensus:
        "This remake of Planet of the Apes can't compare to the original in some critics' mind, but the striking visuals and B-movie charms may win you over.",
      userMeter: 27,
      userRating: 2.7,
      userReviews: 366047
    },
    metacritic: 50,
    awards: {
      wins: 10,
      nominations: 23,
      text:
        "Nominated for 2 BAFTA Film Awards. Another 10 wins \u0026 23 nominations."
    },
    type: "movie"
  },
  {
    title: "Planet Terror",
    year: 2007,
    rated: "NOT RATED",
    runtime: 105,
    countries: ["USA"],
    genres: ["Action", "Comedy", "Horror"],
    director: "Robert Rodriguez",
    writers: ["Robert Rodriguez"],
    actors: [
      "Rose McGowan",
      "Freddy Rodríguez",
      "Josh Brolin",
      "Marley Shelton"
    ],
    plot:
      "After an experimental bio-weapon is released, turning thousands into zombie-like creatures, it's up to a rag-tag group of survivors to stop the infected and those behind its release.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTI0NDQ5MTM2MV5BMl5BanBnXkFtZTcwOTIwMjk2MQ@@._V1_SX300.jpg",
    imdb: { id: "tt1077258", rating: 7.2, votes: 160542 },
    awards: { wins: 0, nominations: 2, text: "2 nominations." },
    type: "movie"
  },
  {
    title: "Planet of the Apes",
    year: 1968,
    rated: "G",
    runtime: 112,
    countries: ["USA"],
    genres: ["Adventure", "Sci-Fi"],
    director: "Franklin J. Schaffner",
    writers: ["Michael Wilson", "Rod Serling", "Pierre Boulle"],
    actors: [
      "Charlton Heston",
      "Roddy McDowall",
      "Kim Hunter",
      "Maurice Evans"
    ],
    plot:
      "An astronaut crew crash lands on a planet in the distant future where intelligent talking apes are the dominant species, and humans are the oppressed and enslaved.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTg0NjUwMzg5NF5BMl5BanBnXkFtZTgwNDQ0NjcwMTE@._V1_SX300.jpg",
    imdb: { id: "tt0063442", rating: 8, votes: 130800 },
    awards: {
      wins: 4,
      nominations: 1,
      text: "Nominated for 2 Oscars. Another 4 wins \u0026 1 nomination."
    },
    type: "movie"
  },
  {
    title: "Treasure Planet",
    year: 2002,
    rated: "PG",
    runtime: 95,
    countries: ["USA"],
    genres: ["Animation", "Adventure", "Family"],
    director: "Ron Clements, John Musker",
    writers: [
      "Robert Louis Stevenson",
      "Ron Clements",
      "John Musker",
      "Rob Edwards",
      "Ron Clements",
      "John Musker",
      "Ted Elliott",
      "Terry Rossio"
    ],
    actors: [
      "Roscoe Lee Browne",
      "Corey Burton",
      "Dane A. Davis",
      "Joseph Gordon-Levitt"
    ],
    plot:
      'A Disney animated version of "Treasure Island". The only difference is that the film is set in outer space with alien worlds and other galactic wonders.',
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTQ0NDg3MjU2OV5BMl5BanBnXkFtZTYwODgyMDg5._V1_SX300.jpg",
    imdb: { id: "tt0133240", rating: 7.1, votes: 66157 },
    tomato: {
      meter: 68,
      image: "fresh",
      rating: 6.5,
      reviews: 146,
      fresh: 100,
      consensus:
        "Though its characterizations are weaker than usual, Treasure Planet offers a fast-paced, beautifully rendered vision of outer space.",
      userMeter: 70,
      userRating: 3.2,
      userReviews: 67264
    },
    metacritic: 60,
    awards: {
      wins: 1,
      nominations: 12,
      text: "Nominated for 1 Oscar. Another 1 win \u0026 12 nominations."
    },
    type: "movie"
  },
  {
    title: "Red Planet",
    year: 2000,
    rated: "PG-13",
    runtime: 106,
    countries: ["USA", "Australia"],
    genres: ["Action", "Sci-Fi", "Thriller"],
    director: "Antony Hoffman",
    writers: ["Chuck Pfarrer", "Chuck Pfarrer", "Jonathan Lemkin"],
    actors: [
      "Val Kilmer",
      "Carrie-Anne Moss",
      "Tom Sizemore",
      "Benjamin Bratt"
    ],
    plot:
      "Astronauts, and their robotic dog AMME, search for solutions to save a dying Earth by searching on Mars, only to have the mission go terribly awry.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTY2MzE0MjAwOF5BMl5BanBnXkFtZTYwNDM4Mzg2._V1_SX300.jpg",
    imdb: { id: "tt0199753", rating: 5.6, votes: 46080 },
    tomato: {
      meter: 14,
      image: "rotten",
      rating: 3.8,
      reviews: 101,
      fresh: 14,
      consensus:
        "While the special effects are impressive, the movie suffers from a lack of energy and interesting characters.",
      userMeter: 28,
      userRating: 2.6,
      userReviews: 48221
    },
    metacritic: 34,
    awards: { wins: 0, nominations: 1, text: "1 nomination." },
    type: "movie"
  },
  {
    title: "Planet 51",
    year: 2009,
    rated: "PG",
    runtime: 91,
    countries: ["Spain", "UK", "USA"],
    genres: ["Animation", "Adventure", "Comedy"],
    director: "Jorge Blanco, Javier Abad, Marcos Martínez",
    writers: [
      "Javier Abad",
      "Jorge Blanco",
      "Marcos Martínez",
      "Ignacio Pérez Dolset",
      "Joe Stillman"
    ],
    actors: ["Jessica Biel", "John Cleese", "Gary Oldman", "Dwayne Johnson"],
    plot:
      "An alien civilization is invaded by Astronaut Chuck Baker, who believes that the planet was uninhabited. Wanted by the military, Baker must get back to his ship before it goes into orbit without him.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTUyOTAyNTA5Ml5BMl5BanBnXkFtZTcwODU2OTM0Mg@@._V1_SX300.jpg",
    imdb: { id: "tt0762125", rating: 6.1, votes: 39493 },
    tomato: {
      meter: 21,
      image: "rotten",
      rating: 4.2,
      reviews: 107,
      fresh: 23,
      consensus:
        "Planet 51 squanders an interesting premise with an overly familiar storyline, stock characters, and humor that alternates between curious and potentially offensive.",
      userMeter: 39,
      userRating: 2.8,
      userReviews: 356891
    },
    metacritic: 39,
    awards: { wins: 3, nominations: 4, text: "3 wins \u0026 4 nominations." },
    type: "movie"
  },
  {
    title: "Forbidden Planet",
    year: 1956,
    rated: "PASSED",
    runtime: 98,
    countries: ["USA"],
    genres: ["Action", "Adventure", "Family"],
    director: "Fred M. Wilcox",
    writers: ["Cyril Hume", "Irving Block", "Allen Adler"],
    actors: [
      "Walter Pidgeon",
      "Anne Francis",
      "Leslie Nielsen",
      "Warren Stevens"
    ],
    plot:
      "A starship crew goes to investigate the silence of a planet's colony only to find two survivors and a deadly secret that one of them has.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTMxOTc2NzgxMF5BMl5BanBnXkFtZTcwNzYxNDcyMg@@._V1_SX300.jpg",
    imdb: { id: "tt0049223", rating: 7.7, votes: 32236 },
    awards: {
      wins: 1,
      nominations: 1,
      text: "Nominated for 1 Oscar. Another 1 win \u0026 1 nomination."
    },
    type: "movie"
  },
  {
    title: "Beneath the Planet of the Apes",
    year: 1970,
    rated: "G",
    runtime: 95,
    countries: ["USA"],
    genres: ["Action", "Adventure", "Sci-Fi"],
    director: "Ted Post",
    writers: ["Paul Dehn", "Mort Abrahams", "Pierre Boulle", "Paul Dehn"],
    actors: [
      "James Franciscus",
      "Kim Hunter",
      "Maurice Evans",
      "Linda Harrison"
    ],
    plot:
      "The sole survivor of an interplanetary rescue mission searches for the only survivor of the previous expedition. He discovers a planet ruled by apes and an underground city run by telepathic humans.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTk0NDE0OTg2Ml5BMl5BanBnXkFtZTcwMDk3MTk0MQ@@._V1_SX300.jpg",
    imdb: { id: "tt0065462", rating: 6.1, votes: 30663 },
    awards: { wins: 0, nominations: 0, text: "" },
    type: "movie"
  },
  {
    title: "Alien",
    year: 1979,
    rated: "R",
    runtime: 117,
    countries: ["USA", "UK"],
    genres: ["Horror", "Sci-Fi"],
    director: "Ridley Scott",
    writers: ["Dan O'Bannon", "Ronald Shusett", "Dan O'Bannon"],
    actors: [
      "Tom Skerritt",
      "Sigourney Weaver",
      "Veronica Cartwright",
      "Harry Dean Stanton"
    ],
    plot:
      "The commercial vessel Nostromo receives a distress call from an unexplored planet. After searching for survivors, the crew heads home only to realize that a deadly bioform has joined them.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTU1ODQ4NjQyOV5BMl5BanBnXkFtZTgwOTQ3NDU2MTE@._V1_SX300.jpg",
    imdb: { id: "tt0078748", rating: 8.5, votes: 527017 },
    tomato: {
      meter: 97,
      image: "certified",
      rating: 9,
      reviews: 100,
      fresh: 97,
      consensus:
        "A modern classic, Alien blends science fiction, horror and bleak poetry into a seamless whole.",
      userMeter: 94,
      userRating: 3.9,
      userReviews: 453948
    },
    metacritic: 83,
    awards: {
      wins: 15,
      nominations: 19,
      text: "Won 1 Oscar. Another 15 wins \u0026 19 nominations."
    },
    type: "movie"
  },
  {
    title: "Alien³",
    year: 1992,
    rated: "R",
    runtime: 114,
    countries: ["USA"],
    genres: ["Horror", "Sci-Fi"],
    director: "David Fincher",
    writers: [
      "Dan O'Bannon",
      "Ronald Shusett",
      "Vincent Ward",
      "David Giler",
      "Walter Hill",
      "Larry Ferguson"
    ],
    actors: [
      "Sigourney Weaver",
      "Charles S. Dutton",
      "Charles Dance",
      "Paul McGann"
    ],
    plot:
      "Ripley continues to be stalked by a savage alien, after her escape pod crashes on a prison planet.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTQzMTg3NTM2Ml5BMl5BanBnXkFtZTcwMTkzMTk3OA@@._V1_SX300.jpg",
    imdb: { id: "tt0103644", rating: 6.4, votes: 196084 },
    tomato: {
      meter: 44,
      image: "rotten",
      rating: 5.4,
      reviews: 45,
      fresh: 20,
      consensus: null,
      userMeter: 47,
      userRating: 3.1,
      userReviews: 337319
    },
    metacritic: 59,
    awards: {
      wins: 4,
      nominations: 19,
      text: "Nominated for 1 Oscar. Another 4 wins \u0026 19 nominations."
    },
    type: "movie"
  },
  {
    title: "Alien: Resurrection",
    year: 1997,
    rated: "R",
    runtime: 109,
    countries: ["USA"],
    genres: ["Action", "Horror", "Sci-Fi"],
    director: "Jean-Pierre Jeunet",
    writers: ["Dan O'Bannon", "Ronald Shusett", "Joss Whedon"],
    actors: [
      "Sigourney Weaver",
      "Winona Ryder",
      "Dominique Pinon",
      "Ron Perlman"
    ],
    plot:
      "Two centuries after her death, Ellen Ripley is revived as a powerful human/alien hybrid clone who must continue her war against the aliens.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTc2MDIyMjc3N15BMl5BanBnXkFtZTcwNzQzODAwMQ@@._V1_SX300.jpg",
    imdb: { id: "tt0118583", rating: 6.3, votes: 160808 },
    tomato: {
      meter: 54,
      image: "rotten",
      rating: 5.8,
      reviews: 71,
      fresh: 38,
      consensus: null,
      userMeter: 40,
      userRating: 3,
      userReviews: 261912
    },
    metacritic: 63,
    awards: { wins: 5, nominations: 16, text: "5 wins \u0026 16 nominations." },
    type: "movie"
  },
  {
    title: "AVP: Alien vs. Predator",
    year: 2004,
    rated: "PG-13",
    runtime: 101,
    countries: ["USA", "UK", "Czech Republic", "Canada", "Germany"],
    genres: ["Action", "Adventure", "Sci-Fi"],
    director: "Paul W.S. Anderson",
    writers: [
      "Dan O'Bannon",
      "Ronald Shusett",
      "Jim Thomas",
      "John Thomas",
      "Paul W.S. Anderson",
      "Dan O'Bannon",
      "Ronald Shusett",
      "Paul W.S. Anderson"
    ],
    actors: ["Sanaa Lathan", "Raoul Bova", "Lance Henriksen", "Ewen Bremner"],
    plot:
      "During an archaeological expedition on Bouvetøya Island in Antarctica, a team of archaeologists and other scientists find themselves caught up in a battle between the two legends. Soon, the team realize that only one species can win.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTU4MjIwMTcyMl5BMl5BanBnXkFtZTYwMTYwNDA3._V1_SX300.jpg",
    imdb: { id: "tt0370263", rating: 5.6, votes: 137113 },
    tomato: {
      meter: 21,
      image: "rotten",
      rating: 4,
      reviews: 141,
      fresh: 29,
      consensus:
        "Gore without scares and cardboard cut-out characters make this clash of the monsters a dull sit.",
      userMeter: 39,
      userRating: 3,
      userReviews: 429302
    },
    metacritic: 29,
    awards: { wins: 2, nominations: 2, text: "2 wins \u0026 2 nominations." },
    type: "movie"
  },
  {
    title: "My Stepmother Is an Alien",
    year: 1988,
    rated: "PG-13",
    runtime: 105,
    countries: ["USA"],
    genres: ["Comedy", "Sci-Fi"],
    director: "Richard Benjamin",
    writers: [
      "Jerico",
      "Herschel Weingrod",
      "Timothy Harris",
      "Jonathan Reynolds"
    ],
    actors: ["Dan Aykroyd", "Kim Basinger", "Jon Lovitz", "Alyson Hannigan"],
    plot:
      "An alien is sent on a secret mission to Earth, where she appears as a gorgeous, attractive, and single lady. Her mission is to make contact with a rather nerdy young scientist, who's quite ...",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTM5OTI0MzM5Nl5BMl5BanBnXkFtZTcwOTcwMjcyMQ@@._V1_SX300.jpg",
    imdb: { id: "tt0095687", rating: 5.2, votes: 20510 },
    awards: { wins: 0, nominations: 4, text: "4 nominations." },
    type: "movie"
  },
  {
    title: "Alien Nation",
    year: 1988,
    rated: "R",
    runtime: 91,
    countries: ["USA"],
    genres: ["Action", "Crime", "Sci-Fi"],
    director: "Graham Baker",
    writers: ["Rockne S. O'Bannon"],
    actors: [
      "James Caan",
      "Mandy Patinkin",
      "Terence Stamp",
      "Kevyn Major Howard"
    ],
    plot:
      "A few years from now, Earth will have the first contact with an alien civilization. These aliens, known as Newcomers, slowly begin to be integrated into human society after years of quarantine.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTU5NjYxNjM5MV5BMl5BanBnXkFtZTcwNDk4MTU1MQ@@._V1_SX300.jpg",
    imdb: { id: "tt0094631", rating: 6.3, votes: 10829 },
    tomato: {
      meter: 54,
      image: "rotten",
      rating: 5.4,
      reviews: 26,
      fresh: 14,
      consensus:
        "Alien Nation takes the interesting premise of extraterrestrials living among us and doesn't do enough with it, emphasizing a police procedural plotline over the more intriguing sci-fi elements.",
      userMeter: 45,
      userRating: 3,
      userReviews: 15818
    },
    metacritic: 45,
    awards: { wins: 1, nominations: 4, text: "1 win \u0026 4 nominations." },
    type: "movie"
  },
  {
    title: "Alien Raiders",
    year: 2008,
    rated: "R",
    runtime: 85,
    countries: ["USA"],
    genres: ["Action", "Horror", "Sci-Fi"],
    director: "Ben Rock",
    writers: ["Julia Fair", "David Simkins"],
    actors: [
      "Carlos Bernard",
      "Mathew St. Patrick",
      "Rockmond Dunbar",
      "Courtney Ford"
    ],
    plot:
      "It's the end of yet another night at Hastings Supermarket, an idyllic family grocery store in Buck Lake, Arizona. But the normal monotony of rounding up shopping carts and settling out the ...",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMjc0MzcwMDEyOV5BMl5BanBnXkFtZTcwNTU4NTMyMg@@._V1_SX300.jpg",
    imdb: { id: "tt0996979", rating: 5.6, votes: 7665 },
    awards: { wins: 3, nominations: 0, text: "3 wins." },
    type: "movie"
  },
  {
    title: "Alien Autopsy",
    year: 2006,
    rated: "PG-13",
    runtime: 95,
    countries: ["Germany", "UK"],
    genres: ["Comedy", "Sci-Fi"],
    director: "Jonny Campbell",
    writers: ["William Davies"],
    actors: [
      "Declan Donnelly",
      "Anthony McPartlin",
      "Bill Pullman",
      "Götz Otto"
    ],
    plot:
      "Humouristic reconstruction of the 1995 scandal when two British lads were accused of having faked a documentary from the Roswell incident in 1947.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMzAxNTU5ODYwMl5BMl5BanBnXkFtZTcwNDM0MDMzMQ@@._V1_SX300.jpg",
    imdb: { id: "tt0466664", rating: 5.8, votes: 6441 },
    awards: { wins: 0, nominations: 0, text: "" },
    type: "movie"
  },
  {
    title: "Alien Abduction",
    year: 2014,
    rated: "NOT RATED",
    runtime: 85,
    countries: ["USA"],
    genres: ["Horror", "Sci-Fi", "Thriller"],
    director: "Matty Beckerman",
    writers: ["Robert Lewis"],
    actors: [
      "Katherine Sigismund",
      "Corey Eid",
      "Riley Polanski",
      "Jillian Clare"
    ],
    plot:
      "A vacationing family encounters an alien threat in this thriller based on the real-life Brown Mountain Lights phenomenon in North Carolina.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMjMxMjUwMTU1Nl5BMl5BanBnXkFtZTgwOTI4NjMzMTE@._V1_SX300.jpg",
    imdb: { id: "tt2510434", rating: 4.8, votes: 5530 },
    tomato: {
      meter: 25,
      image: "rotten",
      rating: 4.4,
      reviews: 16,
      fresh: 4,
      consensus: null,
      userMeter: 22,
      userRating: 2.4,
      userReviews: 883
    },
    metacritic: 47,
    awards: { wins: 0, nominations: 0, text: "" },
    type: "movie"
  },
  {
    title: "Alien Outpost",
    year: 2014,
    rated: "NOT RATED",
    runtime: 90,
    countries: ["UK", "South Africa"],
    genres: ["Action", "Sci-Fi", "Thriller"],
    director: "Jabbar Raisani",
    writers: ["Blake Clifton", "Jabbar Raisani", "Jabbar Raisani"],
    actors: [
      "Brandon Auret",
      "Adrian Paul",
      "Reiley McClendon",
      "Rick Ravanello"
    ],
    plot:
      "A documentary crew follows an elite unit of soldiers in the wake of an alien invasion.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTc4ODY2MzIzNl5BMl5BanBnXkFtZTgwNTg3ODY0MzE@._V1_SX300.jpg",
    imdb: { id: "tt2474972", rating: 4.7, votes: 4631 },
    tomato: {
      meter: 15,
      image: "rotten",
      rating: 4.3,
      reviews: 13,
      fresh: 2,
      consensus: null,
      userMeter: 33,
      userRating: 2.7,
      userReviews: 548
    },
    metacritic: 26,
    awards: { wins: 0, nominations: 0, text: "" },
    type: "movie"
  },
  {
    title: "Butch Cassidy and the Sundance Kid",
    year: 1969,
    rated: "M",
    runtime: 110,
    countries: ["USA"],
    genres: ["Biography", "Crime", "Drama"],
    director: "George Roy Hill",
    writers: ["William Goldman"],
    actors: [
      "Paul Newman",
      "Robert Redford",
      "Katharine Ross",
      "Strother Martin"
    ],
    plot:
      "Two Western bank/train robbers flee to Bolivia when the law gets too close.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTkyMTM2NDk5Nl5BMl5BanBnXkFtZTgwNzY1NzEyMDE@._V1_SX300.jpg",
    imdb: { id: "tt0064115", rating: 8.1, votes: 142642 },
    tomato: {
      meter: 89,
      image: "certified",
      rating: 8.2,
      reviews: 46,
      fresh: 41,
      consensus:
        "With its iconic pairing of Paul Newman and Robert Redford, jaunty screenplay and Burt Bacharach score, Butch Cassidy and the Sundance Kid has gone down as among the defining moments in late-'60s American cinema.",
      userMeter: 93,
      userRating: 4,
      userReviews: 70088
    },
    metacritic: 58,
    awards: {
      wins: 16,
      nominations: 14,
      text: "Won 4 Oscars. Another 16 wins \u0026 14 nominations."
    },
    type: "movie"
  },
  {
    title: "The Karate Kid",
    year: 1984,
    rated: "PG",
    runtime: 126,
    countries: ["USA"],
    genres: ["Action", "Drama", "Family"],
    director: "John G. Avildsen",
    writers: ["Robert Mark Kamen"],
    actors: ["Ralph Macchio", "Pat Morita", "Elisabeth Shue", "Martin Kove"],
    plot:
      "A handyman/martial arts master agrees to teach a bullied boy karate and shows him that there is more to the martial art than fighting.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTkyNjE3MjM2MV5BMl5BanBnXkFtZTYwMzY5ODk4._V1_SX300.jpg",
    imdb: { id: "tt0087538", rating: 7.2, votes: 116573 },
    awards: {
      wins: 2,
      nominations: 2,
      text: "Nominated for 1 Oscar. Another 2 wins \u0026 2 nominations."
    },
    type: "movie"
  },
  {
    title: "The Karate Kid",
    year: 2010,
    rated: "PG",
    runtime: 140,
    countries: ["USA", "China"],
    genres: ["Action", "Drama", "Family"],
    director: "Harald Zwart",
    writers: ["Christopher Murphey", "Robert Mark Kamen"],
    actors: ["Jaden Smith", "Jackie Chan", "Taraji P. Henson", "Wenwen Han"],
    plot:
      "Work causes a single mother to move to China with her young son; in his new home, the boy embraces kung fu, taught to him by a master.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTQ0ODg3ODEyMF5BMl5BanBnXkFtZTcwNjI1MTgxMw@@._V1_SX300.jpg",
    imdb: { id: "tt1155076", rating: 6.2, votes: 113299 },
    tomato: {
      meter: 66,
      image: "fresh",
      rating: 6.2,
      reviews: 203,
      fresh: 133,
      consensus:
        "It may not be as powerful as the 1984 edition, but the 2010 Karate Kid delivers a surprisingly satisfying update on the original.",
      userMeter: 67,
      userRating: 3.5,
      userReviews: 281741
    },
    metacritic: 61,
    awards: { wins: 5, nominations: 13, text: "5 wins \u0026 13 nominations." },
    type: "movie"
  },
  {
    title: "The Heartbreak Kid",
    year: 2007,
    rated: "R",
    runtime: 116,
    countries: ["USA"],
    genres: ["Comedy", "Romance"],
    director: "Bobby Farrelly, Peter Farrelly",
    writers: [
      "Scot Armstrong",
      "Leslie Dixon",
      "Bobby Farrelly",
      "Peter Farrelly",
      "Kevin Barnett",
      "Bruce Jay Friedman",
      "Neil Simon"
    ],
    actors: [
      "Ben Stiller",
      "Malin Akerman",
      "Michelle Monaghan",
      "Jerry Stiller"
    ],
    plot:
      "A newly wed man who believes he's just gotten hitched to the perfect woman encounters another lady on his honeymoon.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMjExNTM2NTE2NF5BMl5BanBnXkFtZTcwOTI5MDUzMw@@._V1_SX300.jpg",
    imdb: { id: "tt0408839", rating: 5.8, votes: 68873 },
    tomato: {
      meter: 29,
      image: "rotten",
      rating: 4.6,
      reviews: 156,
      fresh: 45,
      consensus:
        "Despite some amiable performances, The Heartbreak Kid is neither as daring nor as funny as the Farrelly Brothers' earlier films.",
      userMeter: 37,
      userRating: 2.9,
      userReviews: 315008
    },
    metacritic: 46,
    awards: { wins: 1, nominations: 0, text: "1 win." },
    type: "movie"
  },
  {
    title: "The Kid",
    year: 1921,
    rated: "NOT RATED",
    runtime: 68,
    countries: ["USA"],
    genres: ["Comedy", "Drama", "Family"],
    director: "Charles Chaplin",
    writers: ["Charles Chaplin"],
    actors: [
      "Carl Miller",
      "Edna Purviance",
      "Jackie Coogan",
      "Charles Chaplin"
    ],
    plot:
      "The Tramp cares for an abandoned child, but events put that relationship in jeopardy.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTkzNTgxMDU1OF5BMl5BanBnXkFtZTgwOTQ3MjI2MzE@._V1_SX300.jpg",
    imdb: { id: "tt0012349", rating: 8.4, votes: 60916 },
    awards: { wins: 1, nominations: 0, text: "1 win." },
    type: "movie"
  },
  {
    title: "The Karate Kid, Part II",
    year: 1986,
    rated: "PG",
    runtime: 113,
    countries: ["USA"],
    genres: ["Action", "Family", "Romance"],
    director: "John G. Avildsen",
    writers: ["Robert Mark Kamen", "Robert Mark Kamen"],
    actors: ["Pat Morita", "Ralph Macchio", "Pat E. Johnson", "Bruce Malmuth"],
    plot:
      "Daniel accompanies his mentor to Okinawa who is off to see his dying father and confront his old rival, while Daniel inadvertently makes an enemy of his own.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTg3ODc2Nzc3M15BMl5BanBnXkFtZTYwMDMzNzc5._V1_SX300.jpg",
    imdb: { id: "tt0091326", rating: 5.9, votes: 48530 },
    awards: {
      wins: 4,
      nominations: 2,
      text: "Nominated for 1 Oscar. Another 4 wins \u0026 2 nominations."
    },
    type: "movie"
  },
  {
    title: "The Kid",
    year: 2000,
    rated: "PG",
    runtime: 104,
    countries: ["USA"],
    genres: ["Comedy", "Family", "Fantasy"],
    director: "Jon Turteltaub",
    writers: ["Audrey Wells"],
    actors: [
      "Bruce Willis",
      "Spencer Breslin",
      "Emily Mortimer",
      "Lily Tomlin"
    ],
    plot:
      "An unhappy and disliked image consultant gets a second shot at life when an eight year old version of himself mysteriously appears.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTIwMzk2NTE5NF5BMl5BanBnXkFtZTcwMTcyOTAwMQ@@._V1_SX300.jpg",
    imdb: { id: "tt0219854", rating: 6.1, votes: 33391 },
    tomato: {
      meter: 49,
      image: "rotten",
      rating: 5.2,
      reviews: 97,
      fresh: 48,
      consensus:
        "Critics find The Kid to be too sweet and the movie's message to be annoyingly simplistic.",
      userMeter: 49,
      userRating: 3,
      userReviews: 60463
    },
    metacritic: 45,
    awards: { wins: 1, nominations: 2, text: "1 win \u0026 2 nominations." },
    type: "movie"
  },
  {
    title: "Honey I Blew Up the Kid",
    year: 1992,
    rated: "PG",
    runtime: 89,
    countries: ["USA"],
    genres: ["Adventure", "Comedy", "Family"],
    director: "Randal Kleiser",
    writers: [
      "Stuart Gordon",
      "Brian Yuzna",
      "Ed Naha",
      "Garry Goodrow",
      "Thom Eberhardt",
      "Peter Elbling",
      "Garry Goodrow"
    ],
    actors: [
      "Rick Moranis",
      "Marcia Strassman",
      "Robert Oliveri",
      "Daniel Shalikar"
    ],
    plot:
      "The Szalinski family is back, this time hilarious disaster strikes when an experiment causes their new toddler son to grow many stories tall.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTIyNTQ0NDc4NF5BMl5BanBnXkFtZTcwMTcxNTcyMQ@@._V1_SX300.jpg",
    imdb: { id: "tt0104437", rating: 4.7, votes: 30731 },
    awards: { wins: 0, nominations: 10, text: "10 nominations." },
    type: "movie"
  },
  {
    title: "Diary of a Wimpy Kid",
    year: 2010,
    rated: "PG",
    runtime: 94,
    countries: ["USA"],
    genres: ["Comedy", "Family"],
    director: "Thor Freudenthal",
    writers: [
      "Jackie Filgo",
      "Jeff Filgo",
      "Gabe Sachs",
      "Jeff Judah",
      "Jeff Kinney"
    ],
    actors: ["Zachary Gordon", "Robert Capron", "Rachael Harris", "Steve Zahn"],
    plot:
      "The adventures of a teenager who is fresh out and in Middle School, where he has to learn the consequences and responsibility to survive the year.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTg3NzQ2NDgyNF5BMl5BanBnXkFtZTcwMDc1NzIyMw@@._V1_SX300.jpg",
    imdb: { id: "tt1196141", rating: 6.2, votes: 30079 },
    tomato: {
      meter: 53,
      image: "rotten",
      rating: 5.5,
      reviews: 105,
      fresh: 56,
      consensus:
        "Unlike its bestselling source material, Diary of a Wimpy Kid fails to place a likable protagonist at the center of its middle-school humor -- and its underlying message is drowned out as a result.",
      userMeter: 49,
      userRating: 3.2,
      userReviews: 102770
    },
    metacritic: 56,
    awards: { wins: 5, nominations: 8, text: "5 wins \u0026 8 nominations." },
    type: "movie"
  },
  {
    title: "The Kid with a Bike",
    year: 2011,
    rated: "PG-13",
    runtime: 87,
    countries: ["Belgium", "France", "Italy"],
    genres: ["Drama"],
    director: "Jean-Pierre Dardenne, Luc Dardenne",
    writers: ["Jean-Pierre Dardenne", "Luc Dardenne"],
    actors: [
      "Thomas Doret",
      "Cécile De France",
      "Jérémie Renier",
      "Fabrizio Rongione"
    ],
    plot:
      "Abandoned by his father, a young boy is left in a state-run youth farm. In a random act of kindness, the town hair-dresser agrees to foster him on week-ends.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTQ3OTE3MzAyMl5BMl5BanBnXkFtZTcwNDU1OTIzNw@@._V1_SX300.jpg",
    imdb: { id: "tt1827512", rating: 7.4, votes: 20159 },
    tomato: {
      meter: 96,
      image: "certified",
      rating: 8,
      reviews: 119,
      fresh: 114,
      consensus:
        "Thanks to the Dardenne brothers' typically fine direction, The Kid with a Bike is a heart-wrenching, thematically and spiritually rich drama.",
      userMeter: 76,
      userRating: 3.8,
      userReviews: 25099
    },
    metacritic: 87,
    awards: {
      wins: 9,
      nominations: 26,
      text:
        "Nominated for 1 Golden Globe. Another 9 wins \u0026 26 nominations."
    },
    type: "movie"
  },
  {
    title: "Trail of the Pink Panther",
    year: 1982,
    rated: "PG",
    runtime: 96,
    countries: ["UK", "USA"],
    genres: ["Comedy", "Crime", "Mystery"],
    director: "Blake Edwards",
    writers: [
      "Blake Edwards",
      "Frank Waldman",
      "Tom Waldman",
      "Blake Edwards",
      "Geoffrey Edwards"
    ],
    actors: ["Peter Sellers", "David Niven", "Herbert Lom", "Richard Mulligan"],
    plot:
      "Inspector Clouseau mysteriously disappears and a journalist attempts to uncover the mystery. New scenes are interspersed with old footage of Peter Sellers from the previous films.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTkwMDQ3NTM1N15BMl5BanBnXkFtZTcwODgyMTM4NA@@._V1_SX300.jpg",
    imdb: { id: "tt0084814", rating: 4.9, votes: 7106 },
    awards: { wins: 0, nominations: 0, text: "" },
    type: "movie"
  },
  {
    title: "False Trail",
    year: 2011,
    rated: null,
    runtime: 129,
    countries: ["Sweden"],
    genres: ["Crime", "Mystery", "Thriller"],
    director: "Kjell Sundvall",
    writers: ["Björn Carlström", "Stefan Thunberg"],
    actors: [
      "Rolf Lassgård",
      "Peter Stormare",
      "Annika Nordin",
      "Kim Tjernström"
    ],
    plot:
      "The sequel to Jagarna (1996), the film concerns Erik who is asked to return to his hometown in Sweden to solve a brutal murder. Although hesitant to go back due to unfavourable memories of ...",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTY2NjA4MjgwOF5BMl5BanBnXkFtZTcwMjI2MzYyNw@@._V1_SX300.jpg",
    imdb: { id: "tt1560671", rating: 6.5, votes: 3579 },
    awards: { wins: 0, nominations: 0, text: "" },
    type: "movie"
  },
  {
    title: "Anacondas: Trail of Blood",
    year: 2009,
    rated: "R",
    runtime: 89,
    countries: ["Romania", "USA"],
    genres: ["Action", "Horror", "Sci-Fi"],
    director: "Don E. FauntLeRoy",
    writers: ["David C. Olson"],
    actors: [
      "Crystal Allen",
      "Linden Ashby",
      "Danny Midwinter",
      "Calin Stanciu"
    ],
    plot:
      "A genetically created Anaconda, cut in half, regenerates itself into two aggressive giant snakes, due to the Blood Orchid.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTc5MTU4OTk5MF5BMl5BanBnXkFtZTcwNDM2NjU1Mg@@._V1_SX300.jpg",
    imdb: { id: "tt1150934", rating: 3, votes: 3061 },
    awards: { wins: 0, nominations: 0, text: "" },
    type: "movie"
  },
  {
    title: "The Hallelujah Trail",
    year: 1965,
    rated: "APPROVED",
    runtime: 165,
    countries: ["USA"],
    genres: ["Comedy", "Western"],
    director: "John Sturges",
    writers: ["William Gulick", "John Gay"],
    actors: ["Burt Lancaster", "Lee Remick", "Jim Hutton", "Pamela Tiffin"],
    plot:
      "A wagon train heads for Denver with a cargo of whisky for the miners. Chaos ensues as the Temperance League, the US cavalry, the miners and the local Indians all try to take control of the ...",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTU1MDI2NTc5Nl5BMl5BanBnXkFtZTcwODA5MjkzNA@@._V1_SX300.jpg",
    imdb: { id: "tt0059250", rating: 6.6, votes: 2518 },
    awards: { wins: 0, nominations: 1, text: "1 nomination." },
    type: "movie"
  },
  {
    title: "HOUBA! On the Trail of the Marsupilami",
    year: 2012,
    rated: null,
    runtime: 105,
    countries: ["France", "Belgium"],
    genres: ["Adventure", "Comedy", "Family"],
    director: "Alain Chabat",
    writers: ["Alain Chabat", "Jeremy Doner", "André Franquin"],
    actors: ["Jamel Debbouze", "Alain Chabat", "Fred Testot", "Lambert Wilson"],
    plot:
      "When reporter Dan Geraldo (Alain Chabat) arrives in Palombia to hunt for a scoop, he never suspects that he is about to make an incredible discovery... With his resourceful local guide ...",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BOTU0MzI0MDkwOV5BMl5BanBnXkFtZTgwNDg2MTAwMTE@._V1_SX300.jpg",
    imdb: { id: "tt1723642", rating: 5.5, votes: 2486 },
    awards: { wins: 0, nominations: 0, text: "" },
    type: "movie"
  },
  {
    title: "The Big Trail",
    year: 1930,
    rated: "PASSED",
    runtime: 125,
    countries: ["USA"],
    genres: ["Adventure", "Western", "Romance"],
    director: "Raoul Walsh, Louis R. Loeffler",
    writers: ["Hal G. Evarts"],
    actors: [
      "John Wayne",
      "Marguerite Churchill",
      "El Brendel",
      "Tully Marshall"
    ],
    plot:
      "Breck Coleman leads hundreds of settlers in covered wagons from the Mississippi River to their destiny out West.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTcxNTY3MTUyNl5BMl5BanBnXkFtZTgwMDM2ODAyMjE@._V1_SX300.jpg",
    imdb: { id: "tt0020691", rating: 7.3, votes: 2370 },
    awards: { wins: 1, nominations: 0, text: "1 win." },
    type: "movie"
  },
  {
    title: "Santa Fe Trail",
    year: 1940,
    rated: "NOT RATED",
    runtime: 110,
    countries: ["USA"],
    genres: ["Adventure", "Biography", "Drama"],
    director: "Michael Curtiz",
    writers: ["Robert Buckner"],
    actors: [
      "Errol Flynn",
      "Olivia de Havilland",
      "Raymond Massey",
      "Ronald Reagan"
    ],
    plot:
      "The story of Jeb Stuart, his romance with Kit Carson Holliday, friendship with George Custer and battles against John Brown in the days leading up to the outbreak of the American Civil War.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMjA5MjAyNzc1OF5BMl5BanBnXkFtZTcwOTU0NzYyMQ@@._V1_SX300.jpg",
    imdb: { id: "tt0033021", rating: 6.3, votes: 2208 },
    awards: { wins: 0, nominations: 0, text: "" },
    type: "movie"
  },
  {
    title: "Crossfire Trail",
    year: 2001,
    rated: "NOT RATED",
    runtime: 92,
    countries: ["USA"],
    genres: ["Action", "Western"],
    director: "Simon Wincer",
    writers: ["Louis L'Amour", "Charles Robert Carner"],
    actors: [
      "Tom Selleck",
      "Virginia Madsen",
      "Wilford Brimley",
      "David O'Hara"
    ],
    plot:
      "Rafe Covington promises a dying friend that he'll watch over the man's wife and ranch after he's gone. When Rafe gets to his friend's ranch, he finds that Barkow, the local power in town, ...",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTcxMjU0NDIxOF5BMl5BanBnXkFtZTcwNDY3MTgxMQ@@._V1_SX300.jpg",
    imdb: { id: "tt0218127", rating: 7, votes: 1960 },
    awards: { wins: 1, nominations: 0, text: "1 win." },
    type: "movie"
  },
  {
    title: "MacGyver: Trail to Doomsday",
    year: 1994,
    rated: null,
    runtime: 93,
    countries: ["USA"],
    genres: ["Action", "Adventure"],
    director: "Charles Correll",
    writers: ["Lee David Zlotoff", "John Considine"],
    actors: [
      "Richard Dean Anderson",
      "Beatie Edney",
      "Peter Egan",
      "Alun Armstrong"
    ],
    plot:
      "A close friend of MacGyver is murdered. In searching for a reason for this assassination MacGyver discovers a secret nuclear weapons plant right in the center of Britain.",
    poster: null,
    imdb: { id: "tt0110420", rating: 6.4, votes: 1069 },
    awards: { wins: 0, nominations: 0, text: "" },
    type: "movie"
  },
  {
    title: "Where the Trail Ends",
    year: 2012,
    rated: null,
    runtime: 81,
    countries: ["Argentina", "Canada", "China", "Nepal", "USA"],
    genres: ["Documentary", "Adventure", "Drama"],
    director: "Jeremy Grant",
    writers: [],
    actors: [
      "Darren Berrecloth",
      "James Doerfling",
      "Andreu Lacondeguy",
      "Kurt Sorge"
    ],
    plot:
      "Where the Trail Ends is a film following the worlds top freeride mountain bikers as they search for untraveled terrain around the globe, ultimately shaping the future of big mountain free ...",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTQ5NDY5NzY3N15BMl5BanBnXkFtZTgwMTkzOTUzMjE@._V1_SX300.jpg",
    imdb: { id: "tt2509922", rating: 7.7, votes: 951 },
    awards: { wins: 1, nominations: 0, text: "1 win." },
    type: "movie"
  },
  {
    title: "All Quiet on the Western Front",
    year: 1930,
    rated: "UNRATED",
    runtime: 136,
    countries: ["USA"],
    genres: ["Drama", "War"],
    director: "Lewis Milestone",
    writers: [
      "Erich Maria Remarque",
      "Maxwell Anderson",
      "George Abbott",
      "Del Andrews",
      "C. Gardner Sullivan"
    ],
    actors: ["Louis Wolheim", "Lew Ayres", "John Wray", "Arnold Lucy"],
    plot:
      "A young soldier faces profound disillusionment in the soul-destroying horror of World War I.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BNTM5OTg2NDY1NF5BMl5BanBnXkFtZTcwNTQ4MTMwNw@@._V1_SX300.jpg",
    imdb: { id: "tt0020629", rating: 8.1, votes: 45511 },
    awards: {
      wins: 5,
      nominations: 2,
      text: "Won 2 Oscars. Another 5 wins \u0026 2 nominations."
    },
    type: "movie"
  },
  {
    title: "Sukiyaki Western Django",
    year: 2007,
    rated: "R",
    runtime: 121,
    countries: ["Japan"],
    genres: ["Action", "Western"],
    director: "Takashi Miike",
    writers: ["Takashi Miike", "Masa Nakamura"],
    actors: ["Hideaki Itô", "Masanobu Andô", "Kôichi Satô", "Kaori Momoi"],
    plot:
      "A revolver-wielding stranger crosses paths with two warring clans who are both on the hunt for a hidden treasure in a remote western town. Knowing his services are valuable to either side, he offers himself to the clan who will offer up the largest share of the wealth.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTIzMzkxNzMzM15BMl5BanBnXkFtZTcwNjQ3NDE4MQ@@._V1_SX300.jpg",
    imdb: { id: "tt0906665", rating: 6.3, votes: 12630 },
    tomato: {
      meter: 56,
      image: "rotten",
      rating: 5.7,
      reviews: 52,
      fresh: 29,
      consensus:
        "Inventive and off-kilter, the newest feast from J-Horror director Takashi Miike is super-sensory, self-referential and somewhat excessive.",
      userMeter: 57,
      userRating: 3.3,
      userReviews: 10236
    },
    metacritic: 55,
    awards: { wins: 4, nominations: 5, text: "4 wins \u0026 5 nominations." },
    type: "movie"
  },
  {
    title: "All Quiet on the Western Front",
    year: 1979,
    rated: "NOT RATED",
    runtime: 150,
    countries: ["USA", "UK"],
    genres: ["War", "Drama"],
    director: "Delbert Mann",
    writers: ["Paul Monash", "Erich Maria Remarque"],
    actors: [
      "Richard Thomas",
      "Ernest Borgnine",
      "Donald Pleasence",
      "Ian Holm"
    ],
    plot:
      "A young soldier faces profound disillusionment in the soul-destroying horror of World War I.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTk3MzgwOTUzN15BMl5BanBnXkFtZTYwNzc3OTc4._V1_SX300.jpg",
    imdb: { id: "tt0078753", rating: 7.1, votes: 5507 },
    awards: {
      wins: 1,
      nominations: 6,
      text: "Won 1 Golden Globe. Another 1 win \u0026 6 nominations."
    },
    type: "movie"
  },
  {
    title: "The Decline of Western Civilization Part II: The Metal Years",
    year: 1988,
    rated: "R",
    runtime: 93,
    countries: ["USA"],
    genres: ["Documentary", "Music"],
    director: "Penelope Spheeris",
    writers: [],
    actors: ["Steven Tyler", "Joe Perry", "Alice Cooper", "Gene Simmons"],
    plot: null,
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTk2MDMxNjM5MV5BMl5BanBnXkFtZTcwNjI2NDAxMw@@._V1_SX300.jpg",
    imdb: { id: "tt0094980", rating: 7.3, votes: 2109 },
    awards: { wins: 0, nominations: 0, text: "" },
    type: "movie"
  },
  {
    title: "The Decline of Western Civilization",
    year: 1981,
    rated: "NOT RATED",
    runtime: 100,
    countries: ["USA"],
    genres: ["Documentary", "History", "Music"],
    director: "Penelope Spheeris",
    writers: ["Penelope Spheeris"],
    actors: ["Alice Bag Band", "Alice Bag", "Claude Bessey", "Black Flag"],
    plot:
      "The Los Angeles punk music scene circa 1980 is the focus of this film. With Alice Bag Band, Black Flag, Catholic Discipline, Circle Jerks, Fear, Germs, and X.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTkzOTg3MzUxMl5BMl5BanBnXkFtZTcwMDg1OTM2MQ@@._V1_SX300.jpg",
    imdb: { id: "tt0082252", rating: 7.8, votes: 1874 },
    awards: { wins: 0, nominations: 0, text: "" },
    type: "movie"
  },
  {
    title: "Brazilian Western",
    year: 2013,
    rated: null,
    runtime: 108,
    countries: ["Brazil"],
    genres: ["Crime", "Drama", "Romance"],
    director: "René Sampaio",
    writers: [
      "Victor Atherino",
      "Marcos Bernstein",
      "José Carvalho",
      "Renato Russo"
    ],
    actors: [
      "Fabrício Boliveira",
      "Isis Valverde",
      "Felipe Abib",
      "Antonio Calloni"
    ],
    plot:
      "Brazilian Western is an adaptation of the eponymous song by Renato Russo a famous Brazilian singer and composer who in the style of Bob Dylan knew how to delight crowds by telling stories ...",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTQ0NjcwNjk3OF5BMl5BanBnXkFtZTgwNTc4NjU0MzE@._V1_SX300.jpg",
    imdb: { id: "tt1869416", rating: 6.7, votes: 1767 },
    awards: { wins: 7, nominations: 6, text: "7 wins \u0026 6 nominations." },
    type: "movie"
  },
  {
    title: "Western Union",
    year: 1941,
    rated: "APPROVED",
    runtime: 95,
    countries: ["USA"],
    genres: ["History", "Western"],
    director: "Fritz Lang",
    writers: ["Zane Grey", "Robert Carson"],
    actors: [
      "Robert Young",
      "Randolph Scott",
      "Dean Jagger",
      "Virginia Gilmore"
    ],
    plot:
      "When Edward Creighton leads the construction of the Western Union to unite East with West, he hires a Western reformed outlaw and a tenderfoot Eastern surveyor.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTUwNTEyMzQxNV5BMl5BanBnXkFtZTgwMTEwMzg4MjE@._V1_SX300.jpg",
    imdb: { id: "tt0034384", rating: 6.9, votes: 1578 },
    awards: { wins: 0, nominations: 0, text: "" },
    type: "movie"
  },
  {
    title: "Western",
    year: 1997,
    rated: null,
    runtime: 124,
    countries: ["France"],
    genres: ["Comedy", "Romance"],
    director: "Manuel Poirier",
    writers: ["Jean-François Goyet", "Manuel Poirier", "Manuel Poirier"],
    actors: [
      "Sergi López",
      "Sacha Bourdo",
      "Élisabeth Vitali",
      "Marie Matheron"
    ],
    plot:
      "Catalonian Paco is a traveling rep for a shoe manufacturer. When he stops to pick up Russian emigree hitchhiker Nino, Paco soon finds himself on the side of the road with everything stolen ...",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BNzQ0MjA4NzcyM15BMl5BanBnXkFtZTcwMTM0NTkxMQ@@._V1_SX300.jpg",
    imdb: { id: "tt0120494", rating: 6.9, votes: 938 },
    awards: { wins: 5, nominations: 7, text: "5 wins \u0026 7 nominations." },
    type: "movie"
  },
  {
    title: "Total western",
    year: 2000,
    rated: null,
    runtime: 84,
    countries: ["France"],
    genres: ["Crime", "Drama", "Thriller"],
    director: "Eric Rochant",
    writers: ["Laurent Chalumeau", "Eric Rochant"],
    actors: [
      "Samuel Le Bihan",
      "Jean-Pierre Kalfon",
      "Jean-François Stévenin",
      "Kahena Saighi"
    ],
    plot:
      "After a drug deal gone wrong, Bédé goes into hiding in the countryside at a reformative school for criminal youth. His location is found out, and he and the pupils have to protect themselves with whatever means they have.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTI3MzYyOTQ4MF5BMl5BanBnXkFtZTcwNTgxNDgxMQ@@._V1_SX300.jpg",
    imdb: { id: "tt0216750", rating: 6.4, votes: 585 },
    awards: { wins: 0, nominations: 0, text: "" },
    type: "movie"
  },
  {
    title: "Western Spaghetti",
    year: 2008,
    rated: null,
    runtime: 2,
    countries: ["USA"],
    genres: ["Short"],
    director: "PES",
    writers: ["PES"],
    actors: [],
    plot:
      "Everyday objects become delicious ingredients as we learn how to cook spaghetti through stop-motion photography.",
    poster: null,
    imdb: { id: "tt1352849", rating: 7.2, votes: 532 },
    awards: { wins: 2, nominations: 2, text: "2 wins \u0026 2 nominations." },
    type: "movie"
  },
  {
    title: "Midnight Cowboy",
    year: 1969,
    rated: "X",
    runtime: 113,
    countries: ["USA"],
    genres: ["Drama"],
    director: "John Schlesinger",
    writers: ["Waldo Salt", "James Leo Herlihy"],
    actors: ["Dustin Hoffman", "Jon Voight", "Sylvia Miles", "John McGiver"],
    plot:
      "A naive hustler goes to New York to seek personal fortune but in the process finds himself a new friend.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTMzMjY1OTE5OV5BMl5BanBnXkFtZTcwMjUzNTk3NA@@._V1_SX300.jpg",
    imdb: { id: "tt0064665", rating: 7.9, votes: 72407 },
    awards: {
      wins: 24,
      nominations: 15,
      text: "Won 3 Oscars. Another 24 wins \u0026 15 nominations."
    },
    type: "movie"
  },
  {
    title: "Cowboy Bebop: The Movie",
    year: 2001,
    rated: "R",
    runtime: 115,
    countries: ["Japan", "USA"],
    genres: ["Animation", "Action", "Crime"],
    director: "Shinichirô Watanabe, Hiroyuki Okiura",
    writers: ["Marc Handler", "Keiko Nobumoto", "Hajime Yatate"],
    actors: [
      "Kôichi Yamadera",
      "Unshô Ishizuka",
      "Megumi Hayashibara",
      "Aoi Tada"
    ],
    plot:
      "A terrorist explosion releases a deadly virus on the masses, and it's up the bounty-hunting Bebop crew to catch the cold-blooded culprit.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTA1ODIxMDYyMzFeQTJeQWpwZ15BbWU2MDUwOTQ5Ng@@._V1_SX300.jpg",
    imdb: { id: "tt0275277", rating: 7.9, votes: 29239 },
    tomato: {
      meter: 64,
      image: "fresh",
      rating: 6.3,
      reviews: 70,
      fresh: 45,
      consensus:
        "This may be strictly for anime junkies, but they'll find much to like about Cowboy Bebop's casual violence and cool dialogue.",
      userMeter: 90,
      userRating: 3.9,
      userReviews: 51967
    },
    metacritic: 61,
    awards: { wins: 0, nominations: 1, text: "1 nomination." },
    type: "movie"
  },
  {
    title: "Drugstore Cowboy",
    year: 1989,
    rated: "R",
    runtime: 102,
    countries: ["USA"],
    genres: ["Crime", "Drama"],
    director: "Gus Van Sant",
    writers: ["James Fogle", "Gus Van Sant", "Daniel Yost"],
    actors: ["Matt Dillon", "Kelly Lynch", "James Le Gros", "Heather Graham"],
    plot:
      "A pharmacy-robbing dope fiend and his crew pop pills and evade the law.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTQyNjA0MTYzNV5BMl5BanBnXkFtZTcwMDQ5NjU0MQ@@._V1_SX300.jpg",
    imdb: { id: "tt0097240", rating: 7.4, votes: 24373 },
    tomato: {
      meter: 100,
      image: "fresh",
      rating: 8,
      reviews: 27,
      fresh: 27,
      consensus: null,
      userMeter: 85,
      userRating: 3.7,
      userReviews: 22398
    },
    metacritic: 82,
    awards: { wins: 11, nominations: 7, text: "11 wins \u0026 7 nominations." },
    type: "movie"
  },
  {
    title: "Urban Cowboy",
    year: 1980,
    rated: "PG",
    runtime: 132,
    countries: ["USA"],
    genres: ["Drama", "Romance", "Western"],
    director: "James Bridges",
    writers: ["Aaron Latham", "James Bridges", "Aaron Latham"],
    actors: [
      "John Travolta",
      "Debra Winger",
      "Scott Glenn",
      "Madolyn Smith Osborne"
    ],
    plot:
      "Bud is a young man from the country who learns about life and love in a Houston bar.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTM5OTk1NjkwMV5BMl5BanBnXkFtZTgwMzg0MjEyMDE@._V1_SX300.jpg",
    imdb: { id: "tt0081696", rating: 6.2, votes: 9746 },
    awards: {
      wins: 0,
      nominations: 4,
      text: "Nominated for 2 Golden Globes. Another 4 nominations."
    },
    type: "movie"
  },
  {
    title: "The Cowboy Way",
    year: 1994,
    rated: "PG-13",
    runtime: 102,
    countries: ["USA"],
    genres: ["Action", "Comedy", "Drama"],
    director: "Gregg Champion",
    writers: [
      "Robert C. Thompson",
      "William D. Wittliff",
      "William D. Wittliff"
    ],
    actors: [
      "Woody Harrelson",
      "Kiefer Sutherland",
      "Dylan McDermott",
      "Ernie Hudson"
    ],
    plot:
      "Two buddies and championship rodeo partners travel to New York to find their missing friend, Nacho Salazar, after he disappears after travelling to New York City to pick up his daughter, ...",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTY1OTQ2OTY5OV5BMl5BanBnXkFtZTYwMzg3MTk5._V1_SX300.jpg",
    imdb: { id: "tt0109493", rating: 5.7, votes: 6000 },
    awards: { wins: 0, nominations: 0, text: "" },
    type: "movie"
  },
  {
    title: "Carry on Cowboy",
    year: 1965,
    rated: null,
    runtime: 93,
    countries: ["UK"],
    genres: ["Comedy", "Western"],
    director: "Gerald Thomas",
    writers: ["Talbot Rothwell"],
    actors: ["Sidney James", "Kenneth Williams", "Jim Dale", "Charles Hawtrey"],
    plot:
      'Stodge City is in the grip of the Rumpo Kid and his gang. Mistaken identity again takes a hand as a "sanitary engineer" (plumber) by the name of Marshal P. Knutt is mistaken for a law marshal! Being the conscientious sort, Marshal tries to help the town get rid of Rumpo, and a showdown is inevitable. Marshal has two aids - revenge-seeking Annie Oakley and his sanitary expertise...',
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTk4NDU3MDMwMF5BMl5BanBnXkFtZTcwNTQyNDYxMQ@@._V1_SX300.jpg",
    imdb: { id: "tt0059014", rating: 6.2, votes: 1807 },
    awards: { wins: 0, nominations: 0, text: "" },
    type: "movie"
  },
  {
    title: "Cowboy",
    year: 1958,
    rated: "APPROVED",
    runtime: 92,
    countries: ["USA"],
    genres: ["Western"],
    director: "Delmer Daves",
    writers: ["Frank Harris", "Edmund H. North", "Dalton Trumbo"],
    actors: ["Glenn Ford", "Jack Lemmon", "Anna Kashfi", "Brian Donlevy"],
    plot:
      "Chicago hotel clerk Frank Harris dreams of life as a cowboy, and he gets his chance when, jilted by the father of the woman he loves, he joins Tom Reece and his cattle-driving outfit. Soon,...",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTQ3NzEwMTQ5MV5BMl5BanBnXkFtZTcwNDc5NjUyMQ@@._V1_SX300.jpg",
    imdb: { id: "tt0051496", rating: 6.8, votes: 1696 },
    awards: {
      wins: 0,
      nominations: 1,
      text: "Nominated for 1 Oscar. Another 1 nomination."
    },
    type: "movie"
  },
  {
    title: "Ride 'Em Cowboy",
    year: 1942,
    rated: null,
    runtime: 82,
    countries: ["USA"],
    genres: ["Comedy", "Western", "Musical"],
    director: "Arthur Lubin",
    writers: [
      "Edmund L. Hartmann",
      "Harold Shumate",
      "True Boardman",
      "John Grant"
    ],
    actors: ["Bud Abbott", "Lou Costello", "Dick Foran", "Anne Gwynne"],
    plot:
      "Two peanut vendors at a rodeo show get in trouble with their boss and hide out on a railroad train heading west. They get jobs as cowboys on a dude ranch, despite the fact that neither of ...",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTcyMjkwNjY2Ml5BMl5BanBnXkFtZTgwOTM3ODg3MjE@._V1_SX300.jpg",
    imdb: { id: "tt0035252", rating: 7.1, votes: 1072 },
    awards: { wins: 0, nominations: 0, text: "" },
    type: "movie"
  },
  {
    title: "The Cowboy and the Lady",
    year: 1938,
    rated: "PASSED",
    runtime: 91,
    countries: ["USA"],
    genres: ["Comedy", "Drama", "Romance"],
    director: "H.C. Potter, Stuart Heisler, William Wyler",
    writers: ["S.N. Behrman", "Sonya Levien", "Leo McCarey", "Frank R. Adams"],
    actors: ["Gary Cooper", "Merle Oberon", "Patsy Kelly", "Walter Brennan"],
    plot:
      "When a beautiful socialite masquerades as a maid, she becomes involved with an unpretentious, plain-spoken cowboy who's unaware of her true identity.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTg2ODE1NDc5OV5BMl5BanBnXkFtZTcwNTcwMjIyMQ@@._V1_SX300.jpg",
    imdb: { id: "tt0030018", rating: 6.7, votes: 762 },
    awards: {
      wins: 0,
      nominations: 2,
      text: "Won 1 Oscar. Another 2 nominations."
    },
    type: "movie"
  },
  {
    title: "Quick Gun Murugun: Misadventures of an Indian Cowboy",
    year: 2009,
    rated: null,
    runtime: 97,
    countries: ["India"],
    genres: ["Action", "Comedy", "Drama"],
    director: "Shashanka Ghosh",
    writers: ["Rajesh Devraj"],
    actors: ["Rajendraprasad", "Nasser", "Rambha", "Raju Sundaram"],
    plot:
      "A once-dead vegetarian cowboy is sent back to life to battle a beef-eating villain.",
    poster: null,
    imdb: { id: "tt1176911", rating: 6, votes: 656 },
    awards: { wins: 0, nominations: 0, text: "" },
    type: "movie"
  },
  {
    title: "Top Gun",
    year: 1986,
    rated: "PG",
    runtime: 110,
    countries: ["USA"],
    genres: ["Action", "Drama", "Romance"],
    director: "Tony Scott",
    writers: ["Jim Cash", "Jack Epps Jr.", "Ehud Yonay"],
    actors: ["Tom Cruise", "Kelly McGillis", "Val Kilmer", "Anthony Edwards"],
    plot:
      "As students at the United States Navy's elite fighter weapons school compete to be best in the class, one daring young pilot learns a few things from a civilian instructor that are not taught in the classroom.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTY3ODg4OTU3Nl5BMl5BanBnXkFtZTYwMjI1Nzg4._V1_SX300.jpg",
    imdb: { id: "tt0092099", rating: 6.9, votes: 207728 },
    awards: {
      wins: 9,
      nominations: 5,
      text: "Won 1 Oscar. Another 9 wins \u0026 5 nominations."
    },
    type: "movie"
  },
  {
    title: "The Naked Gun: From the Files of Police Squad!",
    year: 1988,
    rated: "PG-13",
    runtime: 85,
    countries: ["USA"],
    genres: ["Comedy", "Crime"],
    director: "David Zucker",
    writers: [
      "Jerry Zucker",
      "Jim Abrahams",
      "David Zucker",
      "Pat Proft",
      "Jim Abrahams",
      "David Zucker",
      "Jerry Zucker"
    ],
    actors: [
      "Leslie Nielsen",
      "Priscilla Presley",
      "Ricardo Montalban",
      "George Kennedy"
    ],
    plot:
      "Incompetent cop Frank Drebin has to foil an attempt to assassinate Queen Elizabeth II.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTQwMDczODE4M15BMl5BanBnXkFtZTcwNTM1NDIyMQ@@._V1_SX300.jpg",
    imdb: { id: "tt0095705", rating: 7.6, votes: 107155 },
    tomato: {
      meter: 86,
      image: "certified",
      rating: 7.3,
      reviews: 51,
      fresh: 44,
      consensus:
        "The Naked Gun is chock full of gags that are goofy, unapologetically crass, and ultimately hilarious.",
      userMeter: 84,
      userRating: 3.3,
      userReviews: 176015
    },
    metacritic: 76,
    awards: { wins: 0, nominations: 0, text: "" },
    type: "movie"
  },
  {
    title: "The Naked Gun 2½: The Smell of Fear",
    year: 1991,
    rated: "PG-13",
    runtime: 85,
    countries: ["USA"],
    genres: ["Comedy", "Crime"],
    director: "David Zucker",
    writers: [
      "Jim Abrahams",
      "David Zucker",
      "Jerry Zucker",
      "David Zucker",
      "Pat Proft"
    ],
    actors: [
      "Leslie Nielsen",
      "Priscilla Presley",
      "George Kennedy",
      "O.J. Simpson"
    ],
    plot:
      "Lieutenant Drebin discovers that his ex-girlfriend's new beau is involved in a plot to kidnap a scientist who advocates solar energy.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTIyNTI5NDE1MF5BMl5BanBnXkFtZTYwMDAwMDY5._V1_SX300.jpg",
    imdb: { id: "tt0102510", rating: 6.8, votes: 79080 },
    awards: { wins: 2, nominations: 1, text: "2 wins \u0026 1 nomination." },
    type: "movie"
  },
  {
    title: "Naked Gun 33 1/3: The Final Insult",
    year: 1994,
    rated: "PG-13",
    runtime: 83,
    countries: ["USA"],
    genres: ["Comedy", "Crime"],
    director: "Peter Segal",
    writers: [
      "Pat Proft",
      "David Zucker",
      "Robert LoCash",
      "Jim Abrahams",
      "David Zucker",
      "Jerry Zucker"
    ],
    actors: [
      "Leslie Nielsen",
      "Priscilla Presley",
      "George Kennedy",
      "O.J. Simpson"
    ],
    plot:
      "Frank Drebin comes out of retirement to help Police Squad infiltrate a gang of terrorists planning to detonate a bomb at the Academy Awards.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTMzNzEwODQzN15BMl5BanBnXkFtZTcwNTgwMzcxMQ@@._V1_SX300.jpg",
    imdb: { id: "tt0110622", rating: 6.4, votes: 72956 },
    awards: { wins: 3, nominations: 0, text: "3 wins." },
    type: "movie"
  },
  {
    title: "The Man with the Golden Gun",
    year: 1974,
    rated: "PG",
    runtime: 125,
    countries: ["UK", "USA"],
    genres: ["Action", "Adventure", "Thriller"],
    director: "Guy Hamilton",
    writers: ["Richard Maibaum", "Tom Mankiewicz"],
    actors: ["Roger Moore", "Christopher Lee", "Britt Ekland", "Maud Adams"],
    plot:
      "James Bond is led to believe that he is targeted by the world's most expensive assassin while he attempts to recover sensitive solar cell technology that is being sold to the highest bidder.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BODg3NjQ0MjMwN15BMl5BanBnXkFtZTcwNTY5MDg0NA@@._V1_SX300.jpg",
    imdb: { id: "tt0071807", rating: 6.8, votes: 70400 },
    awards: { wins: 1, nominations: 1, text: "1 win \u0026 1 nomination." },
    type: "movie"
  },
  {
    title: "Machine Gun Preacher",
    year: 2011,
    rated: "R",
    runtime: 129,
    countries: ["USA"],
    genres: ["Action", "Biography", "Crime"],
    director: "Marc Forster",
    writers: ["Jason Keller"],
    actors: [
      "Gerard Butler",
      "Michelle Monaghan",
      "Kathy Baker",
      "Michael Shannon"
    ],
    plot:
      "Sam Childers is a former drug-dealing biker tough guy who found God and became a crusader for hundreds of Sudanese children who've been forced to become soldiers.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BNDI0NDMzMDU3N15BMl5BanBnXkFtZTcwMTIzNjQzNg@@._V1_SX300.jpg",
    imdb: { id: "tt1586752", rating: 6.8, votes: 51064 },
    tomato: {
      meter: 29,
      image: "rotten",
      rating: 4.9,
      reviews: 111,
      fresh: 32,
      consensus:
        "There's a complex man at the center of Machine Gun Preacher but the movie is too shapeless and emotionally vacant to bring his story to life.",
      userMeter: 62,
      userRating: 3.5,
      userReviews: 18129
    },
    metacritic: 43,
    awards: { wins: 0, nominations: 0, text: "" },
    type: "movie"
  },
  {
    title: "The Way of the Gun",
    year: 2000,
    rated: "R",
    runtime: 119,
    countries: ["USA"],
    genres: ["Action", "Crime", "Drama"],
    director: "Christopher McQuarrie",
    writers: ["Christopher McQuarrie"],
    actors: [
      "Ryan Phillippe",
      "Benicio Del Toro",
      "Juliette Lewis",
      "Taye Diggs"
    ],
    plot:
      "Two criminal drifters without sympathy get more than they bargained for after kidnapping and holding for ransom the surrogate mother of a powerful and shady man.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTc0MjAwNTExNV5BMl5BanBnXkFtZTcwNzI4NjEyMQ@@._V1_SX300.jpg",
    imdb: { id: "tt0202677", rating: 6.7, votes: 26875 },
    tomato: {
      meter: 48,
      image: "rotten",
      rating: 5.4,
      reviews: 105,
      fresh: 50,
      consensus:
        "The Way of the Gun has some good parts, but overall, the movie is derivative, sloppy, and sluggish.",
      userMeter: 70,
      userRating: 3.3,
      userReviews: 31225
    },
    metacritic: 49,
    awards: { wins: 0, nominations: 0, text: "" },
    type: "movie"
  },
  {
    title: "Son of a Gun",
    year: 2014,
    rated: "R",
    runtime: 108,
    countries: ["Australia", "UK", "Canada"],
    genres: ["Action", "Crime", "Drama"],
    director: "Julius Avery",
    writers: ["Julius Avery", "John Collee"],
    actors: [
      "Ewan McGregor",
      "Brendan Kerkvliet",
      "Brenton Thwaites",
      "Alicia Vikander"
    ],
    plot:
      "JR busts out of prison with Brendan Lynch, Australia's most notorious criminal, and joins Lynch's gang for a gold heist that soon pits the two men against one another.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTg4MjUxODczM15BMl5BanBnXkFtZTgwMDY4MjY0MzE@._V1_SX300.jpg",
    imdb: { id: "tt2452200", rating: 6.5, votes: 15810 },
    tomato: {
      meter: 63,
      image: "fresh",
      rating: 5.7,
      reviews: 64,
      fresh: 40,
      consensus:
        "Gritty, stylish, and smart, Son of a Gun serves up plenty of genre thrills while offering a refreshing change of pace for Ewan McGregor.",
      userMeter: 65,
      userRating: 3.7,
      userReviews: 6007
    },
    metacritic: 48,
    awards: { wins: 0, nominations: 2, text: "2 nominations." },
    type: "movie"
  },
  {
    title: "Johnny Got His Gun",
    year: 1971,
    rated: "R",
    runtime: 111,
    countries: ["USA"],
    genres: ["Drama", "War"],
    director: "Dalton Trumbo",
    writers: ["Dalton Trumbo", "Dalton Trumbo"],
    actors: ["Timothy Bottoms", "Kathy Fields", "Marsha Hunt", "Jason Robards"],
    plot:
      "Joe, a young American soldier, is hit by a mortar shell on the last day of World War I. He lies in a hospital bed in a fate worse than death --- a quadruple amputee who has lost his arms, ...",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BNjg5ODM0OTY1N15BMl5BanBnXkFtZTgwOTUzNDE3MjE@._V1_SX300.jpg",
    imdb: { id: "tt0067277", rating: 7.9, votes: 11267 },
    awards: {
      wins: 3,
      nominations: 2,
      text: "Nominated for 1 Golden Globe. Another 3 wins \u0026 2 nominations."
    },
    type: "movie"
  },
  {
    title: "Gun Crazy",
    year: 1950,
    rated: "PASSED",
    runtime: 86,
    countries: ["USA"],
    genres: ["Crime", "Drama", "Film-Noir"],
    director: "Joseph H. Lewis",
    writers: [
      "MacKinlay Kantor",
      "Dalton Trumbo",
      "MacKinlay Kantor",
      "Millard Kaufman"
    ],
    actors: ["Peggy Cummins", "John Dall", "Berry Kroeger", "Morris Carnovsky"],
    plot:
      "A well meaning crack shot husband is pressured by his beautiful marksman wife to go on an interstate robbery spree, where he finds out just how depraved and deadly she really is.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMjIyNjcyOTMyMV5BMl5BanBnXkFtZTgwMzU0MDgyMTE@._V1_SX300.jpg",
    imdb: { id: "tt0042530", rating: 7.7, votes: 7733 },
    awards: { wins: 1, nominations: 0, text: "1 win." },
    type: "movie"
  },
  {
    title: "The Texas Chainsaw Massacre",
    year: 2003,
    rated: "R",
    runtime: 98,
    countries: ["USA"],
    genres: ["Horror"],
    director: "Marcus Nispel",
    writers: ["Kim Henkel", "Tobe Hooper", "Scott Kosar"],
    actors: ["Jessica Biel", "Jonathan Tucker", "Erica Leerhsen", "Mike Vogel"],
    plot:
      "After picking up a traumatized young hitchhiker, five friends find themselves stalked and hunted by a deformed chainsaw-wielding killer and his family of equally psychopathic killers.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMjA4OTc0NDEzNF5BMl5BanBnXkFtZTcwNzI1MzAwMQ@@._V1_SX300.jpg",
    imdb: { id: "tt0324216", rating: 6.2, votes: 104245 },
    tomato: {
      meter: 36,
      image: "rotten",
      rating: 4.8,
      reviews: 155,
      fresh: 56,
      consensus:
        "An unnecessary remake that's more gory and less scary than the original.",
      userMeter: 57,
      userRating: 3.2,
      userReviews: 400019
    },
    metacritic: 38,
    awards: { wins: 4, nominations: 14, text: "4 wins \u0026 14 nominations." },
    type: "movie"
  },
  {
    title: "The Texas Chain Saw Massacre",
    year: 1974,
    rated: "R",
    runtime: 83,
    countries: ["USA"],
    genres: ["Horror"],
    director: "Tobe Hooper",
    writers: ["Kim Henkel", "Tobe Hooper"],
    actors: [
      "Marilyn Burns",
      "Allen Danziger",
      "Paul A. Partain",
      "William Vail"
    ],
    plot:
      "Five friends visiting their grandfather's house in the country are hunted and terrorized by a chain-saw wielding killer and his family of grave-robbing cannibals.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMjA0NDQ2MzMxMF5BMl5BanBnXkFtZTgwODg5MTkzMjE@._V1_SX300.jpg",
    imdb: { id: "tt0072271", rating: 7.5, votes: 91102 },
    tomato: {
      meter: 88,
      image: "fresh",
      rating: 7.9,
      reviews: 56,
      fresh: 49,
      consensus:
        "Thanks to a smart script and documentary-style camerawork, The Texas Chainsaw Massacre achieves start-to-finish suspense, making it a classic in low-budget exploitation cinema.",
      userMeter: 82,
      userRating: 3.4,
      userReviews: 201174
    },
    metacritic: 75,
    awards: { wins: 1, nominations: 1, text: "1 win \u0026 1 nomination." },
    type: "movie"
  },
  {
    title: "The Texas Chainsaw Massacre: The Beginning",
    year: 2006,
    rated: "R",
    runtime: 91,
    countries: ["USA"],
    genres: ["Horror"],
    director: "Jonathan Liebesman",
    writers: ["Sheldon Turner", "Sheldon Turner", "David J. Schow"],
    actors: ["Jordana Brewster", "Taylor Handley", "Diora Baird", "Matt Bomer"],
    plot:
      "On one last road trip before they're sent to serve in Vietnam, two brothers and their girlfriends get into an accident that calls their local sheriff to the scene. Thus begins a terrifying experience where the teens are taken to a secluded house of horrors, where a young, would-be killer is being nurtured.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTMwODg0NDgyNV5BMl5BanBnXkFtZTcwODE5OTMzMQ@@._V1_SX300.jpg",
    imdb: { id: "tt0420294", rating: 5.9, votes: 53862 },
    tomato: {
      meter: 12,
      image: "rotten",
      rating: 3.4,
      reviews: 83,
      fresh: 10,
      consensus:
        "The Texas Chainsaw Massacre: The Beginning is full of blood and gore, but not enough scares or a coherent story to make for a successful horror film.",
      userMeter: 53,
      userRating: 3.1,
      userReviews: 491304
    },
    metacritic: 29,
    awards: { wins: 0, nominations: 5, text: "5 nominations." },
    type: "movie"
  },
  {
    title: "Paris, Texas",
    year: 1984,
    rated: "R",
    runtime: 147,
    countries: ["West Germany", "France", "UK"],
    genres: ["Drama"],
    director: "Wim Wenders",
    writers: ["L.M. Kit Carson", "Sam Shepard"],
    actors: [
      "Harry Dean Stanton",
      "Sam Berry",
      "Bernhard Wicki",
      "Dean Stockwell"
    ],
    plot:
      "A man wanders out of the desert after a four year absence. His brother finds him, and together they return to L.A. to reunite the man with his young son. Soon after, he and the boy set out ...",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTUzMjU2MTA0MV5BMl5BanBnXkFtZTcwNjI2NzE5Mg@@._V1_SX300.jpg",
    imdb: { id: "tt0087884", rating: 8.1, votes: 46081 },
    awards: {
      wins: 15,
      nominations: 8,
      text:
        "Nominated for 1 Golden Globe. Another 15 wins \u0026 8 nominations."
    },
    type: "movie"
  },
  {
    title: "Texas Chainsaw 3D",
    year: 2013,
    rated: "R",
    runtime: 92,
    countries: ["USA"],
    genres: ["Horror", "Thriller"],
    director: "John Luessenhop",
    writers: [
      "Adam Marcus",
      "Debra Sullivan",
      "Kirsten McCallion",
      "Stephen Susco",
      "Adam Marcus",
      "Debra Sullivan",
      "Kim Henkel",
      "Tobe Hooper"
    ],
    actors: [
      "Alexandra Daddario",
      "Dan Yeager",
      "Trey Songz",
      "Scott Eastwood"
    ],
    plot:
      "A young woman travels to Texas to collect an inheritance; little does she know that an encounter with a chainsaw-wielding killer is part of the reward.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTQzMzAyNTE2N15BMl5BanBnXkFtZTcwNzM1NDg2OA@@._V1_SX300.jpg",
    imdb: { id: "tt1572315", rating: 4.8, votes: 33323 },
    awards: { wins: 2, nominations: 7, text: "2 wins \u0026 7 nominations." },
    type: "movie"
  },
  {
    title: "The Texas Chainsaw Massacre 2",
    year: 1986,
    rated: "X",
    runtime: 101,
    countries: ["USA"],
    genres: ["Comedy", "Horror"],
    director: "Tobe Hooper",
    writers: ["L.M. Kit Carson", "Tobe Hooper"],
    actors: [
      "Dennis Hopper",
      "Caroline Williams",
      "Jim Siedow",
      "Bill Moseley"
    ],
    plot:
      "A radio host is victimized by the cannibal family as a former Texas Marshall hunts them.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMzc3NjEwNTM1MF5BMl5BanBnXkFtZTcwNDU2NzI5NA@@._V1_SX300.jpg",
    imdb: { id: "tt0092076", rating: 5.5, votes: 18297 },
    awards: { wins: 1, nominations: 1, text: "1 win \u0026 1 nomination." },
    type: "movie"
  },
  {
    title: "Texas Chainsaw Massacre: The Next Generation",
    year: 1994,
    rated: "R",
    runtime: 95,
    countries: ["USA"],
    genres: ["Comedy", "Horror", "Thriller"],
    director: "Kim Henkel",
    writers: ["Kim Henkel", "Tobe Hooper", "Kim Henkel"],
    actors: [
      "Renée Zellweger",
      "Matthew McConaughey",
      "Robert Jacks",
      "Tonie Perensky"
    ],
    plot:
      "A group of teenagers get into a car crash in the Texas woods on prom night, and then wander into an old farmhouse that is home to Leatherface and his insane family of cannibalistic psychopaths.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTY4NjA4NzgyN15BMl5BanBnXkFtZTcwNDcyMjQyMQ@@._V1_SX300.jpg",
    imdb: { id: "tt0110978", rating: 3.1, votes: 14826 },
    awards: { wins: 0, nominations: 1, text: "1 nomination." },
    type: "movie"
  },
  {
    title: "From Dusk Till Dawn 2: Texas Blood Money",
    year: 1999,
    rated: "R",
    runtime: 88,
    countries: ["USA"],
    genres: ["Crime", "Horror", "Thriller"],
    director: "Scott Spiegel",
    writers: ["Scott Spiegel", "Boaz Yakin", "Scott Spiegel", "Duane Whitaker"],
    actors: ["Robert Patrick", "Bo Hopkins", "Duane Whitaker", "Muse Watson"],
    plot:
      "More people are turned into vampires as they go around spreading their evil satanic hate.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMjA2Nzc2NDEzMl5BMl5BanBnXkFtZTcwMTYzODcxMQ@@._V1_SX300.jpg",
    imdb: { id: "tt0120860", rating: 4, votes: 12527 },
    awards: { wins: 1, nominations: 0, text: "1 win." },
    type: "movie"
  },
  {
    title: "Leatherface: Texas Chainsaw Massacre III",
    year: 1990,
    rated: "X",
    runtime: 85,
    countries: ["USA"],
    genres: ["Horror", "Thriller"],
    director: "Jeff Burr",
    writers: ["Kim Henkel", "Tobe Hooper", "David J. Schow"],
    actors: ["Kate Hodge", "Ken Foree", "R.A. Mihailoff", "William Butler"],
    plot:
      "A California couple and a survivalist encounter the cannibal family.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTQyOTQwNDA3N15BMl5BanBnXkFtZTcwNjQ3NzQyMQ@@._V1_SX300.jpg",
    imdb: { id: "tt0099994", rating: 5.1, votes: 9440 },
    awards: { wins: 0, nominations: 1, text: "1 nomination." },
    type: "movie"
  },
  {
    title: "Happy, Texas",
    year: 1999,
    rated: "PG-13",
    runtime: 98,
    countries: ["USA"],
    genres: ["Comedy", "Crime", "Romance"],
    director: "Mark Illsley",
    writers: ["Ed Stone", "Mark Illsley", "Phil Reeves"],
    actors: ["Steve Zahn", "Jeremy Northam", "William H. Macy", "Ally Walker"],
    plot:
      "Two escaped convicts arrive in the town of Happy, Texas, where they are mistaken for a gay couple who is to host the town's Little Miss Fresh Squeezed beauty pageant. Enjoying the celebrity...",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTg3MjE0ODkwOV5BMl5BanBnXkFtZTcwNjE4NzUxMQ@@._V1_SX300.jpg",
    imdb: { id: "tt0162360", rating: 6.3, votes: 8607 },
    tomato: {
      meter: 81,
      image: "certified",
      rating: 6.7,
      reviews: 52,
      fresh: 42,
      consensus:
        "A smart, light-hearted romantic comedy, Happy, Texas uses its well-written script and exceptional cast to prove there's still life left in the fish-out-of-water caper genre.",
      userMeter: 54,
      userRating: 3.1,
      userReviews: 7804
    },
    metacritic: 62,
    awards: { wins: 6, nominations: 6, text: "6 wins \u0026 6 nominations." },
    type: "movie"
  },
  {
    title: "Bill \u0026 Ted's Excellent Adventure",
    year: 1989,
    rated: "PG",
    runtime: 90,
    countries: ["USA"],
    genres: ["Adventure", "Comedy", "Sci-Fi"],
    director: "Stephen Herek",
    writers: ["Chris Matheson", "Ed Solomon"],
    actors: ["Keanu Reeves", "Alex Winter", "George Carlin", "Terry Camilleri"],
    plot:
      "Two seemingly dumb teens struggle to prepare a historical presentation with the help of a time machine.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTk3Mjk5MzI3OF5BMl5BanBnXkFtZTcwMTY4MzcyNA@@._V1_SX300.jpg",
    imdb: { id: "tt0096928", rating: 6.9, votes: 81746 },
    tomato: {
      meter: 79,
      image: "certified",
      rating: 6.5,
      reviews: 43,
      fresh: 34,
      consensus:
        "Keanu Reeves and Alex Winter are just charming, goofy, and silly enough to make this fluffy time-travel Adventure work.",
      userMeter: 75,
      userRating: 3.3,
      userReviews: 375166
    },
    metacritic: 44,
    awards: { wins: 0, nominations: 3, text: "3 nominations." },
    type: "movie"
  },
  {
    title: "Pee-wee's Big Adventure",
    year: 1985,
    rated: "PG",
    runtime: 91,
    countries: ["USA"],
    genres: ["Adventure", "Comedy", "Family"],
    director: "Tim Burton",
    writers: ["Phil Hartman", "Paul Reubens", "Michael Varhol"],
    actors: [
      "Paul Reubens",
      "Elizabeth Daily",
      "Mark Holton",
      "Diane Salinger"
    ],
    plot:
      "When eccentric man-child Pee-Wee Herman gets his beloved bike stolen in broad daylight, he sets out across the U.S. on the adventure of his life.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMjEyMjI3MjAxMF5BMl5BanBnXkFtZTYwOTMxNzk4._V1_SX300.jpg",
    imdb: { id: "tt0089791", rating: 7, votes: 39692 },
    tomato: {
      meter: 88,
      image: "certified",
      rating: 7.8,
      reviews: 43,
      fresh: 38,
      consensus:
        "Pee-Wee's Big Adventure brings Paul Reubens' famous character to the big screen intact, along with enough inspired silliness to dazzle children of all ages.",
      userMeter: 79,
      userRating: 3,
      userReviews: 112623
    },
    metacritic: 47,
    awards: { wins: 1, nominations: 2, text: "1 win \u0026 2 nominations." },
    type: "movie"
  },
  {
    title: "The Poseidon Adventure",
    year: 1972,
    rated: "PG",
    runtime: 117,
    countries: ["USA"],
    genres: ["Action", "Adventure", "Drama"],
    director: "Ronald Neame, Irwin Allen",
    writers: ["Paul Gallico", "Stirling Silliphant", "Wendell Mayes"],
    actors: ["Gene Hackman", "Ernest Borgnine", "Red Buttons", "Carol Lynley"],
    plot:
      "A group of passengers struggle to survive and escape when their ocean liner completely capsizes at sea.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTczNDU2MzIzNl5BMl5BanBnXkFtZTYwNjg0MDY5._V1_SX300.jpg",
    imdb: { id: "tt0069113", rating: 7.1, votes: 31707 },
    awards: {
      wins: 4,
      nominations: 13,
      text: "Won 1 Oscar. Another 4 wins \u0026 13 nominations."
    },
    type: "movie"
  },
  {
    title: "My Awkward Sexual Adventure",
    year: 2012,
    rated: "NOT RATED",
    runtime: 98,
    countries: ["Canada"],
    genres: ["Comedy", "Romance"],
    director: "Sean Garrity",
    writers: ["Jonas Chernick"],
    actors: [
      "Jonas Chernick",
      "Emily Hampshire",
      "Sarah Manninen",
      "Vik Sahay"
    ],
    plot:
      "To win back his ex-girlfriend, a conservative accountant enlists the help of an exotic dancer to guide him on a quest for sexual experience, leading him into a world of strip clubs, sensual massage parlors, cross-dressing and S \u0026 M.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMjI5MTYzOTMyNF5BMl5BanBnXkFtZTcwNTgwNDYzOQ@@._V1_SX300.jpg",
    imdb: { id: "tt2112210", rating: 6.1, votes: 6946 },
    awards: { wins: 4, nominations: 8, text: "4 wins \u0026 8 nominations." },
    type: "movie"
  },
  {
    title: "The Oogieloves in the Big Balloon Adventure",
    year: 2012,
    rated: "G",
    runtime: 88,
    countries: ["USA"],
    genres: ["Adventure", "Family"],
    director: "Matthew Diamond",
    writers: ["Scott Stabile", "Kenn Viselman"],
    actors: [
      "Jaime Pressly",
      "Christopher Lloyd",
      "Cary Elwes",
      "Cloris Leachman"
    ],
    plot:
      "The Oogieloves -- Goobie, Zoozie and Toofie -- set out to find five magical balloons that will make their good friend Schluufy's surprise birthday party extra-special.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTk0ODM0MzA0OV5BMl5BanBnXkFtZTcwODUyODc3Nw@@._V1_SX300.jpg",
    imdb: { id: "tt1520498", rating: 7.1, votes: 13652 },
    tomato: {
      meter: 27,
      image: "rotten",
      rating: 3.4,
      reviews: 22,
      fresh: 6,
      consensus:
        "Although it may serve as a passing diversion for very young viewers, The Oogieloves fails to offer much more than several brightly colored examples of the worst stereotypes of modern children's entertainment.",
      userMeter: 65,
      userRating: 3.4,
      userReviews: 4867
    },
    metacritic: 32,
    awards: { wins: 0, nominations: 2, text: "2 nominations." },
    type: "movie"
  },
  {
    title: "Free Willy 2: The Adventure Home",
    year: 1995,
    rated: "PG",
    runtime: 95,
    countries: ["France", "USA"],
    genres: ["Adventure", "Drama"],
    director: "Dwight H. Little",
    writers: [
      "Keith Walker",
      "Karen Janszen",
      "Corey Blechman",
      "John Mattson"
    ],
    actors: [
      "Jason James Richter",
      "Francis Capra",
      "Mary Kate Schellhardt",
      "August Schellenberg"
    ],
    plot:
      "Jesse becomes reunited with Willy three years after the whale's jump to freedom as the teenager tries to rescue the killer whale and other orcas from an oil spill.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMjgyNTc4Mzk4OV5BMl5BanBnXkFtZTcwMDgwMDQyMQ@@._V1_SX300.jpg",
    imdb: { id: "tt0113114", rating: 4.9, votes: 12171 },
    awards: { wins: 1, nominations: 2, text: "1 win \u0026 2 nominations." },
    type: "movie"
  },
  {
    title: "Caravan of Courage: An Ewok Adventure",
    year: 1984,
    rated: null,
    runtime: 96,
    countries: ["USA"],
    genres: ["Adventure", "Family", "Fantasy"],
    director: "John Korty",
    writers: ["George Lucas", "Bob Carrau"],
    actors: ["Eric Walker", "Warwick Davis", "Fionnula Flanagan", "Guy Boyd"],
    plot:
      "Wicket the Ewok and his friends agree to help two shipwrecked human children on a quest to find their parents.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTgzNTY1MDE0N15BMl5BanBnXkFtZTYwOTE4NDc4._V1_SX300.jpg",
    imdb: { id: "tt0087225", rating: 5.5, votes: 7209 },
    awards: {
      wins: 0,
      nominations: 1,
      text: "Won 1 Primetime Emmy. Another 1 nomination."
    },
    type: "movie"
  },
  {
    title: "Remo Williams: The Adventure Begins",
    year: 1985,
    rated: "PG-13",
    runtime: 121,
    countries: ["USA"],
    genres: ["Action", "Adventure", "Comedy"],
    director: "Guy Hamilton",
    writers: ["Richard Sapir", "Warren Murphy", "Christopher Wood"],
    actors: ["Fred Ward", "Joel Grey", "Wilford Brimley", "J.A. Preston"],
    plot:
      'An officially "dead" cop is trained to become an extraordinarily unique assassin in service of the US president.',
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTk4MzIyNzQyNF5BMl5BanBnXkFtZTYwNTgwNzk5._V1_SX300.jpg",
    imdb: { id: "tt0089901", rating: 6.4, votes: 8415 },
    awards: {
      wins: 0,
      nominations: 3,
      text: "Nominated for 1 Oscar. Another 3 nominations."
    },
    type: "movie"
  },
  {
    title: "Arthur and the Great Adventure",
    year: 2009,
    rated: "PG",
    runtime: 93,
    countries: ["France"],
    genres: ["Animation", "Adventure", "Family"],
    director: "Luc Besson",
    writers: ["Patrice Garcia", "Luc Besson", "Luc Besson", "Céline Garcia"],
    actors: ["Selena Gomez", "Freddie Highmore", "Logan Miller", "Mia Farrow"],
    plot:
      "Arthur answers a distress call from Princess Selenia, who is menaced by the nefarious Maltazard.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMjAwMjUzOTcyNF5BMl5BanBnXkFtZTgwOTQ2MTA2MDE@._V1_SX300.jpg",
    imdb: { id: "tt0940657", rating: 5.3, votes: 5046 },
    awards: { wins: 0, nominations: 0, text: "" },
    type: "movie"
  },
  {
    title: "Into the Wild",
    year: 2007,
    rated: "R",
    runtime: 148,
    countries: ["USA"],
    genres: ["Adventure", "Biography", "Drama"],
    director: "Sean Penn",
    writers: ["Sean Penn", "Jon Krakauer"],
    actors: [
      "Emile Hirsch",
      "Marcia Gay Harden",
      "William Hurt",
      "Jena Malone"
    ],
    plot:
      "After graduating from Emory University, top student and athlete Christopher McCandless abandons his possessions, gives his entire $24,000 savings account to charity and hitchhikes to Alaska to live in the wilderness. Along the way, Christopher encounters a series of characters that shape his life.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTAwNDEyODU1MjheQTJeQWpwZ15BbWU2MDc3NDQwNw@@._V1_SX300.jpg",
    imdb: { id: "tt0758758", rating: 8.2, votes: 395115 },
    tomato: {
      meter: 82,
      image: "certified",
      rating: 7.5,
      reviews: 192,
      fresh: 158,
      consensus:
        "With his sturdy cast and confident direction, Sean Penn has turned a complex work of non-fiction like Into the Wild into an accessible and poignant character study.",
      userMeter: 89,
      userRating: 4.1,
      userReviews: 177333
    },
    metacritic: 73,
    awards: {
      wins: 23,
      nominations: 90,
      text: "Nominated for 2 Oscars. Another 23 wins \u0026 90 nominations."
    },
    type: "movie"
  },
  {
    title: "Wild Hogs",
    year: 2007,
    rated: "PG-13",
    runtime: 100,
    countries: ["USA"],
    genres: ["Action", "Adventure", "Comedy"],
    director: "Walt Becker",
    writers: ["Brad Copeland"],
    actors: [
      "Tim Allen",
      "John Travolta",
      "Martin Lawrence",
      "William H. Macy"
    ],
    plot:
      "A group of suburban biker wannabes looking for adventure hit the open road, but get more than they bargained for when they encounter a New Mexico gang called the Del Fuegos.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTQ4MTE5MjY5OV5BMl5BanBnXkFtZTcwNDEwMzUzMw@@._V1_SX300.jpg",
    imdb: { id: "tt0486946", rating: 5.9, votes: 96652 },
    tomato: {
      meter: 14,
      image: "rotten",
      rating: 3.8,
      reviews: 140,
      fresh: 20,
      consensus:
        "Wild Hogs is a dreadful combination of fish-out-of-water jokes, slapstick, and lazy stereotypes.",
      userMeter: 61,
      userRating: 3.3,
      userReviews: 395392
    },
    metacritic: 27,
    awards: { wins: 0, nominations: 3, text: "3 nominations." },
    type: "movie"
  },
  {
    title: "Wild Things",
    year: 1998,
    rated: "R",
    runtime: 108,
    countries: ["USA"],
    genres: ["Crime", "Drama", "Mystery"],
    director: "John McNaughton",
    writers: ["Stephen Peters"],
    actors: ["Kevin Bacon", "Matt Dillon", "Neve Campbell", "Theresa Russell"],
    plot:
      "A police detective uncovers a conspiracy behind a case involving a high-school guidance counselor when accusations of rape are made against him by two female students.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTg5MzM5NTAwMl5BMl5BanBnXkFtZTYwNDA0NzQ5._V1_SX300.jpg",
    imdb: { id: "tt0120890", rating: 6.5, votes: 87544 },
    tomato: {
      meter: 64,
      image: "fresh",
      rating: 5.9,
      reviews: 58,
      fresh: 37,
      consensus: null,
      userMeter: 53,
      userRating: 2.9,
      userReviews: 92646
    },
    metacritic: 52,
    awards: { wins: 2, nominations: 3, text: "2 wins \u0026 3 nominations." },
    type: "movie"
  },
  {
    title: "Where the Wild Things Are",
    year: 2009,
    rated: "PG",
    runtime: 101,
    countries: ["Germany", "Australia", "USA"],
    genres: ["Adventure", "Drama", "Family"],
    director: "Spike Jonze",
    writers: ["Spike Jonze", "Dave Eggers", "Maurice Sendak"],
    actors: [
      "Max Records",
      "Pepita Emmerichs",
      "Max Pfeifer",
      "Madeleine Greaves"
    ],
    plot:
      "Yearning for escape and adventure, a young boy runs away from home and sails to an island filled with creatures that take him in as their king.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BNzQ1NzAwODEwM15BMl5BanBnXkFtZTcwNTE4MjI4Mg@@._V1_SX300.jpg",
    imdb: { id: "tt0386117", rating: 6.8, votes: 84841 },
    tomato: {
      meter: 73,
      image: "fresh",
      rating: 6.9,
      reviews: 253,
      fresh: 184,
      consensus:
        "Some may find its dark tone and slender narrative off-putting, but Spike Jonze's heartfelt adaptation of the classic children's book is as beautiful as it is uncompromising.",
      userMeter: 56,
      userRating: 3.3,
      userReviews: 298047
    },
    metacritic: 71,
    awards: {
      wins: 7,
      nominations: 44,
      text:
        "Nominated for 1 Golden Globe. Another 7 wins \u0026 44 nominations."
    },
    type: "movie"
  },
  {
    title: "Wild",
    year: 2014,
    rated: "R",
    runtime: 115,
    countries: ["USA"],
    genres: ["Adventure", "Biography", "Drama"],
    director: "Jean-Marc Vallée",
    writers: ["Nick Hornby", "Cheryl Strayed"],
    actors: [
      "Reese Witherspoon",
      "Laura Dern",
      "Thomas Sadoski",
      "Keene McRae"
    ],
    plot:
      "A chronicle of one woman's 1,100-mile solo hike undertaken as a way to recover from a recent personal tragedy.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTczNzI2MDc1Ml5BMl5BanBnXkFtZTgwOTU5NTYxMjE@._V1_SX300.jpg",
    imdb: { id: "tt2305051", rating: 7.2, votes: 74110 },
    tomato: {
      meter: 90,
      image: "certified",
      rating: 7.5,
      reviews: 230,
      fresh: 207,
      consensus:
        "Powerfully moving and emotionally resonant, Wild finds director Jean-Marc Vallée and star Reese Witherspoon working at the peak of their respective powers.",
      userMeter: 75,
      userRating: 3.8,
      userReviews: 52569
    },
    metacritic: 76,
    awards: {
      wins: 7,
      nominations: 56,
      text: "Nominated for 2 Oscars. Another 7 wins \u0026 56 nominations."
    },
    type: "movie"
  },
  {
    title: "Wild Tales",
    year: 2014,
    rated: "R",
    runtime: 122,
    countries: ["Argentina", "Spain"],
    genres: ["Comedy", "Drama", "Thriller"],
    director: "Damián Szifrón",
    writers: ["Damián Szifrón"],
    actors: [
      "Darío Grandinetti",
      "María Marull",
      "Mónica Villa",
      "Rita Cortese"
    ],
    plot:
      "Six short stories that explore the extremities of human behavior involving people in distress.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BNzAzMjA1ODAxOV5BMl5BanBnXkFtZTgwODg4NTQzNDE@._V1_SX300.jpg",
    imdb: { id: "tt3011894", rating: 8.2, votes: 67761 },
    tomato: {
      meter: 95,
      image: "certified",
      rating: 8,
      reviews: 133,
      fresh: 126,
      consensus:
        "Wickedly hilarious and delightfully deranged, Wild Tales is a subversive satire that doubles as a uniformly entertaining anthology film.",
      userMeter: 92,
      userRating: 4.3,
      userReviews: 12286
    },
    metacritic: 77,
    awards: {
      wins: 42,
      nominations: 46,
      text: "Nominated for 1 Oscar. Another 42 wins \u0026 46 nominations."
    },
    type: "movie"
  },
  {
    title: "Beasts of the Southern Wild",
    year: 2012,
    rated: "PG-13",
    runtime: 93,
    countries: ["USA"],
    genres: ["Drama", "Fantasy"],
    director: "Benh Zeitlin",
    writers: ["Lucy Alibar", "Benh Zeitlin", "Lucy Alibar"],
    actors: [
      "Quvenzhané Wallis",
      "Dwight Henry",
      "Levy Easterly",
      "Lowell Landes"
    ],
    plot:
      "Faced with both her hot-tempered father's fading health and melting ice-caps that flood her ramshackle bayou community and unleash ancient aurochs, six-year-old Hushpuppy must learn the ways of courage and love.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTgxNDM5MDM1Ml5BMl5BanBnXkFtZTcwOTYwNzQ3Nw@@._V1_SX300.jpg",
    imdb: { id: "tt2125435", rating: 7.3, votes: 67369 },
    tomato: {
      meter: 86,
      image: "certified",
      rating: 8.2,
      reviews: 184,
      fresh: 158,
      consensus:
        "Beasts of the Southern Wild is a fantastical, emotionally powerful journey and a strong case of filmmaking that values imagination over money.",
      userMeter: 76,
      userRating: 3.8,
      userReviews: 38646
    },
    metacritic: 86,
    awards: {
      wins: 91,
      nominations: 119,
      text: "Nominated for 4 Oscars. Another 91 wins \u0026 119 nominations."
    },
    type: "movie"
  },
  {
    title: "The Wild Bunch",
    year: 1969,
    rated: "R",
    runtime: 145,
    countries: ["USA"],
    genres: ["Action", "Adventure", "Western"],
    director: "Sam Peckinpah",
    writers: ["Walon Green", "Sam Peckinpah", "Walon Green", "Roy N. Sickner"],
    actors: [
      "William Holden",
      "Ernest Borgnine",
      "Robert Ryan",
      "Edmond O'Brien"
    ],
    plot:
      'An aging group of outlaws look for one last big score as the "traditional" American West is disappearing around them.',
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMjMxNjEyNDE4NF5BMl5BanBnXkFtZTcwODk2Njk3OA@@._V1_SX300.jpg",
    imdb: { id: "tt0065214", rating: 8, votes: 60624 },
    awards: {
      wins: 5,
      nominations: 4,
      text: "Nominated for 2 Oscars. Another 5 wins \u0026 4 nominations."
    },
    type: "movie"
  },
  {
    title: "Wild Strawberries",
    year: 1957,
    rated: "UNRATED",
    runtime: 91,
    countries: ["Sweden"],
    genres: ["Drama", "Romance"],
    director: "Ingmar Bergman",
    writers: ["Ingmar Bergman"],
    actors: [
      "Victor Sjöström",
      "Bibi Andersson",
      "Ingrid Thulin",
      "Gunnar Björnstrand"
    ],
    plot:
      "After living a life marked by coldness, an aging professor is forced to confront the emptiness of his existence.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMjgwNjI3NTM1MF5BMl5BanBnXkFtZTgwNzY3MTUyMjE@._V1_SX300.jpg",
    imdb: { id: "tt0050986", rating: 8.3, votes: 58806 },
    awards: {
      wins: 12,
      nominations: 2,
      text: "Nominated for 1 Oscar. Another 12 wins \u0026 2 nominations."
    },
    type: "movie"
  },
  {
    title: "Law Abiding Citizen",
    year: 2009,
    rated: "R",
    runtime: 109,
    countries: ["USA"],
    genres: ["Crime", "Drama", "Thriller"],
    director: "F. Gary Gray",
    writers: ["Kurt Wimmer"],
    actors: ["Jamie Foxx", "Gerard Butler", "Colm Meaney", "Bruce McGill"],
    plot:
      "A frustrated man decides to take justice into his own hands after a plea bargain sets one of his family's killers free. He targets not only the killer but also the district attorney and others involved in the deal.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTMyODY1NTg1N15BMl5BanBnXkFtZTcwMTUyODI4Mg@@._V1_SX300.jpg",
    imdb: { id: "tt1197624", rating: 7.4, votes: 207086 },
    tomato: {
      meter: 25,
      image: "rotten",
      rating: 4.3,
      reviews: 156,
      fresh: 39,
      consensus:
        "Unnecessarily violent and unflinchingly absurd, Law Abiding Citizen is plagued by subpar acting and a story that defies reason.",
      userMeter: 75,
      userRating: 4,
      userReviews: 516327
    },
    metacritic: 34,
    awards: { wins: 2, nominations: 5, text: "2 wins \u0026 5 nominations." },
    type: "movie"
  },
  {
    title: "Monster-in-Law",
    year: 2005,
    rated: "PG-13",
    runtime: 101,
    countries: ["Germany", "USA"],
    genres: ["Comedy"],
    director: "Robert Luketic",
    writers: ["Anya Kochoff"],
    actors: ["Jennifer Lopez", "Jane Fonda", "Michael Vartan", "Wanda Sykes"],
    plot:
      "The love life of Charlotte is reduced to an endless string of disastrous blind dates, until she meets the perfect man, Kevin. Unfortunately, his merciless mother will do anything to destroy their relationship.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTIyMTU0NDM1NF5BMl5BanBnXkFtZTcwODk3NzcyMQ@@._V1_SX300.jpg",
    imdb: { id: "tt0369735", rating: 5.4, votes: 40992 },
    tomato: {
      meter: 16,
      image: "rotten",
      rating: 4.2,
      reviews: 163,
      fresh: 26,
      consensus:
        "While Jane Fonda steals the movie in her return to the screen, a tired script and flimsy performances make this borderline comedy fall flat.",
      userMeter: 55,
      userRating: 3.2,
      userReviews: 433085
    },
    metacritic: 31,
    awards: { wins: 1, nominations: 10, text: "1 win \u0026 10 nominations." },
    type: "movie"
  },
  {
    title: "Down by Law",
    year: 1986,
    rated: "R",
    runtime: 107,
    countries: ["USA", "West Germany"],
    genres: ["Comedy", "Crime", "Drama"],
    director: "Jim Jarmusch",
    writers: ["Jim Jarmusch"],
    actors: ["Tom Waits", "John Lurie", "Roberto Benigni", "Nicoletta Braschi"],
    plot:
      "The story of three different men in a Louisiana prison and their eventual journey.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTQ1NjA0OTIxMV5BMl5BanBnXkFtZTYwNDQ3NTk4._V1_SX300.jpg",
    imdb: { id: "tt0090967", rating: 7.9, votes: 34478 },
    awards: { wins: 4, nominations: 6, text: "4 wins \u0026 6 nominations." },
    type: "movie"
  },
  {
    title: "Above the Law",
    year: 1988,
    rated: "R",
    runtime: 99,
    countries: ["USA"],
    genres: ["Action", "Crime", "Drama"],
    director: "Andrew Davis",
    writers: [
      "Andrew Davis",
      "Steven Seagal",
      "Steven Pressfield",
      "Ronald Shusett",
      "Andrew Davis"
    ],
    actors: ["Steven Seagal", "Pam Grier", "Henry Silva", "Ron Dean"],
    plot:
      "A former Special Operations Vietnam vet works as a Chicago cop and uncovers CIA wrongdoing.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTI1NDk1MTY1MF5BMl5BanBnXkFtZTcwNDAxMjAwMQ@@._V1_SX300.jpg",
    imdb: { id: "tt0094602", rating: 5.9, votes: 21167 },
    awards: { wins: 0, nominations: 0, text: "" },
    type: "movie"
  },
  {
    title: "Son in Law",
    year: 1993,
    rated: "PG-13",
    runtime: 95,
    countries: ["USA"],
    genres: ["Comedy", "Drama", "Romance"],
    director: "Steve Rash",
    writers: [
      "Patrick J. Clifton",
      "Susan McMartin",
      "Peter M. Lenkov",
      "Fax Bahr",
      "Adam Small",
      "Shawn Schepps"
    ],
    actors: ["Pauly Shore", "Carla Gugino", "Lane Smith", "Cindy Pickett"],
    plot:
      "Having gotten a taste of college life, a drastically changed farm girl returns home for Thanksgiving break with her best friend, a flamboyant party animal who is clearly a fish out of water in a small farm town.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTUxNDkyODMwN15BMl5BanBnXkFtZTYwODA3NjU5._V1_SX300.jpg",
    imdb: { id: "tt0108186", rating: 5.6, votes: 12557 },
    awards: { wins: 0, nominations: 1, text: "1 nomination." },
    type: "movie"
  },
  {
    title: "Law of Desire",
    year: 1987,
    rated: "NC-17",
    runtime: 102,
    countries: ["Spain"],
    genres: ["Comedy", "Drama", "Thriller"],
    director: "Pedro Almodóvar",
    writers: ["Pedro Almodóvar", "Pedro Almodóvar"],
    actors: [
      "Eusebio Poncela",
      "Carmen Maura",
      "Antonio Banderas",
      "Miguel Molina"
    ],
    plot: "A film makers sexual disorientation jepordizes his latest project.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTI4NjUzNDA5MF5BMl5BanBnXkFtZTcwNTg5MDUyMQ@@._V1_SX300.jpg",
    imdb: { id: "tt0093412", rating: 7.2, votes: 7322 },
    awards: { wins: 10, nominations: 3, text: "10 wins \u0026 3 nominations." },
    type: "movie"
  },
  {
    title: "Beyond the Law",
    year: 1993,
    rated: "R",
    runtime: 108,
    countries: ["USA"],
    genres: ["Crime", "Drama", "Thriller"],
    director: "Larry Ferguson",
    writers: ["Larry Ferguson"],
    actors: [
      "Charlie Sheen",
      "Linda Fiorentino",
      "Michael Madsen",
      "Courtney B. Vance"
    ],
    plot:
      "An undercover cop joins a murderous, arms-dealing biker gang to try to put them behind bars.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMjE3MDQxNTkxNF5BMl5BanBnXkFtZTcwNzYzMzgxMQ@@._V1_SX300.jpg",
    imdb: { id: "tt0103805", rating: 6.5, votes: 4629 },
    awards: { wins: 0, nominations: 0, text: "" },
    type: "movie"
  },
  {
    title: "Herod's Law",
    year: 1999,
    rated: "R",
    runtime: 120,
    countries: ["Mexico"],
    genres: ["Comedy", "Crime", "Mystery"],
    director: "Luis Estrada",
    writers: [
      "Luis Estrada",
      "Luis Estrada",
      "Vicente Leñero",
      "Fernando Javier León Rodríguez",
      "Jaime Sampietro",
      "Jaime Sampietro"
    ],
    actors: [
      "Damián Alcázar",
      "Pedro Armendáriz Jr.",
      "Delia Casanova",
      "Juan Carlos Colombo"
    ],
    plot:
      "Mexico, 1949. The fable of a janitor turned Mayor on a little town lost in the Mexican desert, who gradually realizes how far his new acquainted power and corruption can get him.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTg2MjAwMTIxN15BMl5BanBnXkFtZTcwMjM0OTQ1MQ@@._V1_SX300.jpg",
    imdb: { id: "tt0221344", rating: 8.1, votes: 3183 },
    tomato: {
      meter: 68,
      image: "fresh",
      rating: 6.4,
      reviews: 25,
      fresh: 17,
      consensus: null,
      userMeter: 88,
      userRating: 4,
      userReviews: 2204
    },
    metacritic: 64,
    awards: { wins: 20, nominations: 8, text: "20 wins \u0026 8 nominations." },
    type: "movie"
  },
  {
    title: "Murphy's Law",
    year: 1986,
    rated: "R",
    runtime: 100,
    countries: ["USA"],
    genres: ["Action", "Crime", "Drama"],
    director: "J. Lee Thompson",
    writers: ["Gail Morgan Hickman"],
    actors: [
      "Charles Bronson",
      "Kathleen Wilhoite",
      "Carrie Snodgress",
      "Robert F. Lyons"
    ],
    plot:
      "An action-packed thriller starring Charles Bronson as Jack Murphy, a cop who is running to stay alive long enough to even the score with his wife's killer.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BNDA4ODM4NzMxMl5BMl5BanBnXkFtZTcwNTQ2NjE2NA@@._V1_SX300.jpg",
    imdb: { id: "tt0091575", rating: 5.9, votes: 3024 },
    awards: { wins: 0, nominations: 0, text: "" },
    type: "movie"
  },
  {
    title: "Outside the Law",
    year: 2010,
    rated: "UNRATED",
    runtime: 138,
    countries: ["France", "Algeria", "Belgium", "Tunisia", "Italy"],
    genres: ["Crime", "Drama", "War"],
    director: "Rachid Bouchareb",
    writers: ["Rachid Bouchareb"],
    actors: [
      "Jamel Debbouze",
      "Roschdy Zem",
      "Sami Bouajila",
      "Chafia Boudraa"
    ],
    plot:
      "A drama about the Algerian struggle for independence from France after WWII.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTg5NzY0MTkwOV5BMl5BanBnXkFtZTcwNjU4NzcwNA@@._V1_SX300.jpg",
    imdb: { id: "tt1229381", rating: 6.6, votes: 2866 },
    tomato: {
      meter: 76,
      image: "certified",
      rating: 6.4,
      reviews: 41,
      fresh: 31,
      consensus: null,
      userMeter: 65,
      userRating: 3.5,
      userReviews: 655
    },
    metacritic: 59,
    awards: {
      wins: 2,
      nominations: 3,
      text: "Nominated for 1 Oscar. Another 2 wins \u0026 3 nominations."
    },
    type: "movie"
  },
  {
    title: "Bound",
    year: 1996,
    rated: "R",
    runtime: 108,
    countries: ["USA"],
    genres: ["Crime", "Drama", "Romance"],
    director: "Andy Wachowski, Lana Wachowski",
    writers: ["Andy Wachowski", "Lana Wachowski"],
    actors: [
      "Jennifer Tilly",
      "Gina Gershon",
      "Joe Pantoliano",
      "John P. Ryan"
    ],
    plot:
      "Corky, a tough female ex con and her lover Violet concoct a scheme to steal millions of stashed mob money and pin the blame on Violet's crooked boyfriend Caesar.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTI0MjczOTYxNl5BMl5BanBnXkFtZTYwNjc0Mjk5._V1_SX300.jpg",
    imdb: { id: "tt0115736", rating: 7.4, votes: 39465 },
    tomato: {
      meter: 92,
      image: "fresh",
      rating: 7.8,
      reviews: 37,
      fresh: 34,
      consensus: null,
      userMeter: 82,
      userRating: 3.5,
      userReviews: 33004
    },
    metacritic: 61,
    awards: { wins: 8, nominations: 10, text: "8 wins \u0026 10 nominations." },
    type: "movie"
  },
  {
    title: "Homeward Bound: The Incredible Journey",
    year: 1993,
    rated: "G",
    runtime: 84,
    countries: ["USA"],
    genres: ["Adventure", "Comedy", "Drama"],
    director: "Duwayne Dunham",
    writers: ["Sheila Burnford", "Caroline Thompson", "Linda Woolverton"],
    actors: ["Don Alder", "Ed Bernard", "Kevin Chevalia", "Anne Christianson"],
    plot:
      "Three pets escape from a California ranch to find their owners in San Francisco.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMjAyNTE4NDU2Nl5BMl5BanBnXkFtZTcwNTgyNjQyMQ@@._V1_SX300.jpg",
    imdb: { id: "tt0107131", rating: 6.9, votes: 31481 },
    awards: { wins: 0, nominations: 0, text: "" },
    type: "movie"
  },
  {
    title: "Bound for Glory",
    year: 1976,
    rated: "PG",
    runtime: 147,
    countries: ["USA"],
    genres: ["Biography", "Drama", "Music"],
    director: "Hal Ashby",
    writers: ["Robert Getchell", "Woody Guthrie"],
    actors: [
      "David Carradine",
      "Ronny Cox",
      "Melinda Dillon",
      "Gail Strickland"
    ],
    plot: "The early life of Woody Guthrie as a vagabond folk singer.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMjE2NDg2NzY0NV5BMl5BanBnXkFtZTYwOTg1NTM5._V1_SX300.jpg",
    imdb: { id: "tt0074235", rating: 7.4, votes: 3517 },
    awards: {
      wins: 4,
      nominations: 11,
      text: "Won 2 Oscars. Another 4 wins \u0026 11 nominations."
    },
    type: "movie"
  },
  {
    title: "Bound to Vengeance",
    year: 2015,
    rated: "NOT RATED",
    runtime: 93,
    countries: ["USA"],
    genres: ["Horror", "Thriller"],
    director: "José Manuel Cravioto",
    writers: ["Rock Shaink Jr.", "Keith Kjornes", "Rock Shaink Jr."],
    actors: ["Richard Tyson", "Amy Okuda", "Tina Ivlev", "Bianca Malinowski"],
    plot:
      "A young girl, chained in the basement of a sexual predator, escapes and turns the tables on her captor.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTc4MzM3MjgxM15BMl5BanBnXkFtZTgwMjIyNTA4NTE@._V1_SX300.jpg",
    imdb: { id: "tt1230213", rating: 5.7, votes: 2195 },
    tomato: null,
    metacritic: 27,
    awards: { wins: 0, nominations: 0, text: "" },
    type: "movie"
  },
  {
    title: "Bound",
    year: 2015,
    rated: "UNRATED",
    runtime: 91,
    countries: ["USA"],
    genres: ["Drama", "Thriller"],
    director: "Jared Cohn",
    writers: ["Jared Cohn", "Delondra Williams"],
    actors: [
      "Charisma Carpenter",
      "Bryce Draper",
      "Morgan Obenreder",
      "Michael Monks"
    ],
    plot:
      "The daughter of a wealthy real estate broker falls in love with a younger man, who introduces her to B\u0026D and S\u0026M. Using her newly awakened sexual prowess, she finally takes charge of her own life.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BNzU0MDUzNTUyOF5BMl5BanBnXkFtZTgwODg1MjM4MzE@._V1_SX300.jpg",
    imdb: { id: "tt4145324", rating: 3.4, votes: 1147 },
    awards: { wins: 0, nominations: 0, text: "" },
    type: "movie"
  },
  {
    title: "Logan's War: Bound by Honor",
    year: 1998,
    rated: "PG-13",
    runtime: 95,
    countries: ["USA"],
    genres: ["Action", "Drama", "Thriller"],
    director: "Michael Preece",
    writers: [
      "Chuck Norris",
      "Aaron Norris",
      "Walter Klenhard",
      "Walter Klenhard"
    ],
    actors: ["Eddie Cibrian", "Chuck Norris", "Joe Spano", "Jeff Kober"],
    plot:
      "An Army Ranger infiltrates a mob family by posing as a hit man. In conjunction with his uncle, they are plotting revenge against the killers who murdered his entire family when he was young.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTY0MjMzODYxN15BMl5BanBnXkFtZTgwODYxOTk1MDE@._V1_SX300.jpg",
    imdb: { id: "tt0176943", rating: 5.4, votes: 1015 },
    awards: { wins: 1, nominations: 1, text: "1 win \u0026 1 nomination." },
    type: "movie"
  },
  {
    title: "Bollywood Bound",
    year: 2003,
    rated: null,
    runtime: 88,
    countries: ["Canada"],
    genres: ["Documentary"],
    director: "Nisha Pahuja",
    writers: [],
    actors: ["Neeru Bajwa", "Ruby Bhatia", "Vekeana Dhillon", "Vikram Dhillon"],
    plot: null,
    poster: null,
    imdb: { id: "tt0296535", rating: 7.9, votes: 897 },
    awards: { wins: 0, nominations: 0, text: "" },
    type: "movie"
  },
  {
    title: "A Ship Bound for India",
    year: 1947,
    rated: null,
    runtime: 98,
    countries: ["Sweden"],
    genres: ["Drama"],
    director: "Ingmar Bergman",
    writers: ["Ingmar Bergman", "Martin Söderhjelm"],
    actors: [
      "Holger Löwenadler",
      "Anna Lindahl",
      "Birger Malmsten",
      "Gertrud Fridh"
    ],
    plot:
      "Sailor Johannes Blom returns to his home port, after seven years at sea, to find that Sally, the girl he has been thinking of while away, is completely despondent. Seven years earlier, ...",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTk3OTEwNzg1MF5BMl5BanBnXkFtZTgwNTA3OTgwMzE@._V1_SX300.jpg",
    imdb: { id: "tt0039834", rating: 6.7, votes: 592 },
    awards: { wins: 0, nominations: 1, text: "1 nomination." },
    type: "movie"
  },
  {
    title: "Trouble Bound",
    year: 1993,
    rated: "R",
    runtime: 90,
    countries: ["USA"],
    genres: ["Action", "Comedy"],
    director: "Jeffrey Reiner",
    writers: ["Darrell Fetty", "Francis Delia"],
    actors: [
      "Michael Madsen",
      "Patricia Arquette",
      "Sal Jenco",
      "Darren Epton"
    ],
    plot:
      "Upon getting out of prison, a man who took the rap for some thief buddies gets together with them again, and tells them he's not interested in doing things with them any more. They stick a ...",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMjE1NDg5NzU3MV5BMl5BanBnXkFtZTcwNTc4OTUyMQ@@._V1_SX300.jpg",
    imdb: { id: "tt0105645", rating: 5.8, votes: 575 },
    awards: { wins: 0, nominations: 0, text: "" },
    type: "movie"
  },
  {
    title: "Storm Bound",
    year: 2007,
    rated: null,
    runtime: 135,
    countries: ["Netherlands"],
    genres: ["Adventure", "Family"],
    director: "Steven de Jong",
    writers: ["Mischa Alexander", "Steven de Jong", "Johan Fabricius"],
    actors: [
      "Pim Wessels",
      "Martijn Hendrickx",
      "Billy Zomerdijk",
      "Reena Giasi"
    ],
    plot:
      "A ripping adventure yarn about teenage boys who join the crew of a ship of the Dutch East India Company in the 17th century. After a dramatic shipwreck and escape from an attack by natives, they must make their way to safety by themselves.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTQ3Njk5MDY1M15BMl5BanBnXkFtZTcwOTIwNTQ5OA@@._V1_SX300.jpg",
    imdb: { id: "tt0403483", rating: 6.3, votes: 535 },
    awards: { wins: 1, nominations: 1, text: "1 win \u0026 1 nomination." },
    type: "movie"
  },
  {
    title: "Shutter Island",
    year: 2010,
    rated: "R",
    runtime: 138,
    countries: ["USA"],
    genres: ["Mystery", "Thriller"],
    director: "Martin Scorsese",
    writers: ["Laeta Kalogridis", "Dennis Lehane"],
    actors: [
      "Leonardo DiCaprio",
      "Mark Ruffalo",
      "Ben Kingsley",
      "Max von Sydow"
    ],
    plot:
      "A U.S Marshal investigates the disappearance of a murderess who escaped from a hospital for the criminally insane.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTMxMTIyNzMxMV5BMl5BanBnXkFtZTcwOTc4OTI3Mg@@._V1_SX300.jpg",
    imdb: { id: "tt1130884", rating: 8.1, votes: 720127 },
    tomato: {
      meter: 68,
      image: "fresh",
      rating: 6.6,
      reviews: 241,
      fresh: 165,
      consensus:
        "It may not rank with Scorsese's best work, but Shutter Island's gleefully unapologetic genre thrills represent the director at his most unrestrained.",
      userMeter: 76,
      userRating: 3.3,
      userReviews: 2370815
    },
    metacritic: 63,
    awards: { wins: 7, nominations: 53, text: "7 wins \u0026 53 nominations." },
    type: "movie"
  },
  {
    title: "The Island",
    year: 2005,
    rated: "PG-13",
    runtime: 136,
    countries: ["USA"],
    genres: ["Action", "Adventure", "Sci-Fi"],
    director: "Michael Bay",
    writers: [
      "Caspian Tredwell-Owen",
      "Alex Kurtzman",
      "Roberto Orci",
      "Caspian Tredwell-Owen"
    ],
    actors: [
      "Ewan McGregor",
      "Scarlett Johansson",
      "Djimon Hounsou",
      "Sean Bean"
    ],
    plot:
      "Lincoln Six-Echo is a resident of a seemingly Utopian but contained facility in the year 2019. Like all of the inhabitants of this carefully controlled environment, Lincoln hopes to be ...",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTAwNjk0NjM1ODReQTJeQWpwZ15BbWU3MDc1NjIxMzM@._V1_SX300.jpg",
    imdb: { id: "tt0399201", rating: 6.9, votes: 254299 },
    tomato: {
      meter: 40,
      image: "rotten",
      rating: 5.4,
      reviews: 194,
      fresh: 77,
      consensus:
        "A clone of THX 1183, Coma, and Logan's Run, The Island is another loud and bombastic Michael Bay movie where explosions and chases matter more than characters, dialogue, or plot.",
      userMeter: 64,
      userRating: 3.3,
      userReviews: 371288
    },
    metacritic: 50,
    awards: { wins: 1, nominations: 6, text: "1 win \u0026 6 nominations." },
    type: "movie"
  },
  {
    title: "Journey 2: The Mysterious Island",
    year: 2012,
    rated: "PG",
    runtime: 94,
    countries: ["USA"],
    genres: ["Action", "Adventure", "Comedy"],
    director: "Brad Peyton",
    writers: [
      "Brian Gunn",
      "Mark Gunn",
      "Richard Outten",
      "Brian Gunn",
      "Mark Gunn",
      "Jules Verne"
    ],
    actors: [
      "Dwayne Johnson",
      "Michael Caine",
      "Josh Hutcherson",
      "Luis Guzmán"
    ],
    plot:
      "Sean Anderson partners with his mom's husband on a mission to find his grandfather, who is thought to be missing on a mythical island.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMjA5MTE1MjQyNV5BMl5BanBnXkFtZTcwODI4NDMwNw@@._V1_SX300.jpg",
    imdb: { id: "tt1397514", rating: 5.8, votes: 62984 },
    tomato: {
      meter: 42,
      image: "rotten",
      rating: 4.9,
      reviews: 124,
      fresh: 52,
      consensus:
        "Aggressively unambitious, Journey 2 might thrill tween viewers, but most others will find it too intense for young audiences and too cartoonishly dull for adults.",
      userMeter: 59,
      userRating: 3.6,
      userReviews: 211993
    },
    metacritic: 41,
    awards: { wins: 3, nominations: 4, text: "3 wins \u0026 4 nominations." },
    type: "movie"
  },
  {
    title: "Spy Kids 2: Island of Lost Dreams",
    year: 2002,
    rated: "PG",
    runtime: 100,
    countries: ["USA"],
    genres: ["Action", "Adventure", "Comedy"],
    director: "Robert Rodriguez",
    writers: ["Robert Rodriguez"],
    actors: [
      "Antonio Banderas",
      "Carla Gugino",
      "Alexa PenaVega",
      "Daryl Sabara"
    ],
    plot:
      "The Cortez siblings set out for a mysterious island, where they encounter a genetic scientist and a set of rival spy kids.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTM0NzA1Njg2NF5BMl5BanBnXkFtZTYwNzA1MTg5._V1_SX300.jpg",
    imdb: { id: "tt0287717", rating: 5.1, votes: 42036 },
    tomato: {
      meter: 74,
      image: "certified",
      rating: 6.6,
      reviews: 133,
      fresh: 99,
      consensus:
        "Though the concept is no longer fresh, Spy Kids 2 is still an agreeable and energetic romp.",
      userMeter: 38,
      userRating: 2.6,
      userReviews: 125856
    },
    metacritic: 66,
    awards: { wins: 3, nominations: 3, text: "3 wins \u0026 3 nominations." },
    type: "movie"
  },
  {
    title: "Nim's Island",
    year: 2008,
    rated: "PG",
    runtime: 96,
    countries: ["USA"],
    genres: ["Adventure", "Comedy", "Family"],
    director: "Jennifer Flackett, Mark Levin",
    writers: [
      "Joseph Kwong",
      "Paula Mazur",
      "Mark Levin",
      "Jennifer Flackett",
      "Wendy Orr"
    ],
    actors: [
      "Abigail Breslin",
      "Jodie Foster",
      "Gerard Butler",
      "Michael Carman"
    ],
    plot:
      "A young girl inhabits an isolated island with her scientist father and communicates with a reclusive author of the novel she's reading.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTA0OTk0NjIwMDleQTJeQWpwZ15BbWU3MDg3NjM0NTE@._V1_SX300.jpg",
    imdb: { id: "tt0410377", rating: 6, votes: 27061 },
    tomato: {
      meter: 51,
      image: "rotten",
      rating: 5.7,
      reviews: 101,
      fresh: 52,
      consensus:
        "Despite good intentions, Nim's Island flounders under an implausible storyline, simplistic stock characters, and distracting product placement.",
      userMeter: 46,
      userRating: 3.1,
      userReviews: 181059
    },
    metacritic: 55,
    awards: { wins: 1, nominations: 3, text: "1 win \u0026 3 nominations." },
    type: "movie"
  },
  {
    title: "City Island",
    year: 2009,
    rated: "PG-13",
    runtime: 104,
    countries: ["USA"],
    genres: ["Comedy", "Drama"],
    director: "Raymond De Felitta",
    writers: ["Raymond De Felitta"],
    actors: [
      "Andy Garcia",
      "Julianna Margulies",
      "Steven Strait",
      "Emily Mortimer"
    ],
    plot:
      "The Rizzos, a family who doesn't share their habits, aspirations, and careers with one another, find their delicate web of lies disturbed by the arrival of a young ex-con (Strait) brought ...",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTM1MTY2Mjk0Nl5BMl5BanBnXkFtZTcwMDYxODkxMw@@._V1_SX300.jpg",
    imdb: { id: "tt1174730", rating: 7.4, votes: 26636 },
    tomato: {
      meter: 81,
      image: "certified",
      rating: 6.8,
      reviews: 99,
      fresh: 80,
      consensus:
        "Raymond De Felitta combines warmth, humanity, and a natural sense of humor, and is abetted by Andy Garcia and an excellent ensemble cast.",
      userMeter: 79,
      userRating: 3.6,
      userReviews: 29773
    },
    metacritic: 66,
    awards: { wins: 2, nominations: 3, text: "2 wins \u0026 3 nominations." },
    type: "movie"
  },
  {
    title: "The Island of Dr. Moreau",
    year: 1996,
    rated: "PG-13",
    runtime: 96,
    countries: ["USA"],
    genres: ["Horror", "Sci-Fi", "Thriller"],
    director: "John Frankenheimer, Richard Stanley",
    writers: ["H.G. Wells", "Richard Stanley", "Ron Hutchinson"],
    actors: ["Marlon Brando", "Val Kilmer", "David Thewlis", "Fairuza Balk"],
    plot:
      "After being rescued and brought to an island, a man discovers that its inhabitants are experimental animals being turned into strange-looking humans, all of it the work of a visionary doctor.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTIyMDI3NTI1OV5BMl5BanBnXkFtZTcwMDM2MjAyMQ@@._V1_SX300.jpg",
    imdb: { id: "tt0116654", rating: 4.4, votes: 25438 },
    awards: { wins: 1, nominations: 8, text: "1 win \u0026 8 nominations." },
    type: "movie"
  },
  {
    title: "Cutthroat Island",
    year: 1995,
    rated: "PG-13",
    runtime: 124,
    countries: ["USA", "France", "Italy", "Germany"],
    genres: ["Action", "Adventure", "Comedy"],
    director: "Renny Harlin",
    writers: [
      "Michael Frost Beckner",
      "James Gorman",
      "Bruce A. Evans",
      "Raynold Gideon",
      "Robert King",
      "Marc Norman"
    ],
    actors: [
      "Geena Davis",
      "Matthew Modine",
      "Frank Langella",
      "Maury Chaykin"
    ],
    plot:
      "A female pirate and her companion race against their rivals to find a hidden island that contains a fabulous treasure.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTYyNjc2MjY2MV5BMl5BanBnXkFtZTcwNjU3NjM0MQ@@._V1_SX300.jpg",
    imdb: { id: "tt0112760", rating: 5.6, votes: 20312 },
    awards: { wins: 0, nominations: 1, text: "1 nomination." },
    type: "movie"
  },
  {
    title: "Muppet Treasure Island",
    year: 1996,
    rated: "G",
    runtime: 99,
    countries: ["USA"],
    genres: ["Action", "Adventure", "Comedy"],
    director: "Brian Henson",
    writers: [
      "Robert Louis Stevenson",
      "Jerry Juhl",
      "Kirk R. Thatcher",
      "James V. Hart"
    ],
    actors: [
      "Tim Curry",
      "Billy Connolly",
      "Jennifer Saunders",
      "Kevin Bishop"
    ],
    plot: "The Muppets' twist on the classic tale.",
    poster:
      "https://ia.media-imdb.com/images/M/MV5BMTY0NDU1MDYxMl5BMl5BanBnXkFtZTcwNjgyMTEzMQ@@._V1_SX300.jpg",
    imdb: { id: "tt0117110", rating: 6.9, votes: 15096 },
    awards: { wins: 0, nominations: 4, text: "4 nominations." },
    type: "movie"
  }
];

export default Movies;
