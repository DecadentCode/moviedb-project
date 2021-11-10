import { FormEvent, useState } from "react";
import { useHistory } from "react-router";
import "./FilterForm.css";

const FilterForm = () => {
  const [certInput, setCertInput] = useState("");
  const [genreInput, setGenreInput] = useState("");
  const [voteAvgGreat, setVoteAvgGreat] = useState(NaN);

  const history = useHistory();

  const submitHandler = (event: FormEvent): void => {
    event.preventDefault();
    let filterURL = "";
    if (certInput) {
      filterURL += `&cert=${certInput}`;
    }
    if (genreInput) {
      filterURL += `&genre=${genreInput}`;
    }
    if (voteAvgGreat) {
      filterURL += `&voteAvgGreat=${voteAvgGreat}`;
    }
    history.push(`/?${filterURL}`);
  };

  const voteHandler = (rating: string) => {
    if (rating === "1star") {
      setVoteAvgGreat(1);
    } else if (rating === "2star") {
      setVoteAvgGreat(3);
    } else if (rating === "3star") {
      setVoteAvgGreat(5);
    } else if (rating === "4star") {
      setVoteAvgGreat(7);
    } else if (rating === "5star") {
      setVoteAvgGreat(8);
    } else {
      setVoteAvgGreat(NaN);
    }
  };

  return (
    <div className="FilterFormContainer">
      <h2>Filters</h2>
      <form action="" className="FilterForm" onSubmit={submitHandler}>
        <label htmlFor="certification">
          Certification
          <select
            name="certification"
            id="certification"
            onChange={(e) => setCertInput(e.target.value)}
          >
            <option value="">Any</option>
            <option value="G">G</option>
            <option value="PG">PG</option>
            <option value="PG-13">PG-13</option>
            <option value="R">R</option>
          </select>
        </label>

        <label htmlFor="length">
          User Rating
          <select
            name="rating"
            id="rating"
            onChange={(e) => voteHandler(e.target.value)}
          >
            <option value="">Any</option>
            <option value="1star">★</option>
            <option value="2star">★★</option>
            <option value="3star">★★★</option>
            <option value="4star">★★★★</option>
            <option value="5star">★★★★★</option>
          </select>
        </label>

        <label htmlFor="genres">
          Genre
          <select
            name="genres"
            id="genres"
            onChange={(e) => setGenreInput(e.target.value)}
          >
            <option value="">Any</option>
            <option value="28">Action</option>
            <option value="12">Adventure</option>
            <option value="16">Animation</option>
            <option value="35">Comedy</option>
            <option value="80">Crime</option>
            <option value="99">Documentary</option>
            <option value="18">Drama</option>
            <option value="10751">Family</option>
            <option value="14">Fantasy</option>
            <option value="36">History</option>
            <option value="27">Horror</option>
            <option value="10402">Music</option>
            <option value="9648">Mystery</option>
            <option value="10749">Romance</option>
            <option value="878">Science Fiction</option>
            <option value="10770">TV Movie</option>
            <option value="53">Thriller</option>
            <option value="10752">War</option>
            <option value="37">Western</option>
          </select>
        </label>

        <button>Submit Filters</button>
      </form>
    </div>
  );
};

export default FilterForm;
