import axios from "axios";
import Movie from "../models/Movie";
import MovieResponse from "../models/MovieResponse";

const key: string | undefined = process.env.REACT_APP_MOVIE_KEY || "";

export const getTrendingMovies = (): Promise<MovieResponse> => {
  return axios
    .get("https://api.themoviedb.org/3/trending/movie/week", {
      params: {
        api_key: key,
      },
    })
    .then((response) => {
      return response.data;
    });
};
