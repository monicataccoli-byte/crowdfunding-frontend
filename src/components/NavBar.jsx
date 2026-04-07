import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <h2>Pawse Furever</h2>
      </div>

      <div className="nav-links">
        <a href="/">Home</a>
        <button className="login-btn">Login</button>
      </div>

    </nav>
  );
}

export default NavBar;