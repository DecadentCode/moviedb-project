import { useEffect, useState } from "react";
import Movie from "../models/Movie";
import { getTrendingMovies } from "../services/MovieService";
import "./HomeRoute.css";
import MovieResults from "./MovieResults";

const HomeRoute = () => {
  const [movies, setMovies] = useState<Movie[]>([
    // {
    //   adult: false,
    //   genre_ids: [35, 27, 878],
    //   id: 16296,
    //   poster_path: "/AtMEp5pLpJr4wOMCxVezTKi2okL.jpg",
    //   title: "Killer Klowns from Outer Space",
    // },
  ]);
  //   const [searchterm, setSearchTerm] = useState("");

  useEffect(() => {
    getTrendingMovies().then((response) => {
      setMovies(response.results);
    });
  }, []);

  return (
    <div className="HomeRoute">
      <h2>Movies</h2>
      <MovieResults movie={movies} />
    </div>
  );
};

export default HomeRoute;
