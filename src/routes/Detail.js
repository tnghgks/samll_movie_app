import Movie from "../components/Movie";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Detail = () => {
  const [movie, setMoive] = useState("");
  const { id } = useParams();
  const getMovieDetail = async () => {
    const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
    const json = await response.json();
    setMoive(json.data.movie);
  };

  useEffect(() => {
    getMovieDetail();
  }, []);

  return (
    <>
      {movie ? (
        <Movie key={movie.id} id={movie.id} title={movie.title} medium_cover_image={movie.medium_cover_image} summary={movie.description_full} genres={movie.genres} />
      ) : null}
    </>
  );
};

export default Detail;
