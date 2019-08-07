const url = "http://localhost:3001/cities";

export function getAllCities() {
  return fetch(url).then(response => response.json());
}
