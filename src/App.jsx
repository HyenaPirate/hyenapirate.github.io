import ProjectCard from "./components/ProjectCard";
import "./styles/App.css";
import ProjectsDatabase from "./scripts/projectsDatabase";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import History from "./pages/History";
import NavBar from "./components/NavBar";
import bg from "./assets/bgCC.jpg";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="AppDiv" style={{ backgroundImage: `url(${bg})` }}>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/history" element={<History />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
