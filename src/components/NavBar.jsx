import "../styles/NavBar.css";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

function NavBar() {
  const { t } = useTranslation("navigation");
  return (
    <nav className="navbar">
      <div className="navbar-name">mgr inż. Mateusz Banaszkiewicz</div>

      <div className="navbar-buttons-wrapper">
        <NavButton
          to="/"
          label={t("button.home")}
          icon="/assets/icons/home-svgrepo-com.svg"
        />

        <NavButton
          to="/projects"
          label={t("button.projects")}
          icon="/assets/icons/cog-svgrepo-com.svg"
        />

        <NavButton
          to="/skills"
          label={t("button.skills")}
          icon="/assets/icons/hammer-svgrepo-com.svg"
        />

        <NavButton
          to="/history"
          label={t("button.history")}
          icon="/assets/icons/block-quote-svgrepo-com.svg"
        />

        <NavButton
          to="/contact"
          label={t("button.contact")}
          icon="/assets/icons/envelope-svgrepo-com.svg"
        />
      </div>
    </nav>
  );
}

function NavButton({ to, label, icon }) {
  return (
    <NavLink
      to={to}
      end={to === "/"}
      className={({ isActive }) =>
        isActive ? "navButton active" : "navButton"
      }
    >
      <img className="navButton-icon" src={icon} alt="" />
      <span className="navButton-label">{label}</span>
    </NavLink>
  );
}

export default NavBar;
