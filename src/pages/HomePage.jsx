import React from "react";
import { allFundraisers } from "../data"; // Adjust path if your data.js is elsewhere
import FundraiserCard from "../components/FundraiserCard";
import "./HomePage.css";

function HomePage() {
    return (
        <div className="homepage-container">
            {/* Hero Section */}
            <header className="hero-section">
                <div className="hero-content">
                    <h1 className="brand-title">Pawse Furever</h1>
                    <p className="slogan">Giving every pet a second chance.</p>
                    <div className="hero-buttons">
                        <button className="btn-primary">Start a Fundraiser</button>
                        <button className="btn-secondary">How it Works</button>
                    </div>
                </div>
            </header>

            {/* Main Content / Grid */}
            <main className="main-content">
                <h2 className="section-title">Active Fundraisers</h2>
                <div className="fundraiser-list">
                    {allFundraisers.map((fundraiserData, key) => {
                        return <FundraiserCard key={key} fundraiserData={fundraiserData} />;
                    })}
                </div>
            </main>
        </div>
    );
}

export default HomePage;
