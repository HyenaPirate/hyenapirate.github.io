import TagsDatabase from "../scripts/TagsDatabase";
import "../styles/Tag.css";

function Tag({ tagName }) {
  const tag = TagsDatabase[tagName];

  if (!tag) {
    return (
      <div className="tag-container tag-unknown">
        <span className="tag-text">{tagName}</span>
      </div>
    );
  }

  return (
    <div className="tag-container" style={{ backgroundColor: tag.color }}>
      <h2 className="tag-text">{tag.label}</h2>
    </div>
  );
}

export default Tag;
