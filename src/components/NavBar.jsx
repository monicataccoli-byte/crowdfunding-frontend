import { Link, Outlet } from "react-router-dom"; 
import "./NavBar.css"; 

function NavBar() {
    return (
        <>
            <nav className="navbar">
                <Link to="/" className="nav-logo">
                    <span className="logo-icon">🐾</span>
                    <div className="logo-text-wrapper">
                        <span className="logo-main">Pawse</span>
                        <span className="logo-accent">Furever</span>
                    </div>
                </Link>
                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/login" className="nav-login-btn">Login</Link>
                </div>
            </nav>
            
            {/* The Outlet renders the HomePage content below the Nav */}
            <Outlet /> 
        </>
    );
}

export default NavBar;
