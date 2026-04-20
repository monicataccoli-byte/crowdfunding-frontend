import React from "react";
import { Link } from "react-router-dom";
import houseLogo from "../assets/house.png";
import { dogDetails } from "../data";
import FundraiserCard from "../components/FundraiserCard";
import "./HomePage.css";

function HomePage() {
  return (
    <main className="home-page">
      <section className="hero-section">
        <div className="hero-logo-wrap">
          <img src={houseLogo} alt="Pawse Furlife Furever logo" className="hero-logo" />
        </div>

        <p className="hero-tag">BE A PET&apos;S SAVIOUR</p>

        <h1 className="hero-title">Pawse Furlife Furever</h1>

        <p className="hero-subtitle">
          Saving pets lives with Pawse Furlife Furever
        </p>

        <div className="home-page-layout">
          <aside className="hero-sidebar">
            <Link to="/login" className="sidebar-button primary">
              Start a Fundraiser
            </Link>
            <a href="#how-it-works" className="sidebar-button">
              How It Works
            </a>
            <Link to="/fundraisers" className="sidebar-button">
              Donate Now
            </Link>
            <a href="#featured-fundraisers" className="sidebar-button">
              Success Stories
            </a>
          </aside>

          <section className="hero-intro">
            <p>
              A compassionate crowdfunding platform supporting safe housing, care,
              and dignity for animals awaiting adoption or lifelong sanctuary.
            </p>
          </section>
        </div>
      </section>

      <section id="featured-fundraisers" className="featured-section">
        <h2>Featured Fundraisers</h2>
        <div className="fundraiser-preview-grid">
          {dogDetails.slice(0, 3).map((fundraiser) => (
            <FundraiserCard key={fundraiser.id} fundraiser={fundraiser} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default HomePage;