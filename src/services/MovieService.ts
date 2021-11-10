import axios from "axios";

import MovieResponse from "../models/MovieResponse";
import SingleMovie from "../models/SingleMovie";

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

// function for filtered movies
export const getFilteredMovies = (
  cert: string | null,
  genre: string | null,
  // runLess: string | null,
  // runGreat: string | null,
  voteGreat: string | null,
  voteAverageLess: string | null,
  voteAverageGreat: string | null
): Promise<MovieResponse> => {
  return axios
    .get("https://api.themoviedb.org/3/discover/movie", {
      params: {
        api_key: key,
        include_adult: false,
        certification_country: "US",
        region: "US",
        certification: cert,
        with_genres: genre,
        // "with_runtime.lte": runLess,
        // "with_runtime.gte": runGreat,
        "vote_count.gte": voteGreat,
        "vote_average.lte": voteAverageLess,
        "vote_average.gte": voteAverageGreat,
      },
    })
    .then((response) => {
      return response.data;
    });
};
