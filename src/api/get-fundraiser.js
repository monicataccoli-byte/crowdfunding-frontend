const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

export async function getFundraisers() {
  const response = await fetch(`${API_BASE_URL}/fundraisers/`);

  if (!response.ok) {
    throw new Error("Failed to fetch fundraisers.");
  }

  return await response.json();
}
