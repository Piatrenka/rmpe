const axios = require('axios')

async function fetchMovies() {
  try {
    const response = await axios.get(
      "https://reactjs-cdp.herokuapp.com/movies"
    );
    // console.log(response.data.data)
    const movies = []

    response.data.data.forEach((rec, index) => {
      movies.push(rec)
    })

    console.log(movies)
    console.log(movies.length)
  } catch (e) {
    console.log(e)
  }
}

fetchMovies()

