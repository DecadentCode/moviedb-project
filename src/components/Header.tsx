import { Link } from "react-router-dom";
import FilterForm from "./FilterForm";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <h1>
        <Link to="/">Movies to chill to</Link>
      </h1>
      <div className="filters">
        <FilterForm />
      </div>
      <Link to="/watchlist">
        <p>Watchlist</p>
      </Link>
    </div>
  );
};

export default Header;
