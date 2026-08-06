import ProjectsDatabase from "../scripts/projectsDatabase";
import ProjectCard from "../components/ProjectCard";
import "../styles/Projects.css";
import { useEffect, useState } from "react";
import { ProjectsOverlay } from "../components/ProjectsOverlay";
import TagsDatabase from "../scripts/TagsDatabase";
import { useLocation } from "react-router-dom";

function Projects() {
  const [displayedProject, setDisplayedProject] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = displayedProject ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [displayedProject]);

  useEffect(() => {
    const id = location.state?.openProjectId;

    if (id === undefined) return;

    const project = ProjectsDatabase.find((p) => p.id === id);

    if (project) {
      setDisplayedProject(project);
    }

    // Clear the state so refreshing doesn't reopen it.
    window.history.replaceState({}, "");
  }, [location.state]);

  function toggleTag(tag) {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  }

  return (
    <div className="ProjectsDiv">
      <ProjectsOverlay
        isOpen={displayedProject}
        onClose={() => setDisplayedProject(null)}
        project={displayedProject}
      />

      <div className="search-block">
        <input
          className="search-bar"
          type="text"
          placeholder="Search projects..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <div className="tag-search-block">
          {Object.entries(TagsDatabase).map(([id, tag]) => (
            <button
              key={id}
              className={
                selectedTags.includes(id) ? "tag-button selected" : "tag-button"
              }
              onClick={() => toggleTag(id)}
              style={{
                backgroundColor: tag.color,
              }}
            >
              {tag.label}
            </button>
          ))}
        </div>
      </div>

      <div className="projects-catalog">
        {ProjectsDatabase.filter((project) => !project.hide)
          .filter((project) =>
            project.title.toLowerCase().includes(searchQuery.toLowerCase()),
          )
          .filter(
            (project) =>
              selectedTags.length === 0 ||
              selectedTags.every((tag) => project.tags.includes(tag)),
          )
          .map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setDisplayedProject(project)}
            />
          ))}
      </div>
    </div>
  );
}

export default Projects;
