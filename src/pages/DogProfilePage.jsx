import { useParams } from "react-router-dom";
import "./DogProfilePage.css";

function DogProfilePage() {
  const { id } = useParams();

  return (
    <main className="dog-profile-page">
      <h1>Dog Profile Page</h1>
      <p>Dog ID: {id}</p>
    </main>
  );
}

export default DogProfilePage;