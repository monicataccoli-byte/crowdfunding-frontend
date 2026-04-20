import { useState, useEffect } from "react";

export function useFundraisers() {
  const [fundraisers, setFundraisers] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/fundraisers/`)
      .then((response) => response.json())
      .then((data) => {
        setFundraisers(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return fundraisers;
}