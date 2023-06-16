import { NavLink } from "react-router-dom";
import {
  LinkIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-secondary">
      <div className="container">
        <NavLink className="navbar-brand fw-bold" to="/">
          LinksApp <LinkIcon width={20} />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                aria-current="page"
                to="/login"
              >
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/signup">
                Signup
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                to="/username"
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Username
              </NavLink>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <NavLink to="/profile" className="dropdown-item" href="#">
                    Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink to="links" className="dropdown-item" href="#">
                    Link Page
                  </NavLink>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <NavLink to="logout" className="dropdown-item" href="#">
                    Logout <ArrowRightOnRectangleIcon width={20} />
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
