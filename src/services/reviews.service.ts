const url = 'http://localhost:3001/reviews';

export function getAllReviews() {
	return fetch(url).then(response => response.json());
}