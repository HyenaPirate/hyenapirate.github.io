import "../styles/ProjectCard.css";
import ErrorImg from "../assets/error.png";
import TagsDatabase from "../scripts/TagsDatabase";

function ProjectCard({ project, onClick }) {
  return (
    <div className="projectCard" onClick={onClick}>
      <img
        className="projectBanner"
        src={project.bannerPath || ErrorImg}
        onError={(e) => {
          e.currentTarget.src = ErrorImg;
        }}
        alt={project.title}
      />
      <div className="projectTitle">{project.title}</div>
      <div className="tag-list">
        {project.tags?.map((tag) => (
          <CardTag key={tag} tag={tag} />
        ))}
      </div>
    </div>
  );
}

function CardTag({ tag }) {
  return (
    <div
      className="tag-dot"
      style={{ backgroundColor: TagsDatabase[tag]?.color }}
    />
  );
}

export default ProjectCard;
