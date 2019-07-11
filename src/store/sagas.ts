import { put,takeLatest } from 'redux-saga/effects';
import { FETCH_CITIES, addCities } from './actions';
import { FETCH_RESTAURANTS, addRestaurants } from './restaurantsActions';
import { FETCH_CINEMAS, addCinemas } from './cinemasActions';
import { FETCH_CATEGORIES,addCategories} from './categoryActions';
import { getAllCities } from '../services/cities.service';
import { getAllRestaurants } from '../services/restaurants.service';
import { getAllCinemas } from '../services/cinemas.service';
import { getAllCategories} from '../services/category.service';




function* fetchCities() {
	const cities = yield getAllCities();
	yield put(addCities(cities));
}

function* fetchRestaurants() {
	const restaurants = yield getAllRestaurants();
	yield put(addRestaurants(restaurants));
}

function* fetchCinemas() {
	const cinemas = yield getAllCinemas();
	yield put(addCinemas(cinemas));
}

function* fetchCategories() {
	const categories = yield getAllCategories();
	yield put(addCategories(categories));
}
export function* rootSaga() {
	yield takeLatest(FETCH_CITIES, fetchCities);
	yield takeLatest(FETCH_RESTAURANTS,fetchRestaurants);
	yield takeLatest(FETCH_CINEMAS,fetchCinemas);
	yield takeLatest(FETCH_CATEGORIES,fetchCategories);
}