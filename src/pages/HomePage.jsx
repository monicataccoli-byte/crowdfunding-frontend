import { Link } from "react-router-dom";
import { Heart, PawPrint } from "lucide-react";
import { allFundraisers, oneFundraiser } from "../data";
import "./HomePage.css";

function HomePage() {
  return (
    <main className="homepage">
      <section className="hero-intro">
        <div className="hero-logo">
          <div className="hero-logo-circle">
            <Heart size={28} strokeWidth={2.2} />
            <PawPrint size={20} strokeWidth={2.2} />
          </div>
        </div>

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
                <span>{oneFundraiser.sex}</span>
              </div>

              <p className="pucci-description">{oneFundraiser.description}</p>

              <div className="care-promise-box">
                <h3>Our Furever Promise</h3>
                <p>
                  Every animal deserves dignity, compassion, and lifelong care.
                  Even if a pet is never adopted, support helps ensure they
                  always have a safe home.
                </p>
              </div>

              <Link to="/fundraisers" className="view-all-button">
                View All Fundraisers
              </Link>
            </div>
          </div>
        </section>
      </section>

      <section className="fundraiser-grid-section">
        <div className="section-heading-wrap">
          <p className="section-kicker">Meet the dogs in care</p>
          <h2 className="section-heading">Support a Pawse Furlife</h2>
          <p className="section-text">
            Each fundraiser helps provide food, shelter, veterinary support, and
            long-term safety for dogs waiting for adoption or lifelong care.
          </p>
        </div>

        <div className="fundraiser-grid">
          {allFundraisers.map((fundraiser) => (
            <article className="fundraiser-card" key={fundraiser.id}>
              <div className="fundraiser-image-wrap">
                <img
                  src={fundraiser.image}
                  alt={fundraiser.title}
                  className="fundraiser-image"
                />
              </div>

              <div className="fundraiser-card-content">
                <p className="fundraiser-breed">{fundraiser.breed}</p>
                <h3>{fundraiser.title}</h3>

                <div className="fundraiser-card-meta">
                  <span>{fundraiser.age}</span>
                  <span>{fundraiser.sex}</span>
                </div>

                <p className="fundraiser-card-description">
                  {fundraiser.description}
                </p>

                <div className="fundraiser-card-footer">
                  <div className="goal-badge">
                    Goal: ${fundraiser.goal.toLocaleString()}
                  </div>
                  <Link to="/fundraisers" className="card-link-button">
                    View Campaign
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default HomePage;