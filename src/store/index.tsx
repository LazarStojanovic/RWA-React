import { combineReducers } from 'redux';
import citiesReducer from './citiesReducer';
import cityComponentReducer from './cityComponentReducer';
import restaurantsReducer from './restaurantsReducer';
import cinemasReducer from './cinemaReducer';
import categoryReducer from './categoryReducer';
import selectedCinemaReducer from './selected-cinema-reducer';
import { City } from '../models/City';
import { Restaurant } from '../models/Restaurant';
import { Cinema } from '../models/Cinema';
import { Category} from '../models/Category';
import { Review} from '../models/Review';
import selectedRestaurantReducer from './selected-restaurant-reducer';
import reviewsReducer from './reviewsReducer';





export interface AppState {
    cities?: City[];
    city: City;
    restaurants: Restaurant[];
    cinemas: Cinema[];
    categories: Category[];
    selectedCinema: Cinema;
    selectedRestaurant: Restaurant;
    reviews: Review[];
}


export const rootReducer = combineReducers({
    cities: citiesReducer,
    city: cityComponentReducer,
    restaurants: restaurantsReducer,
    cinemas: cinemasReducer,
    selectedCinema: selectedCinemaReducer,
    selectedRestaurant: selectedRestaurantReducer,
    categories: categoryReducer,
    reviews: reviewsReducer
});