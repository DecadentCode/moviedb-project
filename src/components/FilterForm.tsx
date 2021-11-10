import { FormEvent, useState } from "react";
import { useHistory } from "react-router";
import "./FilterForm.css";

const FilterForm = () => {
  const [certInput, setCertInput] = useState("");
  const [genreInput, setGenreInput] = useState("");
  const [runtimeLesserInput, setRuntimeLesserInput] = useState(NaN);
  const [runtimeGreaterInput, setRuntimeGreaterInput] = useState(NaN);

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
    if (runtimeLesserInput) {
      filterURL += `&runLess=${runtimeLesserInput}`;
    }
    if (runtimeGreaterInput) {
      filterURL += `&runGreat=${runtimeGreaterInput}`;
    }
    history.push(`/?${filterURL}`);
  };

  const runtimeHandler = (duration: string) => {
    if (duration === "short") {
      setRuntimeLesserInput(90);
      setRuntimeGreaterInput(NaN);
    } else if (duration === "medium") {
      setRuntimeLesserInput(120);
      setRuntimeGreaterInput(90);
    } else if (duration === "long") {
      setRuntimeGreaterInput(120);
      setRuntimeLesserInput(NaN);
    } else {
      setRuntimeLesserInput(NaN);
      setRuntimeGreaterInput(NaN);
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
          Length
          <select
            name="length"
            id="length"
            onChange={(e) => runtimeHandler(e.target.value)}
          >
            <option value="">Any</option>
            <option value="short">Less than 90 minutes</option>
            <option value="medium">Between 90 and 120 minutes</option>
            <option value="long">Over 120 minutes</option>
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
