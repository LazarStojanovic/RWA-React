import { Action } from 'redux';
import { Review} from '../models/Review';

export const FETCH_REVIEWS = 'FETCH REVIEWS';
export const ADD_REVIEWS = 'ADD REVIEWS';

export interface FetchReviews extends Action {}
export interface AddReviews extends Action {
	reviews: Review[];
}

export function fetchReviews(): FetchReviews {
	return {
		type: FETCH_REVIEWS
	};
}

export function addReviews(reviews: Review[]): AddReviews {
	return {
		type: ADD_REVIEWS,
		reviews: reviews
	};
}


