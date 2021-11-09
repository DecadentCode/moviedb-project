// interface Genres {
//   id: number;
//   name: string;
// }

export default interface SingleMovie {
  id: number;
  title: string;
  adult: boolean;
  //   genres: Genres[];+
  genre_ids: number[];
  runtime: number;
  overview: string;
  poster_path: string;
}
