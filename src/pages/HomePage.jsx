import React from "react";
import { allFundraisers } from "../data";
import FundraiserCard from "../components/FundraiserCard";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="home-container">

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>PAWSE FUREVER</h1>
          <p>Be a Pet’s Saviour</p>

          <div className="hero-buttons">
            <button className="primary-btn">Start a Fundraiser</button>
            <button className="secondary-btn">How it Works</button>
          </div>
        </div>
      </section>

      {/* FUNDRAISER LIST */}
      <section className="fundraiser-section">
        <h2>Our Furry Fundraisers</h2>

        <div className="fundraiser-grid">
          {allFundraisers.map((fundraiserData) => (
            <FundraiserCard
              key={fundraiserData.id}
              fundraiserData={fundraiserData}
            />
          ))}
        </div>
      </section>

    </div>
  );
}

export default HomePage;