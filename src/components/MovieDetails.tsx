import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Movie from "../models/Movie";
import { getMovieById } from "../services/MovieService";
import "./MovieDetails.css";
import MovieObject from "./MovieObject";

interface RouteParams {
  id: string;
}

const MovieDetails = () => {
  const [movie, setMovie] = useState<Movie>();
  let id = useParams<RouteParams>().id;

  useEffect(() => {
    getMovieById(id).then((response) => {
      setMovie(response.results);
    });
  }, [id]);

  return (
    <div className="MovieDetails">
      <MovieObject movie={movie!} />
    </div>
  );
};

export default MovieDetails;
