import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.article`
  display: flex;
`;

const Movie = ({ id, title, medium_cover_image, summary, genres }) => {
  return (
    <Container>
      <img src={medium_cover_image} alt="" />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </Container>
  );
};

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  medium_cover_image: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
