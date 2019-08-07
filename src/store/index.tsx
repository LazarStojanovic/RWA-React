import { combineReducers } from 'redux';
import { City } from '../models/City';
import { Restaurant } from '../models/Restaurant';
import { Cinema } from '../models/Cinema';
import { Category} from '../models/Category';
import { Review} from '../models/Review';
import citiesReducer from './reducers/citiesReducer';
import cityComponentReducer from './reducers/cityComponentReducer';
import restaurantsReducer from './reducers/restaurantsReducer';
import cinemasReducer from './reducers/cinemaReducer';
import categoryReducer from './reducers/categoryReducer';
import selectedCinemaReducer from './reducers/selected-cinema-reducer';
import selectedRestaurantReducer from './reducers/selected-restaurant-reducer';
import reviewsReducer from './reducers/reviewsReducer';

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