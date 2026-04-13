import { Link } from "react-router-dom";
import { oneFundraiser } from "../data";
import house from "../assets/house.png";
import "./HomePage.css";

function HomePage() {
  return (
    <main className="homepage">
      <section className="hero-intro">

        {/* NEW IMAGE LOGO */}
        <img src={house} alt="Pawse Furlife Logo" className="hero-logo" />

        <p className="hero-tag">Be a Pet&apos;s Saviour</p>

        <h1>Pawse Furlife Furever</h1>

        <p className="hero-text">
          A compassionate crowdfunding platform supporting safe housing, care,
          and dignity for animals awaiting adoption or lifelong sanctuary.
        </p>
      </section>

      <section className="homepage-layout">
        <aside className="sidebar">
          <button className="sidebar-button primary">Start a Fundraiser</button>
          <button className="sidebar-button">How It Works</button>
          <button className="sidebar-button">Donate Now</button>
          <button className="sidebar-button">Success Stories</button>
        </aside>

        <section className="featured-area">
          <div className="pucci-card">
            <div className="pucci-image-wrap">
              <img
                src={oneFundraiser.image}
                alt={oneFundraiser.title}
                className="pucci-image"
              />
            </div>

            <div className="pucci-content">
              <p className="featured-label">Featured Pawse Furlife</p>
              <h2>{oneFundraiser.title}</h2>

              <div className="pucci-meta">
                <span>{oneFundraiser.breed}</span>
                <span>{oneFundraiser.age}</span>
              </div>

              <p className="pucci-description">
                {oneFundraiser.description}
              </p>

              <div className="homepage-actions">
                <Link to="/fundraisers" className="view-all-button">
                  View All Fundraisers
                </Link>

                <Link to="/login" className="secondary-action-button">
                  Login / Register
                </Link>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}

export default HomePage;