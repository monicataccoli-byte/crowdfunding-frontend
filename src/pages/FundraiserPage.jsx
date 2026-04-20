import FundraiserCard from "../components/FundraiserCard";
import useFundraisers from "../hooks/use-fundraisers";
import "./FundraiserPage.css";

function FundraiserPage() {
  const { fundraisers, isLoading, error } = useFundraisers();

  return (
    <main className="fundraiser-page">
      <section className="fundraiser-page-header">
        <p className="fundraiser-page-tag">All Fundraisers</p>
        <h1>Support Every Pawse Furlife</h1>
        <p>
          Browse all current animal care fundraisers and help provide food,
          shelter, medical care, and long-term dignity.
        </p>
      </section>

      {isLoading && <p>Loading fundraisers...</p>}
      {error && <p>{error}</p>}

      <section className="fundraiser-page-grid">
        {fundraisers.map((fundraiser) => (
          <FundraiserCard key={fundraiser.id} fundraiser={fundraiser} />
        ))}
      </section>
    </main>
  );
}

export default FundraiserPage;