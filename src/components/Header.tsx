import { Link } from "react-router-dom";
import FilterForm from "./FilterForm";
import "./Header.css";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <div className="Header">
      <h1>
        <Link to="/">Movies to chill to</Link>
      </h1>
      <div className="filters">
        <FilterForm />
      </div>
      <div className="searchBar">
        <SearchBar />
      </div>
      <Link to="/watchlist">
        <h2>Watchlist</h2>
      </Link>
    </div>
  );
};

export default Header;
