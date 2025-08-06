import "./Style/Style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Pages/About/About";
import Resume from "./Pages/Resume/Resume";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Contact from "./Pages/Contact/Contact";
import Skills from "./Pages/Skills/Skills";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </Router>
  );
}

export default App;
