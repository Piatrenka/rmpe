import { Row, Col, Card } from 'react-bootstrap'

const Movies = (props) => {
  
  console.log('Movies Debug: ', props)
  
  const movies = props.movies.map(movie => {
    return (
      <p key={movie.id}>{movie.id}</p>
    )
  })

  return (
    <div>
      {/* {movies} */}
      <Row style={{ margin: "0px" }}>{movies}</Row>
    </div>
  )
}

Movies.getInitialProps = async function () {
  const baseURL = "https://reactjs-cdp.herokuapp.com/";
  const url = `${baseURL}movies?sortBy=vote_average&sortOrder=desc&search=LORD&searchBy=title`;

  const res = await fetch(
    // ('https://api.coindesk.com/v1/bpi/currentprice.json')
    // "/movies?sortBy=vote_average&sortOrder=desc&search=LORD&searchBy=title"
    url
  );

  const data = await res.json();

  console.log("Movies.getInitialProps Debug: ", data.data);

  return {
    movies: data.data,
    // bpi: data.bpi
    // bpi: data
  };
};
export default Movies