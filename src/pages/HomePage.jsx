import "./HomePage.css";

/* Same corrected logo */
function BrandIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="32" cy="32" r="30" fill="#7a968a" />

      <path
        d="M20 30 L32 20 L44 30"
        fill="none"
        stroke="#f4f7f5"
        strokeWidth="3"
      />

      <rect
        x="24"
        y="30"
        width="16"
        height="14"
        fill="none"
        stroke="#f4f7f5"
        strokeWidth="3"
        rx="2"
      />

      <path
        d="M32 36 
           C30 33, 26 33, 26 36 
           C26 39, 32 43, 32 43 
           C32 43, 38 39, 38 36 
           C38 33, 34 33, 32 36 Z"
        fill="#f4f7f5"
      />
    </svg>
  );
}

function HomePage() {
  return (
    <main className="homepage">
      <section className="hero-intro">
        <BrandIcon className="hero-brand-icon" />

        <p className="hero-tag">Be a Pet&apos;s Saviour</p>

        <h1>
          Pawse<br />
          Furlife<br />
          Furever
        </h1>

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
        </aside>
      </section>
    </main>
  );
}

export default HomePage;