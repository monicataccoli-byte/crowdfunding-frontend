import { Link } from "react-router-dom";
import "./FundraiserCard.css";

function FundraiserCard({ fundraiser }) {
  return (
    <article className="fundraiser-card">
      <div className="fundraiser-card-image-wrap">
        <img
          src={fundraiser.image}
          alt={fundraiser.title}
          className="fundraiser-card-image"
        />
      </div>

      <div className="fundraiser-card-content">
        <p className="fundraiser-card-label">Pawse Furlife</p>

        <h3>{fundraiser.title}</h3>

        <div className="fundraiser-details">
          <p><strong>Age:</strong> {fundraiser.age}</p>
          <p><strong>Breed:</strong> {fundraiser.breed}</p>
          <p><strong>Sex:</strong> {fundraiser.sex}</p>
          <p><strong>Vaccinated:</strong> {fundraiser.vaccinated}</p>
          <p><strong>Neutered:</strong> {fundraiser.neutered}</p>
        </div>

        <p className="fundraiser-card-description">{fundraiser.description}</p>

        <div className="fundraiser-card-buttons">
          <Link
            to={`/fundraisers/${fundraiser.id}`}
            className="fundraiser-card-button secondary"
          >
            View Profile
          </Link>

          <button className="fundraiser-card-button primary">
            Kindly Donate
          </button>
        </div>
      </div>
    </article>
  );
}

export default FundraiserCard;