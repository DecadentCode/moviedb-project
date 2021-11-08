import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <h1>Movies to chill to</h1>

      <p>Filters</p>
      <p>Watchlist</p>
      <form action="">
        <label htmlFor="rating">Rating</label>
        <select name="rating" id="rating">
          <option value="g">G</option>
          <option value="pg">PG</option>
          <option value="pg-13">PG-13</option>
          <option value="r">R</option>
        </select>
        <label htmlFor="">Genre</label>
        <select name="genres" id="genres">
          <option value="action">Action</option>
          <option value="adventure">Adventure</option>
          <option value="animation">Animation</option>
          <option value="comdey">Comedy</option>
          <option value="crime">Crime</option>
          <option value="documentary">Documentary</option>
          <option value="drama">Drama</option>
          <option value="family">Family</option>
          <option value="fantasy">Fantasy</option>
          <option value="history">History</option>
          <option value="horror">Horror</option>
          <option value="music">Music</option>
          <option value="mystery">Mystery</option>
          <option value="romance">Romance</option>
          <option value="science-fiction">Science Fiction</option>
          <option value="to-movie">TV Movie</option>
          <option value="thriller">Thriller</option>
          <option value="war">War</option>
          <option value="western">Western</option>
        </select>

        <label htmlFor="length">Length</label>
        <select name="length" id="length">
          <option value="short">1.5</option>
          <option value="medium">1.5-2.5</option>
          <option value="long">2.5+</option>
        </select>
      </form>
    </div>
  );
};

export default Header;
