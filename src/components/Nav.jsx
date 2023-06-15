import {
  LinkIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-secondary">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#">
          LinksApp <LinkIcon width={20} />
        </a>
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
              <Link
                to="/login"
                className="nav-link active"
                aria-current="page"
                href="#"
              >
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/signup" className="nav-link" href="#">
                Signup
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                to="/username"
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Username
              </Link>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <Link to="/profile" className="dropdown-item" href="#">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link to="links" className="dropdown-item" href="#">
                    Link Page
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link to="logout" className="dropdown-item" href="#">
                    Logout <ArrowRightOnRectangleIcon width={20} />
                  </Link>
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
