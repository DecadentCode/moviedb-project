import axios from "axios";

import MovieResponse from "../models/MovieResponse";
import SingleMovie from "../models/SingleMovie";
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
      console.log(response.data);

      return response.data;
    });
};

export const getMovieById = (id: string): Promise<SingleMovie> => {
  return axios
    .get(`https://api.themoviedb.org/3/movie/${encodeURIComponent(id)}`, {
      params: { api_key: key },
    })
    .then((response) => {
      console.log(response.data);
      return response.data;
    });
};
