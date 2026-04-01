import { useState, useEffect } from 'react'; // Added quotes

import getFundraisers from '../api/get-fundraisers'; // Added quotes

export default function useFundraisers(fundraisersId) {
  const [fundraisers, setFundraisers] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Fixed variable casing (isloading -> isLoading)
  const [error, setError] = useState(null); // Initialized state

  useEffect(() => {
    getFundraisers(fundraisersId)
      .then((data) => {
        setFundraisers(data);
        console.log(data);
        setIsLoading(false);
      })
      .catch((err) => { // Fixed syntax: Removed ; and fixed syntax
        setError(err);
        setIsLoading(false);
      });
  }, [fundraisersId]); // Added dependency to re-run if ID changes

  return { fundraisers, isLoading, error };
}
