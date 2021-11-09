import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
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
  const runLess: string | null = new URLSearchParams(useLocation().search).get(
    "runLess"
  );
  const runGreat: string | null = new URLSearchParams(useLocation().search).get(
    "runGreat"
  );

  useEffect(() => {
    if (cert || genre || runLess || runGreat) {
      getFilteredMovies(cert, genre, runLess, runGreat).then((response) => {
        setMovies(response.results);
      });
    } else {
      getTrendingMovies().then((response) => {
        setMovies(response.results);
      });
    }
  }, [cert, genre, runLess, runGreat]);

  return (
    <div className="HomeRoute">
      <h2>Movies</h2>
      <MovieResults movies={movies} />
    </div>
  );
};

export default HomeRoute;
