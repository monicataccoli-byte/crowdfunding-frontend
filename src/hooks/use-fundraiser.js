const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  "https://crowdfunding-monicat-27513b5965d8.herokuapp.com";

export async function getFundraiser(id) {
  const response = await fetch(`${API_BASE_URL}/fundraisers/${id}/`);

  if (!response.ok) {
    throw new Error("Failed to fetch fundraiser.");
  }

  return await response.json();
}