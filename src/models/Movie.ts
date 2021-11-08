interface Genre {
  id: number;
}

export default interface Movie {
  id: number;
  adult: boolean;
  genre_ids: number[];
  //   runtime: number;
  poster_path: string;
  title: string;
}
