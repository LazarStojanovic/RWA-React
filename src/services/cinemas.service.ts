const url = "http://localhost:3001/cinemas";

export function getAllCinemas() {
  return fetch(url).then(response => response.json());
}
