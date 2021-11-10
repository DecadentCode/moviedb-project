import axios from "axios";

import MovieResponse from "../models/MovieResponse";
import SingleMovie from "../models/SingleMovie";

const key: string | undefined = process.env.REACT_APP_MOVIE_KEY || "";

export const getTrendingMovies = (p: string | null): Promise<MovieResponse> => {
  return axios
    .get("https://api.themoviedb.org/3/trending/movie/week", {
      params: {
        api_key: key,
        page: p,
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

// function for filtered movies
export const getFilteredMovies = (
  cert: string | null,
  genre: string | null,
  voteAvgGreat: string | null
): Promise<MovieResponse> => {
  return axios
    .get("https://api.themoviedb.org/3/discover/movie", {
      params: {
        api_key: key,
        include_adult: false,
        certification_country: "US",
        region: "US",
        "vote_count.gte": 50,
        sort_by: "vote_average.asc",
        page: 5,

        certification: cert,
        with_genres: genre,
        "vote_average.gte": voteAvgGreat,
      },
    })
    .then((response) => {
      return response.data;
    });
};
