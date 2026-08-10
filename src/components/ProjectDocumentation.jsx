import "../styles/ProjectDocumentation.css";
import ErrorImg from "../assets/error.png";

export function DocImage({ src, title, size = "100%" }) {
  return (
    <div className="doc-media">
      <img
        className="doc-image"
        src={src || ErrorImg}
        onError={(e) => {
          e.currentTarget.src = ErrorImg;
        }}
        alt={title}
        style={{ maxWidth: size }}
      />
      {title && <h3 className="doc-media-title">{title}</h3>}
    </div>
  );
}

export function DocImageSet({ children, title }) {
  return (
    <div className="doc-image-set-container">
      {title && <h3 className="doc-media-title">{title}</h3>}

      <div className="doc-image-set">{children}</div>
    </div>
  );
}

export function DocVideo({ src, title }) {
  return (
    <div className="doc-media">
      <video className="doc-video" controls preload="metadata">
        <source src={src} type="video/mp4" />
        Your browser does not support video playback.
      </video>
      {title && <h3 className="doc-media-title">{title}</h3>}
    </div>
  );
}

export function DocChapter({ title, children }) {
  return (
    <section className="doc-chapter">
      <h2 className="chapter-title">{title}</h2>
      <div className="chapter-text">{children}</div>
    </section>
  );
}

export function DocCode({ title, children }) {
  return (
    <div className="doc-element">
      {title && <h3 className="doc-element-title">{title}</h3>}
      <pre className="doc-code">{children}</pre>
    </div>
  );
}

export function DocTable({ title, children }) {
  return (
    <div className="doc-element">
      {title && <h3 className="doc-element-title">{title}</h3>}
      <table className="doc-table">{children}</table>
    </div>
  );
}

export function DocQuote({ title, children }) {
  return (
    <div className="doc-element">
      {title && <h3 className="doc-element-title">{title}</h3>}
      <blockquote className="doc-quote">{children}</blockquote>
    </div>
  );
}

import "../styles/ProjectDocumentation.css";

export function DocFile({ src, description, size }) {
  const isPdf = src.toLowerCase().endsWith(".pdf");
  const fileName = src.split("/").pop();

  return (
    <div className="doc-file">
      <div className="doc-file-icon">{isPdf ? "📄" : "📦"}</div>

      <div className="doc-file-info">
        <h4>{fileName}</h4>

        {description && <p>{description}</p>}

        {size && <span>{size}</span>}
      </div>

      <a
        className="doc-file-button"
        href={src}
        target={isPdf ? "_blank" : undefined}
        rel={isPdf ? "noopener noreferrer" : undefined}
        download={isPdf ? undefined : ""}
      >
        {isPdf ? "Open" : "Download"}
      </a>
    </div>
  );
}

function getEmbedUrl(url) {
  try {
    const parsed = new URL(url);

    // https://youtu.be/VIDEO_ID
    if (parsed.hostname.includes("youtu.be")) {
      return `https://www.youtube.com/embed${parsed.pathname}`;
    }

    // https://www.youtube.com/watch?v=VIDEO_ID
    if (parsed.searchParams.has("v")) {
      return `https://www.youtube.com/embed/${parsed.searchParams.get("v")}`;
    }

    // Already an embed link
    if (parsed.pathname.startsWith("/embed/")) {
      return url;
    }
  } catch {
    return url;
  }

  return url;
}

export function DocYoutube({ link, title }) {
  return (
    <div className="doc-media">
      <div className="doc-youtube-wrapper">
        <iframe
          className="doc-youtube"
          src={getEmbedUrl(link)}
          title={title || "YouTube video"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        />
      </div>

      {title && <h3 className="doc-media-title">{title}</h3>}
    </div>
  );
}

export function DocLink({
  href,
  text = "Go to GitHub Repository",
  icon = "/assets/icons/GitHub_Invertocat_White.svg",
  color = "#24292f",
}) {
  return (
    <a
      className="doc-link"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ backgroundColor: color }}
    >
      <img className="github-icon" src={icon} alt="" />
      {text} ↗
    </a>
  );
}
