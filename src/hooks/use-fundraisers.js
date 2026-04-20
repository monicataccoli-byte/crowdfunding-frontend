import { useEffect, useState } from "react";

function useFundraisers() {
  const [fundraisers, setFundraisers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadFundraisers() {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/fundraisers/`);

        if (!response.ok) {
          throw new Error("Failed to fetch fundraisers.");
        }

        const data = await response.json();
        setFundraisers(data);
      } catch (err) {
        console.error(err);
        setError("Unable to load fundraisers.");
      } finally {
        setIsLoading(false);
      }
    }

    loadFundraisers();
  }, []);

  return { fundraisers, isLoading, error };
}

export default useFundraisers;