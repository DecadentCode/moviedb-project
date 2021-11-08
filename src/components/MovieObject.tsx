import Movie from "../models/Movie";
import "./MovieObject.css";

interface Props {
  movie: Movie;
}

const MovieObject = ({ movie }: Props) => {
  return (
    <li className="MovieObject">
      <p>Title:{movie?.title}</p>
      <img
        src={`https://www.themoviedb.org/t/p/w500${movie?.poster_path}`}
        alt="movie-picture"
      />
    </li>
  );
};

export default MovieObject;
