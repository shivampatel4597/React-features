import Contact from "./contact";
import Home from "./home";
// Switch are replaced by Routes
import { Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/" target="_blank">
              Home
            </Link>
          </li>
          <li>
            <Link to="/contact"  target="_blank">Contact</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
