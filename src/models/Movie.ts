export default interface Movie {
  id: number;
  adult: boolean;
  genre_ids: number[];
  poster_path: string;
  title: string;
}
