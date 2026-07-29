import "../styles/ProjectsOverlay.css";
import ErrorImg from "../assets/error.png";
import Tag from "./Tag";
import StatesDatabase from "../scripts/StatesDatabase";
const docs = import.meta.glob("../projectDocs/*.jsx", {
  eager: true,
  import: "default",
});

export function ProjectsOverlay({ isOpen, onClose, project }) {
  if (!isOpen || !project) return null;

  const Documentation = getDocumentation(project.docPath);

  return (
    <div className="projects-overlay">
      <div className="overlay-background" onClick={onClose}>
        <div className="overlay-container" onClick={(e) => e.stopPropagation()}>
          <ProjectHeader project={project} />

          {Documentation ? (
            <Documentation />
          ) : (
            <p className="no-documentation">Documentation unavailable.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export function getDocumentation(path) {
  if (!path) {
    return null;
  }

  const doc = docs[path];

  return doc ?? null;
}

function ProjectHeader({ project }) {
  const state = StatesDatabase[project.state]
    ? StatesDatabase[project.state]
    : { label: " State unknown", color: "#777777" };
  return (
    <div className="project-header-container">
      <div className="project-header-text-section">
        <h1 className="project-title">{project.title}</h1>
        <div className="project-state" style={{ backgroundColor: state.color }}>
          {state.label}
        </div>
        <p className="project-summary">{project.summary}</p>
        <div className="project-tags">
          {project.tags?.map((tag) => (
            <Tag key={tag} tagName={tag} />
          ))}
        </div>
      </div>
      <img
        className="project-image"
        src={project.bannerPath || ErrorImg}
        onError={(e) => {
          e.currentTarget.src = ErrorImg;
        }}
        alt={project.title}
      />
    </div>
  );
}
