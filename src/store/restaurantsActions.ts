import { Action } from 'redux';
import { Restaurant} from '../models/Restaurant';

export const FETCH_RESTAURANTS = 'FETCH RESTAURANTS';
export const ADD_RESTAURANTS = 'ADD RESTAURANTS';
export const SEND_RESTAURANT_DATA = 'SEND_RESTAURANT_DATA';

export interface FetchRestaurants extends Action {}
export interface AddRestaurants extends Action {
	restaurants: Restaurant[];
}
export interface sendDataToRestaurantComponent extends Action {
	restaurant: Restaurant;
}
export function fetchRestaurants(): FetchRestaurants {
	return {
		type: FETCH_RESTAURANTS
	};
}

export function addRestaurants(restaurants: Restaurant[]): AddRestaurants {
	return {
		type: ADD_RESTAURANTS,
		restaurants: restaurants
	};
}

export function sendDataToRestaurantComponent(restaurant: Restaurant): sendDataToRestaurantComponent{
	return{
		type: SEND_RESTAURANT_DATA,
		restaurant: restaurant
	};
}
