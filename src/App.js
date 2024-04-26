import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Checkers from "./pages/checkers";
import Portfolio from "./pages/portfolio";
import GameList from "./pages/game-list";
import Calculator from "./pages/calculator";

/**
 * App page.
 * Uses React Router to navigate app.
 */
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Home page */}
          <Route path="/portfolio_03" element={<Home />} />

          {/* Project pages */}
          <Route path="/portfolio_03/checkers" element={<Checkers />} />
          <Route path="/portfolio_03/portfolio" element={<Portfolio />} />
          <Route path="/portfolio_03/game-list" element={<GameList />} />
          <Route path="/portfolio_03/calculator" element={<Calculator />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
