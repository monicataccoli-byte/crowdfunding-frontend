import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <header className="site-header">
      <div className="top-bar">
        <div className="nav-left"></div>

        <div className="site-title-wrap">
          <div className="paw-icon">🐾</div>
          <div className="site-title-text">Pawse Furlife Furever</div>
        </div>

        <nav className="top-nav">
          <Link to="/">Home</Link>
          <Link to="/login" className="nav-pill">
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;