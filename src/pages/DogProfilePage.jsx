import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getFundraiser } from "../api/get-fundraiser";
import { dogDetails } from "../data";
import "./DogProfilePage.css";

function DogProfilePage() {
  const { id } = useParams();
  const [fundraiser, setFundraiser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function loadFundraiser() {
      try {
        const apiFundraiser = await getFundraiser(id);

        const fallbackDog =
          dogDetails.find(
            (dog) =>
              dog.title?.toLowerCase() === apiFundraiser.title?.toLowerCase()
          ) || dogDetails.find((dog) => dog.id === Number(id));

        const mergedFundraiser = {
          id: apiFundraiser.id,
          title: apiFundraiser.title || fallbackDog?.title || "Unnamed",
          breed: fallbackDog?.breed || "Unknown",
          age: fallbackDog?.age || "Unknown",
          sex: fallbackDog?.sex || "Unknown",
          vaccinated: fallbackDog?.vaccinated || "Unknown",
          neutered: fallbackDog?.neutered || "Unknown",
          description:
            apiFundraiser.description ||
            fallbackDog?.description ||
            "No description available.",
          story: fallbackDog?.story || "No story available yet.",
          temperament: fallbackDog?.temperament || "Not yet listed.",
          care_needs: fallbackDog?.care_needs || "Daily care required.",
          medical_notes: fallbackDog?.medical_notes || "No medical notes listed.",
          goal: apiFundraiser.goal || 0,
          amount_raised: apiFundraiser.amount_raised || 0,
          image: apiFundraiser.image || fallbackDog?.image || "",
          is_open: apiFundraiser.is_open ?? true,
          owner: apiFundraiser.owner || null,
          pledges: apiFundraiser.pledges || [],
        };

        if (isMounted) {
          setFundraiser(mergedFundraiser);
          setError("");
        }
      } catch (err) {
        console.error(err);

        const fallbackDog = dogDetails.find((dog) => dog.id === Number(id));

        if (isMounted) {
          if (fallbackDog) {
            setFundraiser({
              ...fallbackDog,
              goal: 0,
              amount_raised: 0,
              is_open: true,
              owner: null,
              pledges: [],
            });
            setError("Showing saved profile details while live data reconnects.");
          } else {
            setFundraiser(null);
            setError("Profile not found.");
          }
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadFundraiser();

    return () => {
      isMounted = false;
    };
  }, [id]);

  if (isLoading) {
    return (
      <main className="dog-profile-page">
        <div className="dog-profile-not-found">
          <h1>Loading profile...</h1>
        </div>
      </main>
    );
  }

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

          {error && <p className="dog-profile-warning">{error}</p>}

          <div className="dog-profile-details">
            <p>
              <strong>Age:</strong> {fundraiser.age}
            </p>
            <p>
              <strong>Breed:</strong> {fundraiser.breed}
            </p>
            <p>
              <strong>Sex:</strong> {fundraiser.sex}
            </p>
            <p>
              <strong>Vaccinated:</strong> {fundraiser.vaccinated}
            </p>
            <p>
              <strong>Neutered:</strong> {fundraiser.neutered}
            </p>
            <p>
              <strong>Raised:</strong> ${fundraiser.amount_raised}
            </p>
            <p>
              <strong>Goal:</strong> ${fundraiser.goal}
            </p>
            <p>
              <strong>Status:</strong> {fundraiser.is_open ? "Open" : "Closed"}
            </p>
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