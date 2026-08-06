import "../styles/NavBar.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-name">mgr inż. Mateusz Banaszkiewicz</div>

      <div className="navbar-buttons-wrapper">
        <NavButton
          to="/"
          label="Home"
          icon="/assets/icons/home-svgrepo-com.svg"
        />

        <NavButton
          to="/projects"
          label="Projects"
          icon="/assets/icons/cog-svgrepo-com.svg"
        />

        <NavButton
          to="/skills"
          label="Skills"
          icon="/assets/icons/hammer-svgrepo-com.svg"
        />

        <NavButton
          to="/history"
          label="History"
          icon="/assets/icons/block-quote-svgrepo-com.svg"
        />

        <NavButton
          to="/contact"
          label="Contact"
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
