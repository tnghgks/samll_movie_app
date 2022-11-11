import { useState, useEffect } from "react";
import Movie from "../components/Movie.js";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [movieList, setMovieList] = useState([]);
  const getMovies = async () => {
    const response = await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year");
    const json = await response.json();
    setMovieList(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className="App">
      <h1>hi</h1>
      {loading ? "Loading..." : null}
      {movieList.map((item) => (
        <Movie key={item.id} id={item.id} title={item.title} medium_cover_image={item.medium_cover_image} summary={item.summary} genres={item.genres} />
      ))}
    </div>
  );
};

export default Home;
