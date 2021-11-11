import { FormEvent, useState } from "react";
import { useHistory } from "react-router";
import "./SearchBar.css";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const history = useHistory();

  const submitHandler = (event: FormEvent): void => {
    event.preventDefault();
    let searchURL = "";
    if (searchTerm) {
      searchURL += `&search=${searchTerm}`;
    }
    history.push(`/?${searchURL}`);
  };

  return (
    <div className="SearchBarContainer">
      <form className="SearchBar" onSubmit={submitHandler}>
        <label htmlFor="search">
          <h2>Search</h2>
        </label>
        <input
          type="text"
          name="search"
          id="search"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
