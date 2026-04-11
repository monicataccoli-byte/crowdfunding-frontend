import { Link } from "react-router-dom";
import { Heart, House } from "lucide-react";
import "./NavBar.css";

function NavBar() {
  return (
    <header className="site-header">
      <div className="top-bar">
        <div className="nav-spacer" />

        <div className="site-title-wrap">
          <div className="nav-logo-circle" aria-hidden="true">
            <House className="nav-logo-house" size={20} strokeWidth={2.2} />
            <Heart className="nav-logo-heart" size={12} strokeWidth={2.4} />
          </div>

          <div className="site-title-text">Pawse Furlife Furever</div>
        </div>

        <nav className="top-nav">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/login" className="nav-pill">
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;