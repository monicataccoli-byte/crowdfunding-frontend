import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/use-auth.js";
import "./NavBar.css"; // 1. Add this import

function NavBar() {
    const { auth, setAuth } = useAuth();

    const handleLogout = () => {
      window.localStorage.removeItem("token");
      setAuth({ token: null });
    };

    return (
      <div>
        <nav>
          <Link to="/">Pawse Furever 🐾</Link> {/* Added a brand name/emoji */}
          
          <div className="nav-right"> {/* 2. Wrap these for spacing */}
            {auth.token ? (
                <Link to="/" onClick={handleLogout}>
                    Log Out
                </Link>
                ) : (
                <Link to="/login">Login</Link>
              )}
          </div>
        </nav>
        <Outlet />
      </div>
  );
}

export default NavBar;
