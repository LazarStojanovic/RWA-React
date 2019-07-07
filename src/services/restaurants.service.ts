const url = 'http://localhost:3001/restaurants';

export function getAllRestaurants() {
	return fetch(url).then(response => response.json());
}