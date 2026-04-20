import { Link } from "react-router-dom";
import houseLogo from "../assets/house.png";
import "./NavBar.css";

function NavBar() {
  return (
    <header className="site-header">
      <div className="nav-left">
        <Link to="/" className="logo-circle" aria-label="Go to homepage">
          <img src={houseLogo} alt="Pawse Furlife Furever logo" className="logo-image" />
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