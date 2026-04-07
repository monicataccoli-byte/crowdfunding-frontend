import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <>
            <nav className="navbar">
                <Link to="/" className="nav-logo">
                    <div className="logo-container">
                        <span className="logo-icon">🐾</span>
                        <div className="logo-text">
                            <span className="logo-main">Pawse</span>
                            <span className="logo-accent">Furever</span>
                        </div>
                    </div>
                </Link>

                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/login" className="nav-login-btn">Login</Link>
                </div>
            </nav>
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default NavBar;
