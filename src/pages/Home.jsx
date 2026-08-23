import { Link } from "react-router-dom";
import "../styles/Home.css";
import ProjectsDatabase from "../scripts/projectsDatabase";
import dice_idle from "../assets/dice_idle.png";
import dice_hover from "../assets/dice_hover.gif";
import dice_rolling from "../assets/dice_rolling.gif";
import { useState, useRef } from "react";
import SkillsDatabase from "../scripts/SkillsDatabase";
import { useTranslation } from "react-i18next";

const featuredProjects = [0, 3, 15];

const projectsById = Object.fromEntries(
  ProjectsDatabase.map((project) => [project.id, project]),
);

const getRandomSkills = (count = 8) => {
  const allSkills = SkillsDatabase.flatMap((category) => category.skills);

  return [...allSkills].sort(() => Math.random() - 0.5).slice(0, count);
};

function Home() {
  const { t } = useTranslation("home");

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
          <p className="hero-tag">{t("hero.tag")}</p>

          <h1>
            {t("hero.title1")}
            <br />
            {t("hero.title2")}
            <br />
            {t("hero.title3")}
          </h1>

          <p className="hero-description">
            {t("hero.description")}
            <br />
            <br />
            {t("hero.description2")}
          </p>

          <div className="hero-buttons">
            <Link className="primary-button" to="/Projects">
              {t("hero.viewProjects")}
            </Link>

            <Link className="secondary-button" to="/Contact">
              {t("hero.contact")}
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
              <h3>{t("hero.reroll")} →</h3>

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
                  alt={t("hero.reroll")}
                />
              </button>
            </div>

            <Link className="all-skills-link" to="/Skills">
              {t("hero.allSkills")}
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
          <h2>20+</h2>
          <p>{t("stats.projects")}</p>
        </div>

        <div className="stat-card">
          <h2>10+</h2>
          <p>{t("stats.programming")}</p>
        </div>

        <div className="stat-card">
          <h2>20+</h2>
          <p>{t("stats.technologies")}</p>
        </div>

        <div className="stat-card">
          <h2>100%</h2>
          <p>{t("stats.ambition")}</p>
        </div>
      </section>

      {/* FEATURED */}
      <section className="featured-section">
        <h2>{t("featured.title")}</h2>

        <div className="featured-grid">
          {featuredProjects.map((id) => {
            const project = projectsById[id];

            if (!project) return null;

            return (
              <Link
                key={project.id}
                to="/Projects"
                state={{ openProjectId: project.id }}
                className="project-card"
              >
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <span>{t("featured.readMore")}</span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ABOUT */}
      <section className="about-section">
        <h2>{t("about.title")}</h2>

        <p>
          {t("about.paragraph1")}
          <br />
          <br />
          {t("about.paragraph2")}
        </p>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2>{t("cta.title")}</h2>

        <p style={{ color: "white" }}>{t("cta.description")}</p>

        <Link className="primary-button" to="/Contact">
          {t("cta.button")}
        </Link>
      </section>
    </div>
  );
}

export default Home;
