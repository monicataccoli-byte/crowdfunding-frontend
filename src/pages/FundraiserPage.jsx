import FundraiserCard from "../components/FundraiserCard";
import { allFundraisers } from "../data";
import "./FundraiserPage.css";

function FundraiserPage() {
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

      <section className="fundraiser-page-grid">
        {allFundraisers.map((fundraiser) => (
          <FundraiserCard key={fundraiser.id} fundraiser={fundraiser} />
        ))}
      </section>
    </main>
  );
}

export default FundraiserPage;