const url = "http://localhost:3001/category";

export function getAllCategories() {
  return fetch(url).then(response => response.json());
}
