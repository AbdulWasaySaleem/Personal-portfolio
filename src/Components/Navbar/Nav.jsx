import "./Nav.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/resume"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Resume
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Portfolio
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/skills"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Skills
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
