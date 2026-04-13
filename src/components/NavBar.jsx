import { Link } from "react-router-dom";
import "./NavBar.css";
import Logo from "./Logo";

function NavBar() {
  return (
    <header className="site-header">
      <div className="nav-left">
        <Link to="/" className="logo-link">
          <div className="logo-circle">
            <Logo />
          </div>
        </Link>
      </div>

      <div className="nav-center">
        <h1>Pawse Furlife Furever</h1>
      </div>

      <div className="nav-right">
        <Link to="/login" className="login-button">
          Login / Register
        </Link>
      </div>
    </header>
  );
}

export default NavBar;