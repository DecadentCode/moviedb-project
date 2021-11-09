import { useContext } from "react";
import { useHistory } from "react-router";
import WatchlistContext from "../context/WatchlistContext";
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

  const { addWatchlist, removeWatchlist, isWatch } =
    useContext(WatchlistContext);

  return (
    <li className="MovieObject">
      <p>{movie?.title}</p>
      <img
        src={`https://www.themoviedb.org/t/p/w500${movie?.poster_path}`}
        alt="movie-poster"
        onClick={() => seeDetails(movie?.id)}
      />
      {!isWatch(movie?.id) ? (
        <i className="fas fa-clock" onClick={() => addWatchlist(movie)}></i>
      ) : (
        <i
          className="fas fa-clock watchlist"
          onClick={() => removeWatchlist(movie?.id)}
        ></i>
      )}
    </li>
  );
};

export default MovieObject;
