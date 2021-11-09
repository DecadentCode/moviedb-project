import { useEffect, useState } from "react";
import { useParams } from "react-router";
import SingleMovie from "../models/SingleMovie";
import { getMovieById } from "../services/MovieService";
import "./MovieDetails.css";
import MovieObject from "./MovieObject";

interface RouteParams {
  id: string;
}

const MovieDetails = () => {
  const [movie, setMovie] = useState<SingleMovie>();
  let id = useParams<RouteParams>().id;

  useEffect(() => {
    getMovieById(id).then((response) => {
      setMovie(response);
    });
  }, [id]);

  return (
    <div className="MovieDetails">
      <MovieObject movie={movie!} />
      <p>{movie?.overview}</p>
      <p>{movie?.runtime}</p>
      <p>{movie?.certification}</p>
    </div>
  );
};

export default MovieDetails;
