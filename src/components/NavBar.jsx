import "../styles/NavBar.css";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-buttons-wrapper">
        <NavButton
          to="/"
          label="Home"
          icon="/assets/icons/home-svgrepo-com.svg"
        />
        <NavButton
          to="/Projects"
          label="Projects"
          icon="/assets/icons/cog-svgrepo-com.svg"
        />
        <NavButton
          to="/Skills"
          label="Skills"
          icon="/assets/icons/hammer-svgrepo-com.svg"
        />
        <NavButton
          to="/History"
          label="History"
          icon="/assets/icons/block-quote-svgrepo-com.svg"
        />

        <NavButton
          to="/Contact"
          label="Contact"
          icon="/assets/icons/envelope-svgrepo-com.svg"
        />
      </div>
    </nav>
  );
}

function NavButton({ to, label, icon }) {
  return (
    <Link className="navButton" to={to}>
      <img className="navButton-icon" src={icon} />
      <h1 className="navButton-label">{label}</h1>
    </Link>
  );
}

export default NavBar;
