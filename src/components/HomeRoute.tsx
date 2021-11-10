import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Movie from "../models/Movie";
import { getFilteredMovies, getTrendingMovies } from "../services/MovieService";
import "./HomeRoute.css";
import MovieResults from "./MovieResults";

const HomeRoute = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const cert: string | null = new URLSearchParams(useLocation().search).get(
    "cert"
  );
  const genre: string | null = new URLSearchParams(useLocation().search).get(
    "genre"
  );
  const voteAvgGreat: string | null = new URLSearchParams(
    useLocation().search
  ).get("voteAvgGreat");

  const p: string | null = new URLSearchParams(useLocation().search).get("p");

  useEffect(() => {
    if (cert || genre || voteAvgGreat) {
      getFilteredMovies(cert, genre, voteAvgGreat).then((response) => {
        setMovies(response.results);
      });
    } else {
      getTrendingMovies(p).then((response) => {
        setMovies(response.results);
      });
    }
  }, [cert, genre, voteAvgGreat]);
  const history = useHistory();
  const page1 = () => {
    history.push(`/p=1`);
  };
  return (
    <div className="HomeRoute">
      <h2>Movies</h2>
      <MovieResults movies={movies} />
      <button onClick={page1}>Page 1</button>
      <button>Page 2</button>
      <button>Page 3</button>
    </div>
  );
};

export default HomeRoute;
