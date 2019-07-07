import { combineReducers } from 'redux';
import citiesReducer from './citiesReducer';
import cityComponentReducer from './cityComponentReducer';
import restaurantsReducer from './restaurantsReducer';
import cinemasReducer from './cinemaReducer';
import { City } from '../models/City';
import { Restaurant } from '../models/Restaurant';
import { Cinema } from '../models/Cinema';





export interface AppState {
    cities?: City[];
    city: City;
    restaurants: Restaurant[];
    cinemas: Cinema[];
}


export const rootReducer = combineReducers({
    cities: citiesReducer,
    city: cityComponentReducer,
    restaurants: restaurantsReducer,
    cinemas: cinemasReducer
});