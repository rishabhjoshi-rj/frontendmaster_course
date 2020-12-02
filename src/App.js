import "./App.css";
import Pet from "./Pet";
import { Router, Link } from "@reach/router";
import SearchParams from "./SearchParams";
import Details from "./Details";

function App() {
  return (
    <div className="App">
      <header>
        <Link to="/">Adopt ME</Link>
      </header>

      <Router>
        <SearchParams path="/" />
        <Details path="/details/:id" />
      </Router>
    </div>
  );
}

export default App;
