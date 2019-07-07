import { Action } from 'redux';
import { City } from '../models/City';

export const FETCH_CITIES = 'FETCH CITIES';
export const ADD_CITIES = 'ADD CITIES';
export const SEND_DATA = 'SEND_DATA';

export interface FetchCities extends Action {}
export interface AddCities extends Action {
	cities: City[];
}
export interface sendDataToCityComponent extends Action {
	city: City;
}
export function fetchCities(): FetchCities {
	return {
		type: FETCH_CITIES
	};
}

export function addCities(cities: City[]): AddCities {
	return {
		type: ADD_CITIES,
		cities: cities 
	};
}

export function sendDataToCityComponent(city: City): sendDataToCityComponent{
	return{
		type: SEND_DATA,
		city: city
	};
}
