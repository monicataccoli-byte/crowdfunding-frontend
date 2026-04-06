import React from 'react';
import FundraiserCard from '../components/FundraiserCard';
import useFundraisers from '../hooks/use-fundraisers';
import "./HomePage.css";

function HomePage() {
    const { fundraisers, isLoading, error } = useFundraisers();

    if (isLoading) return <p className="loading">Loading our furry friends...</p>;
    if (error) return <p className="error">Error loading rescues: {error.message}</p>;

    return (
        <div className="home-container">
            {/* --- HERO SECTION --- */}
            <header className="hero-section">
                <div className="hero-content">
                    <h1>Pause, stop, look and be a pets hero!</h1>
                    <p>Every donation directly funds foster days and prevents euthanasia.</p>
                    <div className="hero-buttons">
                        <button className="btn-primary" onClick={() => window.scrollTo({top: 600, behavior: 'smooth'})}>View Rescues</button>
                        <button className="btn-secondary">How it Works</button>
                    </div>
                </div>
            </header>

            {/* --- FUNDRAISER GRID --- */}
            <main className="main-content">
                <h2 className="section-title">Urgent Pawse Furlife Cases</h2>
                <div className="fundraiser-list">
                    {fundraisers.map((fundraiserData, key) => (
                        <FundraiserCard key={key} fundraiserData={fundraiserData} />
                    ))}
                </div>
            </main>
        </div>
    );
}

export default HomePage;
