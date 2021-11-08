import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import Movie from "../models/Movie";
import "./MovieObject.css";

interface Props {
  movie: Movie;
}

const MovieObject = ({ movie }: Props) => {
  const history = useHistory();

  const seeDetails = (id: number): void => {
    history.push(`/movie/${encodeURIComponent(id)}`);
  };

  return (
    <li className="MovieObject">
      <p>{movie?.title}</p>

      <img
        src={`https://www.themoviedb.org/t/p/w500${movie?.poster_path}`}
        alt="movie-poster"
        onClick={() => seeDetails(movie?.id)}
      />
    </li>
  );
};

export default MovieObject;
