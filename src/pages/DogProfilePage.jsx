import { Link, useParams } from "react-router-dom";
import { allFundraisers } from "../data";
import "./DogProfilePage.css";

function DogProfilePage() {
  const { id } = useParams();

  const fundraiser = allFundraisers.find((dog) => dog.id === Number(id));

  if (!fundraiser) {
    return (
      <main className="dog-profile-page">
        <div className="dog-profile-not-found">
          <h1>Profile not found</h1>
          <Link to="/fundraisers" className="back-link">
            Back to Fundraisers
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="dog-profile-page">
      <section className="dog-profile-card">
        <div className="dog-profile-image-wrap">
          <img
            src={fundraiser.image}
            alt={fundraiser.title}
            className="dog-profile-image"
          />
        </div>

        <div className="dog-profile-content">
          <p className="dog-profile-label">Pawse Furlife Profile</p>
          <h1>{fundraiser.title}</h1>

          <div className="dog-profile-details">
            <p><strong>Age:</strong> {fundraiser.age}</p>
            <p><strong>Breed:</strong> {fundraiser.breed}</p>
            <p><strong>Sex:</strong> {fundraiser.sex}</p>
            <p><strong>Vaccinated:</strong> {fundraiser.vaccinated}</p>
            <p><strong>Neutered:</strong> {fundraiser.neutered}</p>
          </div>

          <section className="profile-section">
            <h2>About</h2>
            <p>{fundraiser.description}</p>
          </section>

          <section className="profile-section">
            <h2>Rescue Story</h2>
            <p>{fundraiser.story}</p>
          </section>

          <section className="profile-section">
            <h2>Temperament</h2>
            <p>{fundraiser.temperament}</p>
          </section>

          <section className="profile-section">
            <h2>Care Needs</h2>
            <p>{fundraiser.care_needs}</p>
          </section>

          <section className="profile-section">
            <h2>Medical Notes</h2>
            <p>{fundraiser.medical_notes}</p>
          </section>

          <section className="profile-section promise-box">
            <h2>Furever Promise</h2>
            <p>
              If {fundraiser.title} is never adopted, support helps ensure a
              safe, dignified, and loving home for life.
            </p>
          </section>

          <div className="profile-buttons">
            <button className="profile-donate-button">
              Kindly Donate to {fundraiser.title}
            </button>

            <Link to="/fundraisers" className="back-link">
              Back to Fundraisers
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default DogProfilePage;