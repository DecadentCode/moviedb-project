import axios from "axios";

import MovieResponse from "../models/MovieResponse";
import SingleMovieResponse from "../models/SingleMovieResponse";

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

export const getMovieById = (id: string): Promise<SingleMovieResponse> => {
  return axios
    .get(`https://api.themoviedb.org/3/movie/${encodeURIComponent(id)}`, {
      params: { api_key: key },
    })
    .then((response) => {
      return response.data;
    });
};
