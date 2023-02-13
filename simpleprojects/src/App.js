import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./component/Contact";
import About from "./component/About";
import Home from "./component/Home";

import Header from "./component/Header";
import "./styles/App.scss";
import "./styles/Header.scss";
import "./styles/home.scss";

function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
