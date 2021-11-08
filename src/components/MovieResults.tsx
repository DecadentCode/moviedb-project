import Movie from "../models/Movie";
import MovieObject from "./MovieObject";
import "./MovieResults.css";

interface Props {
  movie: Movie[];
}

const MovieResults = ({ movie }: Props) => {
  return (
    <div className="MovieResults">
      <ul>
        {movie.map((item) => (
          <MovieObject key={item.id} movie={item} />
        ))}
      </ul>
    </div>
  );
};

export default MovieResults;
