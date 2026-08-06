import { Link } from "react-router-dom";
import "../styles/Home.css";
import ProjectsDatabase from "../scripts/projectsDatabase";
import dice_idle from "../assets/dice_idle.png";
import dice_hover from "../assets/dice_hover.gif";
import dice_rolling from "../assets/dice_rolling.gif";
import { useState, useRef } from "react";
import SkillsDatabase from "../scripts/SkillsDatabase";

const featuredProjects = [0, 3, 15];

const projectsById = Object.fromEntries(
  ProjectsDatabase.map((project) => [project.id, project]),
);

const getRandomSkills = (count = 8) => {
  const allSkills = SkillsDatabase.flatMap((category) => category.skills);

  return [...allSkills].sort(() => Math.random() - 0.5).slice(0, count);
};

function Home() {
  const [skills, setSkills] = useState(() => getRandomSkills());
  const diceHoveredRef = useRef(false);
  const [skillsVisible, setSkillsVisible] = useState(true);
  const [rollId, setRollId] = useState(0);
  const [diceHovered, setDiceHovered] = useState(false);
  const [diceState, setDiceState] = useState("idle");

  const rollDuration = 1000;

  const rerollSkills = () => {
    setDiceState("roll");
    setSkillsVisible(false);

    setTimeout(() => {
      setSkills(getRandomSkills());
      setRollId((id) => id + 1);
      setSkillsVisible(true);
    }, 300);

    setTimeout(() => {
      if (diceHovered) {
        setDiceState("hover");
      } else {
        setDiceState("idle");
      }
    }, 1200);
    setTimeout(() => {
      setDiceState(diceHoveredRef.current ? "hover" : "idle");
    }, 1200);
  };
  return (
    <div className="home-page">
      {/* HERO */}
      <section className="hero-section">
        <div className="hero-text">
          <p className="hero-tag">Engineer • Developer • Maker</p>

          <h1>
            Building ideas
            <br />
            into real
            <br />
            solutions.
          </h1>

          <p className="hero-description">
            I enjoy creating things — from software and embedded systems to
            mechanical designs and 3D printed projects. I like exploring new
            technologies, solving problems and turning ideas into working
            solutions.
            <br />
            <br />
            My projects combine programming, electronics, engineering and
            creativity, whether it's developing applications, designing
            hardware, modifying machines or simply learning something new.
          </p>

          <div className="hero-buttons">
            <Link className="primary-button" to="/Projects">
              View Projects
            </Link>

            <Link className="secondary-button" to="/Contact">
              Contact Me
            </Link>
          </div>

          <div className={`skills-list ${skillsVisible ? "show" : "hide"}`}>
            {skills.map((skill, index) => (
              <span
                key={`${rollId}-${skill}`}
                style={{
                  animationDelay: `${index * 80}ms`,
                }}
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="skills-reroll-wrapper">
            <div className="reroll-row">
              <h3>Not seeing what you're looking for? Try again! →</h3>

              <button
                onMouseEnter={() => {
                  diceHoveredRef.current = true;

                  if (diceState === "idle") {
                    setDiceState("hover");
                  }
                }}
                onMouseLeave={() => {
                  diceHoveredRef.current = false;

                  if (diceState !== "roll") {
                    setDiceState("idle");
                  }
                }}
                onClick={rerollSkills}
              >
                <img
                  src={
                    diceState === "roll"
                      ? dice_rolling
                      : diceState === "hover"
                        ? dice_hover
                        : dice_idle
                  }
                  alt="Reroll skills"
                />
              </button>
            </div>

            <Link className="all-skills-link" to="/Skills">
              Or view all my skills here.
            </Link>
          </div>
        </div>

        <div className="hero-image">
          <img src="/assets/photos/cv_photo_main.png" alt="Portrait" />
        </div>
      </section>

      {/* STATS */}

      <section className="stats-section">
        <div className="stat-card">
          <h2>15+</h2>
          <p>Projects</p>
        </div>

        <div className="stat-card">
          <h2>5+</h2>
          <p>Years Programming</p>
        </div>

        <div className="stat-card">
          <h2>20+</h2>
          <p>Technologies</p>
        </div>

        <div className="stat-card">
          <h2>100%</h2>
          <p>Ambition</p>
        </div>
      </section>

      {/* FEATURED */}

      <section className="featured-section">
        <h2>Featured Projects</h2>

        <div className="featured-grid">
          {featuredProjects.map((id) => {
            const project = projectsById[id];

            if (!project) return null;

            return (
              <Link
                to="/Projects"
                state={{ openProjectId: project.id }}
                className="project-card"
              >
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <span>Read more →</span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ABOUT */}

      <section className="about-section">
        <h2>About Me</h2>

        <p>
          I have always enjoyed understanding how things work and finding ways
          to improve or create them. My interests range from software
          development and embedded systems to mechanical design, 3D printing and
          hands-on engineering.
          <br />
          <br />I enjoy the entire process of making something — from an initial
          idea, through designing and experimenting, to building a final working
          result. Whether it is writing code, designing a part, repairing a
          machine or learning a new technology, I like challenges that allow me
          to grow and create something useful.
        </p>
      </section>

      {/* CTA */}

      <section className="cta-section">
        <h2>Interested in working together? Have an idea to build?</h2>

        <p style={{ color: "white" }}>
          I'm always interested in projects involving software, engineering,
          automation, design and creative problem solving.
        </p>

        <Link className="primary-button" to="/Contact">
          Get in Touch
        </Link>
      </section>
    </div>
  );
}

export default Home;
