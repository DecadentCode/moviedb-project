import "./App.css";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import HomeRoute from "./components/HomeRoute";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/">
            <HomeRoute />
          </Route>
          <Route path="/gifs/search" exact></Route>
          <Route path="/gifs/:id/details" exact></Route>
          <Route path="/gifs/favorites" exact></Route>
          <Route path="/">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
