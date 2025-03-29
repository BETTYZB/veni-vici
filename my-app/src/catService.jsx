// src/api/catService.js
const BASE_URL = "https://api.thecatapi.com/v1";

export async function fetchBreeds() {
  try {
    const res = await fetch(`${BASE_URL}/breeds`);
    return await res.json();
  } catch (error) {
    console.error("API fetch error:", error);
    return [];
  }
}
